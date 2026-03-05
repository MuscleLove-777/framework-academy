/* ============================================
   Level 5: マネジメント・組織フレームワーク
   ============================================ */
const LEVEL5_DATA = {
    id: 5,
    title: "マネジメント・組織フレームワーク",
    icon: "👥",
    description: "PDCA、OKR、7S、アジャイルなど組織運営とマネジメントの手法",
    modules: [
        /* =========================================
           Module 501: PDCA & OODAループ
           ========================================= */
        {
            id: 501,
            title: "PDCA & OODAループ",
            duration: "12分",
            content: `
<h2>PDCA & OODAループ</h2>
<p>PDCAサイクルとOODAループは、いずれも継続的な改善や意思決定に用いられる代表的なフレームワークです。それぞれの特性を理解し、状況に応じて使い分けることが重要です。</p>

<h3>1. PDCAサイクルとは</h3>
<p>PDCAサイクルは、品質管理の父と呼ばれるW・エドワーズ・デミングが提唱した<strong>継続的改善のフレームワーク</strong>です。計画を立て、実行し、結果を検証して改善するプロセスを繰り返すことで、業務やプロジェクトの質を段階的に向上させます。</p>

<div class="visual-box">
    <div class="visual-box-title">PDCAサイクル全体像</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:600px;margin:0 auto;">
        <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:1.8rem;font-weight:800;color:#2563eb;">P</div>
            <div style="font-weight:700;color:#2563eb;">Plan（計画）</div>
            <div style="font-size:0.85rem;margin-top:6px;">目標設定・計画立案</div>
        </div>
        <div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:1.8rem;font-weight:800;color:#10b981;">D</div>
            <div style="font-weight:700;color:#10b981;">Do（実行）</div>
            <div style="font-size:0.85rem;margin-top:6px;">計画に基づき実行</div>
        </div>
        <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:1.8rem;font-weight:800;color:#f59e0b;">C</div>
            <div style="font-weight:700;color:#f59e0b;">Check（評価）</div>
            <div style="font-size:0.85rem;margin-top:6px;">結果の測定・検証</div>
        </div>
        <div style="background:#fee2e2;border:2px solid #ef4444;border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:1.8rem;font-weight:800;color:#ef4444;">A</div>
            <div style="font-weight:700;color:#ef4444;">Act（改善）</div>
            <div style="font-size:0.85rem;margin-top:6px;">改善策の策定・標準化</div>
        </div>
    </div>
    <div style="text-align:center;margin-top:12px;font-size:0.85rem;color:var(--text-secondary);">P → D → C → A → P → D → ... と繰り返すことで継続的に改善</div>
</div>

<h3>2. PDCAの各フェーズ詳細</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">P</div>
        <div class="step-content">
            <strong>Plan（計画）</strong>
            目標を設定し、目標達成のための具体的なアクションプランを策定します。現状分析を行い、課題を明確にした上で、達成基準（KPI）や期限を決めます。「何を」「いつまでに」「どうやって」を明確に定義することが重要です。
        </div>
    </div>
    <div class="step">
        <div class="step-num">D</div>
        <div class="step-content">
            <strong>Do（実行）</strong>
            計画に基づいて施策を実行します。実行中は記録を取り、計画通りに進んでいるか、想定外の事態が起きていないかを把握します。小規模なテスト（パイロット）から始めることも有効です。
        </div>
    </div>
    <div class="step">
        <div class="step-num">C</div>
        <div class="step-content">
            <strong>Check（評価）</strong>
            実行結果を計画時に設定した基準と比較・検証します。定量データ（数値）と定性データ（フィードバック）の両面から分析し、目標との差異（ギャップ）を特定します。成功要因と失敗要因を客観的に評価します。
        </div>
    </div>
    <div class="step">
        <div class="step-num">A</div>
        <div class="step-content">
            <strong>Act（改善）</strong>
            評価結果を基に改善策を策定します。うまくいった施策は標準化し、うまくいかなかった施策は原因を追究して修正します。改善策を次のPlanに反映させ、サイクルを回し続けます。
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">PDCAを効果的に回すコツ</div>
    <ul>
        <li><strong>Plan段階で測定可能な指標を設定する</strong> -- 数値で検証できないと Check が曖昧になります</li>
        <li><strong>サイクルを短く回す</strong> -- 1か月や1週間単位の小さなPDCAを推奨</li>
        <li><strong>Checkを省略しない</strong> -- 実行だけして振り返らないのは最も多い失敗パターンです</li>
        <li><strong>Actで「やめる」判断もする</strong> -- 効果のない施策を続けるのは改善ではありません</li>
    </ul>
</div>

<h3>3. OODAループとは</h3>
<p>OODAループは、アメリカ空軍のジョン・ボイド大佐が開発した<strong>高速意思決定フレームワーク</strong>です。不確実性の高い状況下で、相手より速く状況を判断し行動するために設計されました。ビジネスにおいてもVUCA時代の迅速な意思決定に適しています。</p>

<div class="visual-box">
    <div class="visual-box-title">OODAループ全体像</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;max-width:700px;margin:0 auto;">
        <div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#7c3aed;">O</div>
            <div style="font-weight:700;color:#7c3aed;font-size:0.9rem;">Observe</div>
            <div style="font-size:0.8rem;margin-top:4px;">観察</div>
        </div>
        <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#2563eb;">O</div>
            <div style="font-weight:700;color:#2563eb;font-size:0.9rem;">Orient</div>
            <div style="font-size:0.8rem;margin-top:4px;">状況判断</div>
        </div>
        <div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#10b981;">D</div>
            <div style="font-weight:700;color:#10b981;font-size:0.9rem;">Decide</div>
            <div style="font-size:0.8rem;margin-top:4px;">意思決定</div>
        </div>
        <div style="background:#fee2e2;border:2px solid #ef4444;border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#ef4444;">A</div>
            <div style="font-weight:700;color:#ef4444;font-size:0.9rem;">Act</div>
            <div style="font-size:0.8rem;margin-top:4px;">行動</div>
        </div>
    </div>
    <div style="text-align:center;margin-top:12px;font-size:0.85rem;color:var(--text-secondary);">Observe → Orient → Decide → Act を高速で繰り返す</div>
</div>

<div class="steps">
    <div class="step">
        <div class="step-num">O</div>
        <div class="step-content">
            <strong>Observe（観察）</strong>
            外部環境や状況をリアルタイムに観察・情報収集します。市場の変化、顧客の行動、競合の動き、技術トレンドなど、あらゆる情報を収集します。
        </div>
    </div>
    <div class="step">
        <div class="step-num">O</div>
        <div class="step-content">
            <strong>Orient（状況判断）</strong>
            収集した情報を分析・解釈し、状況を判断します。過去の経験、文化的背景、メンタルモデルを活用して、情報に意味付けを行います。OODAループで最も重要なフェーズとされます。
        </div>
    </div>
    <div class="step">
        <div class="step-num">D</div>
        <div class="step-content">
            <strong>Decide（意思決定）</strong>
            状況判断に基づいて、取るべき行動を決定します。完璧な情報を待つのではなく、限られた情報の中で最善の判断を素早く下すことが求められます。
        </div>
    </div>
    <div class="step">
        <div class="step-num">A</div>
        <div class="step-content">
            <strong>Act（行動）</strong>
            決定した行動を即座に実行します。行動の結果を次のObserveにフィードバックし、ループを高速で回し続けます。
        </div>
    </div>
</div>

<h3>4. PDCA vs OODA 比較表</h3>
<table>
    <thead>
        <tr>
            <th>比較項目</th>
            <th>PDCA</th>
            <th>OODA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>目的</strong></td>
            <td>継続的改善・品質向上</td>
            <td>迅速な意思決定・即応</td>
        </tr>
        <tr>
            <td><strong>起源</strong></td>
            <td>品質管理（デミング）</td>
            <td>軍事戦略（ジョン・ボイド）</td>
        </tr>
        <tr>
            <td><strong>スピード</strong></td>
            <td>中〜低速（計画重視）</td>
            <td>高速（行動重視）</td>
        </tr>
        <tr>
            <td><strong>環境適性</strong></td>
            <td>安定的・予測可能な環境</td>
            <td>不確実・変化の激しい環境</td>
        </tr>
        <tr>
            <td><strong>重視するもの</strong></td>
            <td>計画の精度と検証</td>
            <td>状況判断の速さと柔軟性</td>
        </tr>
        <tr>
            <td><strong>適用場面</strong></td>
            <td>製造業の品質管理、業務改善、定型業務</td>
            <td>スタートアップ、危機管理、競争環境</td>
        </tr>
        <tr>
            <td><strong>弱点</strong></td>
            <td>変化への対応が遅い</td>
            <td>品質の安定性が低い</td>
        </tr>
    </tbody>
</table>

<div class="info-box warning">
    <div class="info-box-title">使い分けのポイント</div>
    <p>PDCAとOODAは対立するものではなく、<strong>補完関係</strong>にあります。安定した業務プロセスにはPDCA、変化の激しい環境にはOODAを使い、両者を組み合わせることが最も効果的です。例えば、日常業務はPDCAで改善しつつ、市場環境の急変にはOODAで即応する、というハイブリッド運用が理想的です。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">実践例</div>
    <p><strong>PDCA例:</strong> 工場の不良品率を月次でPlan→Do→Check→Actし、3か月で不良率を50%削減。</p>
    <p><strong>OODA例:</strong> SNSで炎上が発生した際、即座に状況を観察(O)→背景を判断(O)→対応方針を決定(D)→声明を発表(A)し、被害を最小化。</p>
</div>
`,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "PDCAサイクルの「C」は何を意味しますか？",
                    options: [
                        "Change（変更）",
                        "Check（評価）",
                        "Create（創造）",
                        "Control（管理）"
                    ],
                    answer: 1,
                    explanation: "PDCAの「C」はCheck（評価・検証）を意味します。実行結果を計画と比較して差異を分析するフェーズです。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "OODAループで最も重要とされるフェーズはどれですか？",
                    options: [
                        "Observe（観察）",
                        "Orient（状況判断）",
                        "Decide（意思決定）",
                        "Act（行動）"
                    ],
                    answer: 1,
                    explanation: "Orient（状況判断）がOODAループの核心部分です。収集した情報を正しく解釈・判断する能力が、意思決定の質を左右します。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "PDCA と OODA の使い分けとして最も適切なものはどれですか？",
                    options: [
                        "PDCAは新規事業向け、OODAは既存事業向け",
                        "PDCAは安定環境での改善向け、OODAは不確実な環境での迅速対応向け",
                        "PDCAは個人の目標管理向け、OODAは組織全体の戦略向け",
                        "PDCAは短期プロジェクト向け、OODAは長期プロジェクト向け"
                    ],
                    answer: 1,
                    explanation: "PDCAは安定的で予測可能な環境での継続的改善に適し、OODAは不確実で変化の激しい環境での迅速な意思決定に適しています。"
                }
            ]
        },

        /* =========================================
           Module 502: OKR & KPI & BSC
           ========================================= */
        {
            id: 502,
            title: "OKR & KPI & BSC",
            duration: "12分",
            content: `
<h2>OKR & KPI & BSC</h2>
<p>組織の目標管理や業績評価に用いられる代表的なフレームワークとして、OKR（Objectives and Key Results）、KPI（Key Performance Indicators）、BSC（Balanced Scorecard）があります。それぞれの特徴と使い方を理解しましょう。</p>

<h3>1. OKR（Objectives and Key Results）</h3>
<p>OKRは、Google や Intel が採用していることで有名な<strong>目標管理フレームワーク</strong>です。挑戦的な目標（Objective）と、その達成度を測る定量的な成果指標（Key Results）をセットで設定します。</p>

<div class="visual-box">
    <div class="visual-box-title">OKRの構造</div>
    <div style="max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#2563eb,#3b82f6);color:white;border-radius:12px;padding:20px;text-align:center;margin-bottom:16px;">
            <div style="font-size:0.8rem;opacity:0.8;">Objective（目標）</div>
            <div style="font-size:1.2rem;font-weight:800;margin-top:4px;">顧客満足度で業界No.1になる</div>
            <div style="font-size:0.75rem;margin-top:4px;opacity:0.7;">定性的・挑戦的・鼓舞するもの</div>
        </div>
        <div style="display:grid;gap:10px;">
            <div style="background:#dbeafe;border-left:4px solid #2563eb;border-radius:8px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;">
                <div><strong>KR1:</strong> NPS（顧客推奨度）を60から80に向上</div>
                <div style="font-weight:700;color:#2563eb;">70%</div>
            </div>
            <div style="background:#dbeafe;border-left:4px solid #2563eb;border-radius:8px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;">
                <div><strong>KR2:</strong> カスタマーサポート応答時間を平均2時間以内に短縮</div>
                <div style="font-weight:700;color:#2563eb;">85%</div>
            </div>
            <div style="background:#dbeafe;border-left:4px solid #2563eb;border-radius:8px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;">
                <div><strong>KR3:</strong> 顧客の解約率を5%から2%に削減</div>
                <div style="font-weight:700;color:#2563eb;">50%</div>
            </div>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">OKR設定のポイント</div>
    <ul>
        <li><strong>Objectiveは定性的で挑戦的に</strong> -- 60〜70%の達成率が理想（ムーンショット）</li>
        <li><strong>Key Resultsは定量的・測定可能に</strong> -- 数値で進捗を追跡できること</li>
        <li><strong>1つのOに対してKRは3〜5個</strong> -- 多すぎると集中力が散漫になる</li>
        <li><strong>四半期ごとに設定・見直し</strong> -- 短いサイクルで方向修正</li>
        <li><strong>全社に公開する</strong> -- 透明性がアラインメントを生む</li>
    </ul>
</div>

<h3>2. KPI（Key Performance Indicators）</h3>
<p>KPIは、組織やプロジェクトの<strong>重要業績評価指標</strong>です。目標達成に向けた進捗を定量的に測定するための指標で、SMARTの原則に従って設定することが推奨されます。</p>

<div class="visual-box">
    <div class="visual-box-title">KPI設定のSMARTの原則</div>
    <div style="display:grid;gap:10px;max-width:600px;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;">
            <div style="width:44px;height:44px;background:#2563eb;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;">S</div>
            <div><strong>Specific（具体的）</strong><br><span style="font-size:0.85rem;color:var(--text-secondary);">何を達成するか明確に定義する</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;">
            <div style="width:44px;height:44px;background:#7c3aed;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;">M</div>
            <div><strong>Measurable（測定可能）</strong><br><span style="font-size:0.85rem;color:var(--text-secondary);">数値で進捗を追跡できる</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;">
            <div style="width:44px;height:44px;background:#10b981;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;">A</div>
            <div><strong>Achievable（達成可能）</strong><br><span style="font-size:0.85rem;color:var(--text-secondary);">現実的に達成できる範囲である</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;">
            <div style="width:44px;height:44px;background:#f59e0b;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;">R</div>
            <div><strong>Relevant（関連性）</strong><br><span style="font-size:0.85rem;color:var(--text-secondary);">上位目標や事業戦略と整合している</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;">
            <div style="width:44px;height:44px;background:#ef4444;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;">T</div>
            <div><strong>Time-bound（期限付き）</strong><br><span style="font-size:0.85rem;color:var(--text-secondary);">達成期限が明確に設定されている</span></div>
        </div>
    </div>
</div>

<h3>3. OKR vs KPI 比較</h3>
<table>
    <thead>
        <tr>
            <th>比較項目</th>
            <th>OKR</th>
            <th>KPI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>目的</strong></td>
            <td>挑戦的な目標の設定と達成</td>
            <td>業績の定量的な評価・管理</td>
        </tr>
        <tr>
            <td><strong>目標の性質</strong></td>
            <td>ストレッチ目標（60-70%達成が理想）</td>
            <td>100%達成を前提</td>
        </tr>
        <tr>
            <td><strong>設定期間</strong></td>
            <td>四半期ごと</td>
            <td>年度・半期が多い</td>
        </tr>
        <tr>
            <td><strong>公開範囲</strong></td>
            <td>全社に公開（透明性重視）</td>
            <td>上司と本人の間が多い</td>
        </tr>
        <tr>
            <td><strong>評価との連動</strong></td>
            <td>人事評価と切り離す</td>
            <td>人事評価と連動することが多い</td>
        </tr>
        <tr>
            <td><strong>代表企業</strong></td>
            <td>Google, Intel, メルカリ</td>
            <td>多くの日本企業</td>
        </tr>
    </tbody>
</table>

<h3>4. BSC（バランスト・スコアカード）</h3>
<p>BSCは、ロバート・キャプランとデビッド・ノートンが提唱した<strong>戦略的業績管理フレームワーク</strong>です。財務指標だけでなく、4つの視点からバランスよく組織のパフォーマンスを評価します。</p>

<div class="visual-box">
    <div class="visual-box-title">BSCの4つの視点</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:650px;margin:0 auto;">
        <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.3rem;margin-bottom:4px;">💰</div>
            <div style="font-weight:700;color:#2563eb;margin-bottom:6px;">財務の視点</div>
            <div style="font-size:0.82rem;color:var(--text-secondary);text-align:left;">
                <div>売上高成長率</div>
                <div>営業利益率</div>
                <div>ROE・ROA</div>
                <div>キャッシュフロー</div>
            </div>
        </div>
        <div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.3rem;margin-bottom:4px;">👤</div>
            <div style="font-weight:700;color:#10b981;margin-bottom:6px;">顧客の視点</div>
            <div style="font-size:0.82rem;color:var(--text-secondary);text-align:left;">
                <div>顧客満足度</div>
                <div>市場シェア</div>
                <div>リピート率</div>
                <div>NPS</div>
            </div>
        </div>
        <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.3rem;margin-bottom:4px;">⚙️</div>
            <div style="font-weight:700;color:#f59e0b;margin-bottom:6px;">業務プロセスの視点</div>
            <div style="font-size:0.82rem;color:var(--text-secondary);text-align:left;">
                <div>生産性</div>
                <div>品質（不良率）</div>
                <div>リードタイム</div>
                <div>業務効率化率</div>
            </div>
        </div>
        <div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.3rem;margin-bottom:4px;">📚</div>
            <div style="font-weight:700;color:#7c3aed;margin-bottom:6px;">学習と成長の視点</div>
            <div style="font-size:0.82rem;color:var(--text-secondary);text-align:left;">
                <div>従業員満足度</div>
                <div>スキルレベル</div>
                <div>研修受講率</div>
                <div>イノベーション件数</div>
            </div>
        </div>
    </div>
    <div style="text-align:center;margin-top:14px;font-size:0.85rem;color:var(--text-secondary);">学習と成長 → 業務プロセス → 顧客 → 財務 の因果関係で連鎖する</div>
</div>

<div class="info-box formula">
    <div class="info-box-title">BSCの因果関係（戦略マップ）</div>
    <p><strong>学習と成長</strong>（人材育成・スキル向上）→ <strong>業務プロセス</strong>（業務品質・効率向上）→ <strong>顧客</strong>（顧客満足度・ロイヤルティ向上）→ <strong>財務</strong>（売上・利益の向上）</p>
    <p style="margin-top:8px;font-size:0.85rem;">この因果関係を可視化したものを<strong>戦略マップ</strong>と呼びます。4つの視点を単独で見るのではなく、連鎖として捉えることがBSCの本質です。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">3つのフレームワークの使い分け</div>
    <ul>
        <li><strong>OKR</strong> -- チームや個人の挑戦的な目標設定とアラインメントに</li>
        <li><strong>KPI</strong> -- 業務の達成度を定量的にモニタリングする指標として</li>
        <li><strong>BSC</strong> -- 組織全体の戦略を多角的に管理・評価するフレームワークとして</li>
    </ul>
    <p style="margin-top:8px;">これらは排他的ではなく、BSCの各視点にKPIを設定し、その中の重要なものをOKRとして挑戦目標にするといった<strong>組み合わせ</strong>が効果的です。</p>
</div>
`,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "OKRにおいて、理想的な達成率はどの程度とされていますか？",
                    options: [
                        "100%（完全達成）",
                        "60〜70%（ストレッチ目標）",
                        "80〜90%（高達成率）",
                        "50%以下（挑戦的すぎる目標）"
                    ],
                    answer: 1,
                    explanation: "OKRでは60〜70%の達成率が理想とされます。100%達成は目標が簡単すぎた可能性があり、ストレッチ目標として挑戦的であることが重要です。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "KPIを設定する際のSMARTの原則で、「R」は何を表しますか？",
                    options: [
                        "Realistic（現実的）",
                        "Relevant（関連性）",
                        "Reliable（信頼性）",
                        "Rapid（迅速）"
                    ],
                    answer: 1,
                    explanation: "SMARTの「R」はRelevant（関連性）を表し、KPIが上位目標や事業戦略と整合していることを意味します。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "BSC（バランスト・スコアカード）の4つの視点に含まれないものはどれですか？",
                    options: [
                        "財務の視点",
                        "顧客の視点",
                        "競合の視点",
                        "学習と成長の視点"
                    ],
                    answer: 2,
                    explanation: "BSCの4つの視点は「財務」「顧客」「業務プロセス」「学習と成長」です。「競合の視点」は含まれません。"
                }
            ]
        },

        /* =========================================
           Module 503: マッキンゼーの7S & 成功循環モデル
           ========================================= */
        {
            id: 503,
            title: "マッキンゼーの7S & 成功循環モデル",
            duration: "10分",
            content: `
<h2>マッキンゼーの7S & 成功循環モデル</h2>
<p>組織の整合性を分析する「マッキンゼーの7S」と、チームの好循環を生み出す「ダニエル・キムの成功循環モデル」を学びます。どちらも組織の状態を診断し、改善の方向性を見出すための強力なフレームワークです。</p>

<h3>1. マッキンゼーの7Sとは</h3>
<p>マッキンゼーの7Sは、トム・ピーターズとロバート・ウォーターマンが1980年代に提唱した<strong>組織分析フレームワーク</strong>です。組織を構成する7つの要素の整合性（アラインメント）が取れているかを診断します。</p>

<div class="visual-box">
    <div class="visual-box-title">7Sフレームワーク（ハードS + ソフトS）</div>
    <div style="max-width:600px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:20px;">
            <div style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#a78bfa);color:white;border-radius:50%;width:100px;height:100px;line-height:100px;font-weight:800;font-size:1.1rem;box-shadow:0 4px 15px rgba(124,58,237,0.3);">
                共有価値観
            </div>
            <div style="font-size:0.8rem;margin-top:6px;color:var(--text-secondary);">Shared Values（中心に位置する核）</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <div>
                <div style="font-weight:700;color:#2563eb;margin-bottom:8px;text-align:center;font-size:0.95rem;">ハードの3S（変更しやすい）</div>
                <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:14px;margin-bottom:8px;">
                    <strong>Strategy（戦略）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">競争優位を築くための方針・計画</span>
                </div>
                <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:14px;margin-bottom:8px;">
                    <strong>Structure（組織構造）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">組織図、指揮命令系統、部門構成</span>
                </div>
                <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:14px;">
                    <strong>System（システム）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">人事制度、評価制度、業務プロセス</span>
                </div>
            </div>
            <div>
                <div style="font-weight:700;color:#ef4444;margin-bottom:8px;text-align:center;font-size:0.95rem;">ソフトの4S（変更しにくい）</div>
                <div style="background:#fee2e2;border:2px solid #ef4444;border-radius:10px;padding:14px;margin-bottom:8px;">
                    <strong>Skill（スキル）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">組織が持つ能力・技術・ノウハウ</span>
                </div>
                <div style="background:#fee2e2;border:2px solid #ef4444;border-radius:10px;padding:14px;margin-bottom:8px;">
                    <strong>Staff（人材）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">人材の質、採用・育成方針</span>
                </div>
                <div style="background:#fee2e2;border:2px solid #ef4444;border-radius:10px;padding:14px;margin-bottom:8px;">
                    <strong>Style（スタイル）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">経営スタイル、リーダーシップ、企業文化</span>
                </div>
                <div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:10px;padding:14px;">
                    <strong>Shared Values（共有価値観）</strong><br>
                    <span style="font-size:0.85rem;color:var(--text-secondary);">組織のミッション・ビジョン・バリュー</span>
                </div>
            </div>
        </div>
    </div>
</div>

<h3>2. 7Sの各要素詳細</h3>
<table>
    <thead>
        <tr>
            <th>要素</th>
            <th>分類</th>
            <th>内容</th>
            <th>診断のポイント</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Strategy</strong></td>
            <td>ハード</td>
            <td>事業戦略・競争戦略</td>
            <td>戦略は明確か？全員に浸透しているか？</td>
        </tr>
        <tr>
            <td><strong>Structure</strong></td>
            <td>ハード</td>
            <td>組織構造・権限配分</td>
            <td>戦略実行に適した組織構造か？</td>
        </tr>
        <tr>
            <td><strong>System</strong></td>
            <td>ハード</td>
            <td>制度・業務フロー</td>
            <td>評価制度は戦略と整合しているか？</td>
        </tr>
        <tr>
            <td><strong>Shared Values</strong></td>
            <td>中心</td>
            <td>理念・価値観</td>
            <td>全要素を統合する核として機能しているか？</td>
        </tr>
        <tr>
            <td><strong>Skill</strong></td>
            <td>ソフト</td>
            <td>組織能力</td>
            <td>戦略実行に必要なスキルがあるか？</td>
        </tr>
        <tr>
            <td><strong>Staff</strong></td>
            <td>ソフト</td>
            <td>人材</td>
            <td>適切な人材が配置されているか？</td>
        </tr>
        <tr>
            <td><strong>Style</strong></td>
            <td>ソフト</td>
            <td>経営スタイル・文化</td>
            <td>リーダーシップスタイルは組織に合っているか？</td>
        </tr>
    </tbody>
</table>

<div class="info-box tip">
    <div class="info-box-title">7S活用のポイント</div>
    <ul>
        <li><strong>7つの要素は相互に連動している</strong> -- 1つを変えると他にも影響が及ぶ</li>
        <li><strong>ハードSだけ変えても不十分</strong> -- 組織改革が失敗する最大の理由はソフトS（文化・人材）の軽視</li>
        <li><strong>Shared Values（共有価値観）が中心</strong> -- 他の6つのSは共有価値観に整合すべき</li>
        <li><strong>現状（As-Is）と理想（To-Be）を比較する</strong> -- ギャップ分析で改善テーマを特定</li>
    </ul>
</div>

<h3>3. ダニエル・キムの成功循環モデル</h3>
<p>MIT組織学習センター共同創始者のダニエル・キムが提唱した<strong>組織の好循環・悪循環を説明するモデル</strong>です。組織の成果を上げるには、まず「関係の質」を高めることが重要であると説きます。</p>

<div class="visual-box">
    <div class="visual-box-title">成功循環モデル（グッドサイクル）</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:600px;margin:0 auto;">
        <div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#10b981;">1</div>
            <div style="font-weight:700;color:#10b981;">関係の質</div>
            <div style="font-size:0.85rem;margin-top:6px;">相互理解・信頼・尊重<br>心理的安全性の確保</div>
        </div>
        <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#2563eb;">2</div>
            <div style="font-weight:700;color:#2563eb;">思考の質</div>
            <div style="font-size:0.85rem;margin-top:6px;">前向きな思考・気づき<br>アイデアの創出</div>
        </div>
        <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#f59e0b;">3</div>
            <div style="font-weight:700;color:#f59e0b;">行動の質</div>
            <div style="font-size:0.85rem;margin-top:6px;">主体的・挑戦的な行動<br>相互協力</div>
        </div>
        <div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:12px;padding:18px;text-align:center;">
            <div style="font-size:1.5rem;font-weight:800;color:#7c3aed;">4</div>
            <div style="font-weight:700;color:#7c3aed;">結果の質</div>
            <div style="font-size:0.85rem;margin-top:6px;">成果の向上<br>目標達成</div>
        </div>
    </div>
    <div style="text-align:center;margin-top:14px;font-size:0.85rem;color:var(--text-secondary);">関係の質 → 思考の質 → 行動の質 → 結果の質 → 関係の質 → ...</div>
</div>

<div class="compare-grid">
    <div class="compare-card">
        <h4 style="color:#10b981;">グッドサイクル（成功循環）</h4>
        <p><strong>起点: 関係の質を高める</strong></p>
        <ol style="font-size:0.9rem;padding-left:20px;">
            <li>お互いを尊重し、信頼関係を構築する</li>
            <li>安心して意見が言える → 思考が前向きに</li>
            <li>主体的に挑戦する行動が増える</li>
            <li>結果が出る → さらに関係が良くなる</li>
        </ol>
    </div>
    <div class="compare-card">
        <h4 style="color:#ef4444;">バッドサイクル（失敗循環）</h4>
        <p><strong>起点: 結果の質を求める</strong></p>
        <ol style="font-size:0.9rem;padding-left:20px;">
            <li>結果を出せと強いるプレッシャー</li>
            <li>対立・不信 → 関係の質が低下</li>
            <li>受動的・防御的な思考になる</li>
            <li>消極的な行動 → 結果が出ない</li>
        </ol>
    </div>
</div>

<div class="info-box warning">
    <div class="info-box-title">多くの組織が陥るバッドサイクル</div>
    <p>業績が悪化したとき、多くのマネージャーは<strong>結果</strong>（売上目標、KPI）から改善しようとします。しかし、結果だけを求めると関係の質が悪化し、バッドサイクルに陥ります。</p>
    <p style="margin-top:8px;">成功循環モデルは、<strong>まず関係の質を高めることが、遠回りに見えて最も確実な成果への道</strong>であることを示しています。1on1ミーティング、チームビルディング、心理的安全性の確保が、結果的に業績向上に繋がります。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">7Sと成功循環モデルの組み合わせ</div>
    <p>7Sで組織の構造的な問題を診断し、成功循環モデルでチームの人間関係の質を改善する。この2つを組み合わせることで、<strong>ハード面（仕組み）とソフト面（人間関係）の両方</strong>から組織を変革できます。</p>
</div>
`,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "マッキンゼーの7Sにおいて、「ハードの3S」に含まれないものはどれですか？",
                    options: [
                        "Strategy（戦略）",
                        "Structure（組織構造）",
                        "Skill（スキル）",
                        "System（システム）"
                    ],
                    answer: 2,
                    explanation: "Skill（スキル）は「ソフトの4S」に分類されます。ハードの3Sは Strategy（戦略）、Structure（組織構造）、System（システム）です。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "7Sフレームワークの中心に位置する要素はどれですか？",
                    options: [
                        "Strategy（戦略）",
                        "Staff（人材）",
                        "Shared Values（共有価値観）",
                        "Style（スタイル）"
                    ],
                    answer: 2,
                    explanation: "Shared Values（共有価値観）は7Sの中心に位置し、他の6つの要素はこの価値観に整合すべきとされています。"
                },
                {
                    id: "q503_3",
                    type: "choice",
                    question: "ダニエル・キムの成功循環モデルにおいて、グッドサイクルの起点となるのはどれですか？",
                    options: [
                        "結果の質",
                        "行動の質",
                        "思考の質",
                        "関係の質"
                    ],
                    answer: 3,
                    explanation: "成功循環モデルでは「関係の質」を起点とすることでグッドサイクルが回り始めます。結果の質から始めるとバッドサイクルに陥ります。"
                }
            ]
        },

        /* =========================================
           Module 504: アジャイル & スクラム & リーン & カンバン
           ========================================= */
        {
            id: 504,
            title: "アジャイル & スクラム & リーン & カンバン",
            duration: "12分",
            content: `
<h2>アジャイル & スクラム & リーン & カンバン</h2>
<p>プロジェクト管理や開発手法として広く活用されるアジャイル関連のフレームワークを体系的に学びます。ソフトウェア開発だけでなく、あらゆる業務プロジェクトに応用できる手法です。</p>

<h3>1. アジャイルの4つの価値観</h3>
<p>アジャイル宣言（2001年）では、以下の4つの価値観が定義されています。右側の項目にも価値はあるが、左側の項目をより重視するという考え方です。</p>

<div class="visual-box">
    <div class="visual-box-title">アジャイルソフトウェア開発宣言 - 4つの価値観</div>
    <div style="max-width:650px;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px;">
            <div style="flex:1;text-align:right;font-weight:700;color:#2563eb;font-size:0.95rem;">個人と対話</div>
            <div style="background:#2563eb;color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;flex-shrink:0;">より重視</div>
            <div style="flex:1;font-size:0.85rem;color:var(--text-secondary);">プロセスやツール</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px;">
            <div style="flex:1;text-align:right;font-weight:700;color:#2563eb;font-size:0.95rem;">動くソフトウェア</div>
            <div style="background:#2563eb;color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;flex-shrink:0;">より重視</div>
            <div style="flex:1;font-size:0.85rem;color:var(--text-secondary);">包括的なドキュメント</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px;">
            <div style="flex:1;text-align:right;font-weight:700;color:#2563eb;font-size:0.95rem;">顧客との協調</div>
            <div style="background:#2563eb;color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;flex-shrink:0;">より重視</div>
            <div style="flex:1;font-size:0.85rem;color:var(--text-secondary);">契約交渉</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px;">
            <div style="flex:1;text-align:right;font-weight:700;color:#2563eb;font-size:0.95rem;">変化への対応</div>
            <div style="background:#2563eb;color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;flex-shrink:0;">より重視</div>
            <div style="flex:1;font-size:0.85rem;color:var(--text-secondary);">計画に従うこと</div>
        </div>
    </div>
</div>

<div class="info-box tip">
    <div class="info-box-title">アジャイルの12の原則（抜粋）</div>
    <ul>
        <li>顧客満足を最優先し、価値のあるソフトウェアを早く継続的に提供する</li>
        <li>要求の変更はたとえ開発の後期であっても歓迎する</li>
        <li>動くソフトウェアを、2〜3週間から2〜3か月のサイクルで提供する</li>
        <li>ビジネス側の人と開発者は、プロジェクトを通じて毎日一緒に働く</li>
        <li>最良のアーキテクチャ・設計は、自己組織化チームから生まれる</li>
        <li>定期的にチームの効率を振り返り、それに基づいて行動を調整する</li>
    </ul>
</div>

<h3>2. スクラム</h3>
<p>スクラムはアジャイル開発で最も広く採用されているフレームワークです。3つの役割、5つのイベント、3つの成果物で構成されます。</p>

<div class="visual-box">
    <div class="visual-box-title">スクラムの構成要素</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;max-width:700px;margin:0 auto;">
        <div>
            <div style="font-weight:700;color:#2563eb;margin-bottom:8px;text-align:center;">3つの役割</div>
            <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>プロダクトオーナー</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">プロダクトの価値最大化に責任</div>
            </div>
            <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>スクラムマスター</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">スクラムの促進・障害の除去</div>
            </div>
            <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:12px;text-align:center;">
                <strong>開発チーム</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">自己組織化した実行チーム</div>
            </div>
        </div>
        <div>
            <div style="font-weight:700;color:#10b981;margin-bottom:8px;text-align:center;">5つのイベント</div>
            <div style="background:#d1fae5;border:2px solid #10b981;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>スプリント</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">1〜4週間の開発サイクル</div>
            </div>
            <div style="background:#d1fae5;border:2px solid #10b981;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>スプリント計画</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">何を作るか計画する</div>
            </div>
            <div style="background:#d1fae5;border:2px solid #10b981;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>デイリースクラム</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">毎日15分の進捗確認</div>
            </div>
            <div style="background:#d1fae5;border:2px solid #10b981;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>スプリントレビュー</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">成果物のデモと検査</div>
            </div>
            <div style="background:#d1fae5;border:2px solid #10b981;border-radius:10px;padding:12px;text-align:center;">
                <strong>レトロスペクティブ</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">プロセスの振り返り改善</div>
            </div>
        </div>
        <div>
            <div style="font-weight:700;color:#f59e0b;margin-bottom:8px;text-align:center;">3つの成果物</div>
            <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>プロダクトバックログ</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">機能要望の優先順位リスト</div>
            </div>
            <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:10px;padding:12px;margin-bottom:8px;text-align:center;">
                <strong>スプリントバックログ</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">今スプリントの作業リスト</div>
            </div>
            <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:10px;padding:12px;text-align:center;">
                <strong>インクリメント</strong>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">リリース可能な成果物</div>
            </div>
        </div>
    </div>
</div>

<h3>3. リーンの7つのムダ</h3>
<p>リーン（Lean）は、トヨタ生産方式（TPS）を起源とする<strong>ムダの排除と価値の最大化</strong>を目指す手法です。以下の7つのムダを特定し、排除することで効率を最大化します。</p>

<table>
    <thead>
        <tr>
            <th>ムダの種類</th>
            <th>製造業での例</th>
            <th>ソフトウェア開発での例</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>1. 作りすぎのムダ</strong></td>
            <td>需要を超える過剰生産</td>
            <td>使われない機能の開発</td>
        </tr>
        <tr>
            <td><strong>2. 在庫のムダ</strong></td>
            <td>過剰な部品・製品在庫</td>
            <td>未リリースの完成機能</td>
        </tr>
        <tr>
            <td><strong>3. 運搬のムダ</strong></td>
            <td>不必要な部品の移動</td>
            <td>不要なデータの受け渡し</td>
        </tr>
        <tr>
            <td><strong>4. 動作のムダ</strong></td>
            <td>作業者の不必要な動き</td>
            <td>冗長な手作業・手順</td>
        </tr>
        <tr>
            <td><strong>5. 待ちのムダ</strong></td>
            <td>機械待ち・部品待ち</td>
            <td>レビュー待ち・承認待ち</td>
        </tr>
        <tr>
            <td><strong>6. 加工のムダ</strong></td>
            <td>不必要に高い精度の加工</td>
            <td>過剰な最適化・過設計</td>
        </tr>
        <tr>
            <td><strong>7. 不良品のムダ</strong></td>
            <td>品質不良による手戻り</td>
            <td>バグ修正・手戻り工数</td>
        </tr>
    </tbody>
</table>

<h3>4. カンバンボード</h3>
<p>カンバン（看板）は、トヨタ生産方式から生まれた<strong>ワークフローの可視化</strong>手法です。作業を視覚的に管理し、WIP（仕掛かり作業）を制限することで、ボトルネックを特定しフローを最適化します。</p>

<div class="visual-box">
    <div class="visual-box-title">カンバンボードの例</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;max-width:700px;margin:0 auto;">
        <div style="background:var(--bg-card);border:2px solid var(--border);border-radius:10px;overflow:hidden;">
            <div style="background:#64748b;color:white;padding:10px;text-align:center;font-weight:700;font-size:0.85rem;">バックログ</div>
            <div style="padding:8px;">
                <div style="background:#f1f5f9;border-radius:6px;padding:8px;margin-bottom:6px;font-size:0.8rem;border-left:3px solid #64748b;">タスクF</div>
                <div style="background:#f1f5f9;border-radius:6px;padding:8px;margin-bottom:6px;font-size:0.8rem;border-left:3px solid #64748b;">タスクG</div>
                <div style="background:#f1f5f9;border-radius:6px;padding:8px;font-size:0.8rem;border-left:3px solid #64748b;">タスクH</div>
            </div>
        </div>
        <div style="background:var(--bg-card);border:2px solid var(--border);border-radius:10px;overflow:hidden;">
            <div style="background:#2563eb;color:white;padding:10px;text-align:center;font-weight:700;font-size:0.85rem;">進行中 (WIP: 3)</div>
            <div style="padding:8px;">
                <div style="background:#dbeafe;border-radius:6px;padding:8px;margin-bottom:6px;font-size:0.8rem;border-left:3px solid #2563eb;">タスクC</div>
                <div style="background:#dbeafe;border-radius:6px;padding:8px;margin-bottom:6px;font-size:0.8rem;border-left:3px solid #2563eb;">タスクD</div>
                <div style="background:#dbeafe;border-radius:6px;padding:8px;font-size:0.8rem;border-left:3px solid #2563eb;">タスクE</div>
            </div>
        </div>
        <div style="background:var(--bg-card);border:2px solid var(--border);border-radius:10px;overflow:hidden;">
            <div style="background:#f59e0b;color:white;padding:10px;text-align:center;font-weight:700;font-size:0.85rem;">レビュー (WIP: 2)</div>
            <div style="padding:8px;">
                <div style="background:#fef3c7;border-radius:6px;padding:8px;margin-bottom:6px;font-size:0.8rem;border-left:3px solid #f59e0b;">タスクB</div>
            </div>
        </div>
        <div style="background:var(--bg-card);border:2px solid var(--border);border-radius:10px;overflow:hidden;">
            <div style="background:#10b981;color:white;padding:10px;text-align:center;font-weight:700;font-size:0.85rem;">完了</div>
            <div style="padding:8px;">
                <div style="background:#d1fae5;border-radius:6px;padding:8px;margin-bottom:6px;font-size:0.8rem;border-left:3px solid #10b981;">タスクA</div>
            </div>
        </div>
    </div>
    <div style="text-align:center;margin-top:12px;font-size:0.85rem;color:var(--text-secondary);">WIP（Work In Progress）制限により、同時進行タスクを制限してフローを最適化</div>
</div>

<div class="info-box formula">
    <div class="info-box-title">カンバンの3つの原則</div>
    <ul>
        <li><strong>ワークフローの可視化</strong> -- 全ての作業を見える化し、ステータスを一目で把握</li>
        <li><strong>WIP（仕掛かり作業）の制限</strong> -- 同時進行タスクを制限し、マルチタスクのムダを排除</li>
        <li><strong>フローの管理と改善</strong> -- リードタイムやスループットを計測し、継続的にフローを最適化</li>
    </ul>
</div>

<h3>5. アジャイル vs ウォーターフォール 比較</h3>
<table>
    <thead>
        <tr>
            <th>比較項目</th>
            <th>アジャイル</th>
            <th>ウォーターフォール</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>進め方</strong></td>
            <td>反復的・漸進的（イテレーション）</td>
            <td>線形的・逐次的（フェーズ順）</td>
        </tr>
        <tr>
            <td><strong>要件定義</strong></td>
            <td>変更を前提（適応型）</td>
            <td>最初に確定（予測型）</td>
        </tr>
        <tr>
            <td><strong>リリース</strong></td>
            <td>短い周期で頻繁にリリース</td>
            <td>全体完成後に一括リリース</td>
        </tr>
        <tr>
            <td><strong>顧客の関与</strong></td>
            <td>プロジェクト全体を通じて継続的</td>
            <td>初期の要件定義と最終の受入テスト</td>
        </tr>
        <tr>
            <td><strong>リスク</strong></td>
            <td>早期に検出・対応が可能</td>
            <td>後半で問題が判明しやすい</td>
        </tr>
        <tr>
            <td><strong>ドキュメント</strong></td>
            <td>必要最小限（動くソフト重視）</td>
            <td>詳細なドキュメントを作成</td>
        </tr>
        <tr>
            <td><strong>適する環境</strong></td>
            <td>要件が不確実・変化が多い</td>
            <td>要件が明確・変更が少ない</td>
        </tr>
        <tr>
            <td><strong>チーム構成</strong></td>
            <td>自己組織化・小規模チーム</td>
            <td>階層的・専門チーム</td>
        </tr>
    </tbody>
</table>

<div class="compare-grid">
    <div class="compare-card">
        <h4 style="color:#2563eb;">アジャイルが向いている場面</h4>
        <ul style="font-size:0.9rem;">
            <li>新規事業・スタートアップ</li>
            <li>要件が曖昧で変化が多い</li>
            <li>ユーザーフィードバックを重視</li>
            <li>素早い市場投入が必要</li>
            <li>チームの自律性が高い</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4 style="color:#7c3aed;">ウォーターフォールが向いている場面</h4>
        <ul style="font-size:0.9rem;">
            <li>大規模インフラ構築</li>
            <li>要件が明確で変更が少ない</li>
            <li>規制・コンプライアンス要件が厳しい</li>
            <li>予算と期限が厳格に定められている</li>
            <li>関係者が多数で調整が複雑</li>
        </ul>
    </div>
</div>

<div class="info-box success">
    <div class="info-box-title">まとめ: 4つの手法の関係</div>
    <p><strong>アジャイル</strong>は「考え方・価値観」、<strong>スクラム</strong>はアジャイルを実践するための「フレームワーク」、<strong>リーン</strong>は「ムダの排除」に特化した思想、<strong>カンバン</strong>は「ワークフローの可視化と最適化」の手法です。</p>
    <p style="margin-top:8px;">これらは対立するものではなく、<strong>組み合わせて使うもの</strong>です。例えば、スクラムでスプリントを回しつつ、カンバンボードでタスクを可視化し、リーンの考え方でムダを排除する、というのが実践的なアプローチです。</p>
</div>
`,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "アジャイル宣言で「プロセスやツール」よりも重視されるものは何ですか？",
                    options: [
                        "包括的なドキュメント",
                        "契約交渉",
                        "個人と対話",
                        "計画に従うこと"
                    ],
                    answer: 2,
                    explanation: "アジャイル宣言では「プロセスやツールよりも個人と対話を重視する」と定められています。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "スクラムの3つの役割に含まれないものはどれですか？",
                    options: [
                        "プロダクトオーナー",
                        "スクラムマスター",
                        "プロジェクトマネージャー",
                        "開発チーム"
                    ],
                    answer: 2,
                    explanation: "スクラムの3つの役割は「プロダクトオーナー」「スクラムマスター」「開発チーム」です。プロジェクトマネージャーはスクラムの公式な役割には含まれません。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "カンバンの原則として正しくないものはどれですか？",
                    options: [
                        "ワークフローの可視化",
                        "WIP（仕掛かり作業）の制限",
                        "全タスクの同時並行実行",
                        "フローの管理と改善"
                    ],
                    answer: 2,
                    explanation: "カンバンの原則はワークフローの可視化、WIPの制限、フローの管理と改善です。全タスクの同時並行実行はカンバンの原則に反しており、WIPを制限してフローを最適化するのがカンバンの本質です。"
                }
            ]
        }
    ]
};
