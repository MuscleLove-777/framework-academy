/* ============================================
   フレームワークアカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('fw-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('fw-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('fw-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('fw-progress', JSON.stringify(this.progress)); localStorage.setItem('fw-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>フレームワークアカデミーへようこそ</h2>
            <p>ビジネス戦略、マーケティング、思考法、コミュニケーション、マネジメント、イノベーション — 世界中のフレームワークを体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>世界のフレームワークを全て学習しました。<br>実践で磨いていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('fw-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('fw-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('fw-progress'); localStorage.removeItem('fw-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: 'ビジネス戦略', terms: [
                { name: 'SWOT分析', desc: '強み・弱み・機会・脅威の4要素で戦略を分析するフレームワーク' },
                { name: 'PEST分析', desc: '政治・経済・社会・技術の4つのマクロ環境要因を分析する手法' },
                { name: 'ポーターの5フォース', desc: '業界の競争環境を5つの力で分析する競争戦略のフレームワーク' },
                { name: 'バリューチェーン', desc: '企業活動を価値の連鎖として分析し競争優位を見出す手法' },
                { name: '3C分析', desc: '自社・顧客・競合の3要素から事業環境を分析するフレームワーク' },
                { name: 'VRIO分析', desc: '経営資源の価値・希少性・模倣困難性・組織を評価するフレームワーク' },
                { name: 'BCGマトリクス', desc: '市場成長率と相対的市場シェアで事業を4分類するポートフォリオ分析' },
                { name: 'アンゾフのマトリクス', desc: '市場と製品の新旧組み合わせで成長戦略を4分類するフレームワーク' },
            ]},
            { category: 'マーケティング', terms: [
                { name: 'STP分析', desc: 'セグメンテーション・ターゲティング・ポジショニングの3ステップ' },
                { name: '4P / 4C', desc: '製品・価格・流通・販促（売り手視点）/ 価値・コスト・利便性・対話（買い手視点）' },
                { name: 'AIDMA', desc: '注意→興味→欲求→記憶→行動の消費者購買心理モデル' },
                { name: 'AISAS', desc: '注意→興味→検索→行動→共有のインターネット時代の購買モデル' },
                { name: 'カスタマージャーニー', desc: '顧客が商品を認知してから購入・推奨に至るまでの体験プロセス全体図' },
                { name: 'LTV', desc: 'Life Time Value：顧客が生涯にわたってもたらす総利益' },
                { name: 'RFM分析', desc: '最終購買日・頻度・金額で顧客を分類するセグメンテーション手法' },
            ]},
            { category: '思考・問題解決', terms: [
                { name: 'MECE', desc: '漏れなくダブりなく事象を分類する論理的思考の基本原則' },
                { name: 'ロジックツリー', desc: '問題を階層的に分解して原因や解決策を体系的に整理する手法' },
                { name: 'ピラミッドストラクチャー', desc: '結論→根拠→具体例と論理構造を組み立てるプレゼン手法' },
                { name: 'デザインシンキング', desc: '共感→定義→創造→試作→検証の5ステップで革新的解決策を生む手法' },
                { name: 'クリティカルシンキング', desc: '前提を疑い、証拠に基づいて論理的に判断する思考法' },
                { name: 'システム思考', desc: '要素間の相互関係と全体構造を把握して問題を理解する思考法' },
            ]},
            { category: 'コミュニケーション・交渉', terms: [
                { name: 'PREP法', desc: 'Point→Reason→Example→Pointで論理的に伝える話法' },
                { name: 'SDS法', desc: 'Summary→Details→Summaryで簡潔に伝える話法' },
                { name: 'DESC法', desc: 'Describe→Express→Suggest→Consequenceのアサーティブ表現法' },
                { name: 'GROWモデル', desc: 'Goal→Reality→Options→Willのコーチングフレームワーク' },
                { name: 'SBIフィードバック', desc: 'Situation→Behavior→Impactで具体的にフィードバックする手法' },
                { name: 'BATNA', desc: 'Best Alternative to a Negotiated Agreement：交渉の代替案' },
                { name: 'ZOPA', desc: 'Zone of Possible Agreement：合意可能な領域' },
            ]},
            { category: 'マネジメント・組織', terms: [
                { name: 'PDCA', desc: 'Plan→Do→Check→Actの継続的改善サイクル' },
                { name: 'OODAループ', desc: 'Observe→Orient→Decide→Actの高速意思決定フレームワーク' },
                { name: 'OKR', desc: 'Objectives and Key Results：目標と主要成果指標の管理手法' },
                { name: 'KPI', desc: 'Key Performance Indicator：重要業績評価指標' },
                { name: 'BSC', desc: 'Balanced Scorecard：4つの視点から組織パフォーマンスを評価する手法' },
                { name: 'マッキンゼーの7S', desc: '組織の7要素（戦略・構造・システム・共有価値観・スキル・人材・スタイル）の整合性分析' },
                { name: 'アジャイル', desc: '短い反復サイクルで柔軟にプロジェクトを進める開発手法' },
            ]},
            { category: 'イノベーション', terms: [
                { name: 'ブルーオーシャン戦略', desc: '競争のない新市場を創造して無競争の領域で事業を展開する戦略' },
                { name: '破壊的イノベーション', desc: '既存市場の下位セグメントから既存企業を駆逐する革新の理論' },
                { name: 'リーンスタートアップ', desc: 'MVP→計測→学習の反復で効率的に事業を構築する手法' },
                { name: 'ビジネスモデルキャンバス', desc: '9つの構成要素でビジネスモデルを可視化するフレームワーク' },
                { name: 'TOC（制約理論）', desc: 'システムのボトルネックを特定し全体最適を図るマネジメント手法' },
                { name: 'シックスシグマ', desc: 'DMAIC手法で品質のバラつきを最小限にする品質管理手法' },
            ]}
        ];
        const colors = { 'ビジネス戦略': '#2563eb', 'マーケティング': '#e85d04', '思考・問題解決': '#7c3aed', 'コミュニケーション・交渉': '#059669', 'マネジメント・組織': '#dc2626', 'イノベーション': '#0891b2' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">フレームワーク用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">フレームワークアカデミーで扱う重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:180px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
