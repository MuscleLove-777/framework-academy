/* ============================================
   Level 1: ビジネス戦略フレームワーク
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "ビジネス戦略フレームワーク",
    icon: "🏢",
    description: "SWOT分析、ポーターの5フォース、BCGマトリクス、3C分析など、ビジネス戦略の基本フレームワークを体系的に学びます",
    modules: [
        {
            id: 101,
            title: "SWOT分析 & PEST分析",
            duration: "15分",
            content: `
<h2>SWOT分析とは</h2>
<p>SWOT分析は、企業や事業の<strong>内部環境</strong>と<strong>外部環境</strong>を4つの視点で整理し、戦略立案に活用するフレームワークです。1960年代にスタンフォード研究所のアルバート・ハンフリーが開発したとされています。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
SWOT分析は「現状を整理する」ためのフレームワークです。整理した後に「クロスSWOT」で具体的な戦略を導き出すことが重要です。
</div>

<h3>SWOT分析の4象限</h3>
<div class="visual-box">
<div class="visual-box-title">SWOT分析マトリクス</div>
<table>
<tr>
<th style="background:transparent;border:none;"></th>
<th style="text-align:center;">プラス要因</th>
<th style="text-align:center;">マイナス要因</th>
</tr>
<tr>
<th>内部環境</th>
<td style="background:#dbeafe;text-align:center;font-weight:700;font-size:1.1rem;">
<div style="font-size:1.5rem;">💪</div>
<strong>S: 強み (Strengths)</strong><br>
<span style="font-size:0.85rem;">自社が持つ優位性・得意分野</span>
</td>
<td style="background:#fee2e2;text-align:center;font-weight:700;font-size:1.1rem;">
<div style="font-size:1.5rem;">⚠️</div>
<strong>W: 弱み (Weaknesses)</strong><br>
<span style="font-size:0.85rem;">自社の課題・不足している点</span>
</td>
</tr>
<tr>
<th>外部環境</th>
<td style="background:#d1fae5;text-align:center;font-weight:700;font-size:1.1rem;">
<div style="font-size:1.5rem;">🌟</div>
<strong>O: 機会 (Opportunities)</strong><br>
<span style="font-size:0.85rem;">市場の追い風・ビジネスチャンス</span>
</td>
<td style="background:#fef3c7;text-align:center;font-weight:700;font-size:1.1rem;">
<div style="font-size:1.5rem;">⚡</div>
<strong>T: 脅威 (Threats)</strong><br>
<span style="font-size:0.85rem;">市場の逆風・リスク要因</span>
</td>
</tr>
</table>
</div>

<h3>各象限の詳細と具体例</h3>

<div class="compare-grid">
<div class="compare-card">
<h4>💪 強み (Strengths)</h4>
<p>競合他社と比較して優れている点、自社独自のリソースや能力です。</p>
<ul>
<li>高いブランド認知度</li>
<li>独自の技術・特許</li>
<li>優秀な人材</li>
<li>強固な顧客基盤</li>
<li>効率的な生産体制</li>
</ul>
</div>
<div class="compare-card">
<h4>⚠️ 弱み (Weaknesses)</h4>
<p>競合他社と比較して劣っている点、改善すべき課題です。</p>
<ul>
<li>資金力の不足</li>
<li>知名度の低さ</li>
<li>人材育成の遅れ</li>
<li>老朽化した設備</li>
<li>デジタル化の遅れ</li>
</ul>
</div>
<div class="compare-card">
<h4>🌟 機会 (Opportunities)</h4>
<p>自社にとって有利に働く外部環境の変化やトレンドです。</p>
<ul>
<li>市場の成長・拡大</li>
<li>規制緩和</li>
<li>新技術の登場</li>
<li>競合の撤退</li>
<li>消費者ニーズの変化</li>
</ul>
</div>
<div class="compare-card">
<h4>⚡ 脅威 (Threats)</h4>
<p>自社にとって不利に働く外部環境の変化やリスクです。</p>
<ul>
<li>競合の台頭</li>
<li>法規制の強化</li>
<li>景気後退</li>
<li>代替品の出現</li>
<li>原材料費の高騰</li>
</ul>
</div>
</div>

<h2>クロスSWOT分析</h2>
<p>SWOT分析の4要素を<strong>掛け合わせ</strong>ることで、具体的な戦略オプションを導き出す手法がクロスSWOT分析です。これにより、単なる現状分析から<strong>アクションプラン</strong>へと発展させることができます。</p>

<div class="visual-box">
<div class="visual-box-title">クロスSWOT戦略マトリクス</div>
<table>
<tr>
<th style="background:transparent;border:none;"></th>
<th style="text-align:center;">機会 (O)</th>
<th style="text-align:center;">脅威 (T)</th>
</tr>
<tr>
<th>強み (S)</th>
<td style="background:#d1fae5;padding:16px;">
<strong>SO戦略（積極化戦略）</strong><br>
強みを活かして機会を最大限に掴む<br>
<em style="font-size:0.85rem;">例: 高い技術力で成長市場に新製品を投入</em>
</td>
<td style="background:#dbeafe;padding:16px;">
<strong>ST戦略（差別化戦略）</strong><br>
強みを活かして脅威を回避・克服する<br>
<em style="font-size:0.85rem;">例: ブランド力で価格競争を回避</em>
</td>
</tr>
<tr>
<th>弱み (W)</th>
<td style="background:#fef3c7;padding:16px;">
<strong>WO戦略（改善戦略）</strong><br>
弱みを克服して機会を活用する<br>
<em style="font-size:0.85rem;">例: 提携により技術不足を補い新市場参入</em>
</td>
<td style="background:#fee2e2;padding:16px;">
<strong>WT戦略（防御・撤退戦略）</strong><br>
弱みを最小化し脅威の影響を避ける<br>
<em style="font-size:0.85rem;">例: 不採算事業からの撤退</em>
</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">よくある間違い</div>
クロスSWOTを行わずにSWOT分析だけで終わってしまうケースが多く見られます。SWOTは「整理」、クロスSWOTは「戦略立案」です。必ずセットで行いましょう。
</div>

<h3>SWOT分析の実践手順</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>分析対象を明確にする</strong>
企業全体なのか、特定の事業・製品なのかを決めます。対象が曖昧だと分析の精度が下がります。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>外部環境を分析する（O・T）</strong>
PEST分析などを活用して、機会と脅威を洗い出します。マクロ環境とミクロ環境の両方を考慮します。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>内部環境を分析する（S・W）</strong>
経営資源（ヒト・モノ・カネ・情報）の観点から、自社の強みと弱みを客観的に洗い出します。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>クロスSWOTで戦略を導出する</strong>
4つの戦略（SO・ST・WO・WT）を具体的に検討し、優先順位をつけてアクションプランに落とし込みます。
</div>
</div>
</div>

<h2>PEST分析とは</h2>
<p>PEST分析は、<strong>マクロ環境</strong>（企業がコントロールできない外部環境）を4つの要因で体系的に分析するフレームワークです。SWOT分析の外部環境分析（O・T）を行う際のインプットとして活用されます。</p>

<div class="visual-box">
<div class="visual-box-title">PEST分析の4要因</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;text-align:left;">
<div style="background:#dbeafe;padding:16px;border-radius:8px;">
<div style="font-size:1.5rem;text-align:center;">🏛️</div>
<h4 style="text-align:center;color:#1e40af;margin:8px 0;">P: 政治的要因 (Political)</h4>
<ul style="font-size:0.85rem;">
<li>法規制の変更</li>
<li>税制改正</li>
<li>貿易政策・関税</li>
<li>政治的安定性</li>
<li>労働法・環境規制</li>
</ul>
</div>
<div style="background:#d1fae5;padding:16px;border-radius:8px;">
<div style="font-size:1.5rem;text-align:center;">💰</div>
<h4 style="text-align:center;color:#059669;margin:8px 0;">E: 経済的要因 (Economic)</h4>
<ul style="font-size:0.85rem;">
<li>GDP成長率</li>
<li>為替レート</li>
<li>金利動向</li>
<li>インフレ率</li>
<li>失業率・消費動向</li>
</ul>
</div>
<div style="background:#fef3c7;padding:16px;border-radius:8px;">
<div style="font-size:1.5rem;text-align:center;">👥</div>
<h4 style="text-align:center;color:#d97706;margin:8px 0;">S: 社会的要因 (Social)</h4>
<ul style="font-size:0.85rem;">
<li>人口動態・少子高齢化</li>
<li>ライフスタイルの変化</li>
<li>教育水準</li>
<li>文化的トレンド</li>
<li>健康意識・環境意識</li>
</ul>
</div>
<div style="background:#ede9fe;padding:16px;border-radius:8px;">
<div style="font-size:1.5rem;text-align:center;">🔬</div>
<h4 style="text-align:center;color:#7c3aed;margin:8px 0;">T: 技術的要因 (Technological)</h4>
<ul style="font-size:0.85rem;">
<li>AI・IoTなどの技術革新</li>
<li>研究開発投資</li>
<li>特許・知的財産</li>
<li>技術の普及速度</li>
<li>デジタルトランスフォーメーション</li>
</ul>
</div>
</div>
</div>

<h3>PEST分析の具体例：飲食業界</h3>
<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：飲食業界のPEST分析</div>
<table>
<tr><th>要因</th><th>具体例</th><th>影響</th></tr>
<tr><td><strong>P（政治）</strong></td><td>食品衛生法の改正、HACCP義務化</td><td>衛生管理コスト増加</td></tr>
<tr><td><strong>E（経済）</strong></td><td>原材料費の高騰、円安の影響</td><td>利益率の低下圧力</td></tr>
<tr><td><strong>S（社会）</strong></td><td>健康志向の高まり、単身世帯の増加</td><td>メニュー・業態の転換機会</td></tr>
<tr><td><strong>T（技術）</strong></td><td>フードデリバリーアプリの普及、キャッシュレス決済</td><td>新たな販売チャネルの開拓</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">SWOT分析とPEST分析の連携</div>
実務では、まずPEST分析でマクロ環境を把握し、その結果をSWOT分析の「機会（O）」と「脅威（T）」にインプットします。このように2つのフレームワークを組み合わせることで、より精度の高い戦略分析が可能になります。
</div>

<div class="collapsible">
<div class="collapsible-header">さらに学ぶ：PESTLE分析への拡張</div>
<div class="collapsible-body">
<p>PEST分析を拡張した<strong>PESTLE分析</strong>では、さらに2つの要因が追加されます。</p>
<ul>
<li><strong>L（Legal：法的要因）</strong> - 消費者保護法、雇用法、知的財産権など</li>
<li><strong>E（Environmental：環境要因）</strong> - 環境規制、持続可能性、気候変動など</li>
</ul>
<p>近年のESG経営の重要性から、PESTLEを採用する企業が増えています。</p>
</div>
</div>
`,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "SWOT分析において「内部環境」に分類されるものはどれですか？",
                    options: ["市場の成長性", "強み（Strengths）と弱み（Weaknesses）", "機会（Opportunities）と脅威（Threats）", "政治的要因と経済的要因"],
                    answer: 1,
                    explanation: "SWOT分析では、強み（S）と弱み（W）が内部環境、機会（O）と脅威（T）が外部環境に分類されます。内部環境は自社でコントロール可能な要素です。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "クロスSWOT分析において、「弱みを克服して機会を活用する」戦略はどれですか？",
                    options: ["SO戦略（積極化戦略）", "ST戦略（差別化戦略）", "WO戦略（改善戦略）", "WT戦略（防御・撤退戦略）"],
                    answer: 2,
                    explanation: "WO戦略（改善戦略）は、弱み（W）を克服して機会（O）を活用する戦略です。例えば、技術不足を提携で補い、成長市場に参入するような戦略が該当します。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "PEST分析の「T（Technological）」に該当するものはどれですか？",
                    options: ["消費税率の変更", "少子高齢化の進行", "AI技術の進歩によるDX推進", "為替レートの変動"],
                    answer: 2,
                    explanation: "T（Technological：技術的要因）には、AI・IoT・DXなどの技術革新、研究開発投資、技術の普及速度などが含まれます。消費税は政治的要因、少子高齢化は社会的要因、為替は経済的要因です。"
                }
            ]
        },
        {
            id: 102,
            title: "ポーターの5フォース & バリューチェーン",
            duration: "15分",
            content: `
<h2>ポーターの5フォース分析とは</h2>
<p>ポーターの5フォース分析は、ハーバード・ビジネス・スクールのマイケル・ポーター教授が1979年に提唱した、<strong>業界の競争環境</strong>を分析するフレームワークです。5つの競争要因（フォース）が業界の収益性を決定するという考え方に基づいています。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
5フォース分析は「業界の魅力度」を測定するツールです。5つの力が強いほど業界の収益性は低く、弱いほど収益性が高い傾向にあります。
</div>

<h3>5つの競争要因</h3>
<div class="visual-box">
<div class="visual-box-title">ポーターの5フォースモデル</div>
<div style="position:relative;padding:40px 20px;">
<div style="text-align:center;margin-bottom:30px;">
<div style="display:inline-block;background:#fee2e2;border:2px solid #ef4444;border-radius:12px;padding:16px 24px;">
<div style="font-size:1.3rem;">⬆️</div>
<strong>新規参入の脅威</strong><br>
<span style="font-size:0.8rem;">参入障壁の高さ</span>
</div>
</div>
<div style="display:flex;justify-content:space-between;align-items:center;margin:20px 0;">
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:16px 20px;text-align:center;max-width:200px;">
<div style="font-size:1.3rem;">⬅️</div>
<strong>売り手の<br>交渉力</strong><br>
<span style="font-size:0.8rem;">供給者の力</span>
</div>
<div style="background:#fef3c7;border:3px solid #f59e0b;border-radius:16px;padding:24px;text-align:center;min-width:180px;">
<div style="font-size:1.5rem;">⚔️</div>
<strong>業界内の<br>競争</strong><br>
<span style="font-size:0.8rem;">既存企業間の対抗度</span>
</div>
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:16px 20px;text-align:center;max-width:200px;">
<div style="font-size:1.3rem;">➡️</div>
<strong>買い手の<br>交渉力</strong><br>
<span style="font-size:0.8rem;">顧客の力</span>
</div>
</div>
<div style="text-align:center;margin-top:30px;">
<div style="display:inline-block;background:#fee2e2;border:2px solid #ef4444;border-radius:12px;padding:16px 24px;">
<div style="font-size:1.3rem;">⬇️</div>
<strong>代替品の脅威</strong><br>
<span style="font-size:0.8rem;">別の手段への置換可能性</span>
</div>
</div>
</div>
</div>

<h3>各フォースの詳細</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>新規参入の脅威</strong>
新しい競合が業界に参入しやすいかどうか。参入障壁が低いと新規参入が増え、収益性が下がります。
<ul>
<li>初期投資の大きさ</li>
<li>規模の経済性</li>
<li>ブランドの強さ</li>
<li>法規制・許認可</li>
<li>スイッチングコスト</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>代替品の脅威</strong>
自社の製品・サービスの代わりになる製品・サービスが存在するか。代替品が多いと価格競争が激しくなります。
<ul>
<li>代替品のコストパフォーマンス</li>
<li>顧客のスイッチングコスト</li>
<li>代替品の品質・性能</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>買い手（顧客）の交渉力</strong>
顧客が価格交渉力を持っているかどうか。買い手の力が強いと利益率が下がります。
<ul>
<li>買い手の集中度（大口顧客の存在）</li>
<li>製品の差別化の程度</li>
<li>スイッチングコストの低さ</li>
<li>買い手の情報量</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>売り手（供給者）の交渉力</strong>
原材料や部品の供給者が価格交渉力を持っているかどうか。売り手の力が強いとコストが上昇します。
<ul>
<li>供給者の集中度</li>
<li>代替供給源の有無</li>
<li>供給品の独自性</li>
<li>供給者の前方統合の可能性</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>業界内の競争</strong>
既存企業間の競争の激しさ。競争が激しいほど収益性が低下します。
<ul>
<li>競合の数と規模</li>
<li>市場の成長率</li>
<li>製品の差別化の程度</li>
<li>撤退障壁の高さ</li>
<li>固定費の割合</li>
</ul>
</div>
</div>
</div>

<h3>具体例：コンビニ業界の5フォース分析</h3>
<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：コンビニエンスストア業界</div>
<table>
<tr><th>フォース</th><th>強さ</th><th>理由</th></tr>
<tr><td><strong>新規参入の脅威</strong></td><td>低い</td><td>大規模なフランチャイズシステム・物流網の構築に莫大な投資が必要</td></tr>
<tr><td><strong>代替品の脅威</strong></td><td>中程度</td><td>スーパー、ドラッグストア、ECサイトが代替となりうる</td></tr>
<tr><td><strong>買い手の交渉力</strong></td><td>低い</td><td>個人消費者が中心で、利便性への支払い意欲が高い</td></tr>
<tr><td><strong>売り手の交渉力</strong></td><td>低い</td><td>大量仕入れによる交渉力、PB商品の展開で供給者依存を低減</td></tr>
<tr><td><strong>業界内の競争</strong></td><td>非常に高い</td><td>セブン・ファミマ・ローソンの3強による出店競争が激化</td></tr>
</table>
</div>

<h2>バリューチェーン分析とは</h2>
<p>バリューチェーン（価値連鎖）分析は、同じくマイケル・ポーターが提唱したフレームワークで、企業活動を「価値を生み出す一連のプロセス」として捉え、<strong>どの活動が競争優位の源泉となっているか</strong>を分析する手法です。</p>

<div class="visual-box">
<div class="visual-box-title">バリューチェーンモデル</div>
<div style="text-align:left;padding:10px;">
<div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:8px;padding:12px;margin-bottom:8px;">
<strong style="color:#7c3aed;">支援活動</strong>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
<div style="background:white;padding:8px;border-radius:4px;font-size:0.85rem;text-align:center;">全般管理（インフラ）</div>
<div style="background:white;padding:8px;border-radius:4px;font-size:0.85rem;text-align:center;">人事・労務管理</div>
<div style="background:white;padding:8px;border-radius:4px;font-size:0.85rem;text-align:center;">技術開発</div>
<div style="background:white;padding:8px;border-radius:4px;font-size:0.85rem;text-align:center;">調達活動</div>
</div>
</div>
<div style="display:flex;gap:4px;margin-top:8px;">
<div style="flex:1;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;text-align:center;">
<strong style="font-size:0.8rem;color:#1e40af;">購買物流</strong><br><span style="font-size:0.75rem;">原材料の受入・保管</span>
</div>
<div style="flex:1;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;text-align:center;">
<strong style="font-size:0.8rem;color:#1e40af;">製造</strong><br><span style="font-size:0.75rem;">加工・組立</span>
</div>
<div style="flex:1;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;text-align:center;">
<strong style="font-size:0.8rem;color:#1e40af;">出荷物流</strong><br><span style="font-size:0.75rem;">保管・配送</span>
</div>
<div style="flex:1;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;text-align:center;">
<strong style="font-size:0.8rem;color:#1e40af;">マーケティング・販売</strong><br><span style="font-size:0.75rem;">広告・営業</span>
</div>
<div style="flex:1;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;padding:12px;text-align:center;">
<strong style="font-size:0.8rem;color:#1e40af;">サービス</strong><br><span style="font-size:0.75rem;">保守・修理</span>
</div>
</div>
<div style="text-align:right;margin-top:12px;">
<div style="display:inline-block;background:#d1fae5;border:2px solid #10b981;border-radius:8px;padding:12px 24px;font-weight:700;color:#059669;">
マージン（利益）
</div>
</div>
</div>
</div>

<h3>主活動と支援活動</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>主活動（5つ）</h4>
<p>製品・サービスの物理的な創造・販売・配送に直接関わる活動です。</p>
<ol>
<li><strong>購買物流</strong> - 原材料の受入、保管、在庫管理</li>
<li><strong>製造</strong> - 原材料を完成品に変換する加工・組立</li>
<li><strong>出荷物流</strong> - 完成品の保管、出荷、配送</li>
<li><strong>マーケティング・販売</strong> - 広告、営業、価格設定</li>
<li><strong>サービス</strong> - アフターサービス、保守、修理</li>
</ol>
</div>
<div class="compare-card">
<h4>支援活動（4つ）</h4>
<p>主活動を支え、効率化する間接的な活動です。</p>
<ol>
<li><strong>全般管理</strong> - 経営企画、財務、法務、品質管理</li>
<li><strong>人事・労務管理</strong> - 採用、教育、人事評価</li>
<li><strong>技術開発</strong> - R&D、製品設計、プロセス改善</li>
<li><strong>調達活動</strong> - 原材料・設備・サービスの購買</li>
</ol>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">バリューチェーン分析の3つの活用法</div>
<ol>
<li><strong>コスト分析</strong>：各活動のコスト構造を把握し、コスト削減の余地を見つける</li>
<li><strong>差別化分析</strong>：どの活動が顧客にとっての価値を生んでいるかを特定する</li>
<li><strong>アウトソーシング判断</strong>：競争優位に直結しない活動を外部委託する判断材料にする</li>
</ol>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：デジタル時代のバリューチェーン</div>
<div class="collapsible-body">
<p>デジタル化の進展により、従来のバリューチェーンの各活動にもデジタル技術が組み込まれています。</p>
<ul>
<li><strong>購買物流</strong>：AIによる需要予測、自動発注システム</li>
<li><strong>製造</strong>：IoTによるスマートファクトリー</li>
<li><strong>出荷物流</strong>：配送ルート最適化、ドローン配送</li>
<li><strong>マーケティング</strong>：デジタルマーケティング、パーソナライゼーション</li>
<li><strong>サービス</strong>：チャットボット、リモートサポート</li>
</ul>
</div>
</div>
`,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "ポーターの5フォース分析において、「大口顧客が存在し、製品の差別化が低い場合」に強まるフォースはどれですか？",
                    options: ["新規参入の脅威", "代替品の脅威", "買い手の交渉力", "売り手の交渉力"],
                    answer: 2,
                    explanation: "大口顧客の存在と製品差別化の低さは、買い手（顧客）の交渉力を強めます。顧客は容易に他社に切り替えられるため、値引き要求が強くなります。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "バリューチェーン分析における「支援活動」に含まれないものはどれですか？",
                    options: ["人事・労務管理", "技術開発", "出荷物流", "調達活動"],
                    answer: 2,
                    explanation: "出荷物流は「主活動」に分類されます。支援活動は、全般管理（インフラ）、人事・労務管理、技術開発、調達活動の4つです。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "5フォース分析でコンビニ業界を分析した場合、最も競争圧力が高いと考えられるフォースはどれですか？",
                    options: ["新規参入の脅威（参入障壁が高いため低い）", "売り手の交渉力（大量仕入れで低い）", "業界内の競争（大手3社の出店競争が激しい）", "買い手の交渉力（個人消費者が中心で低い）"],
                    answer: 2,
                    explanation: "コンビニ業界では、セブン-イレブン、ファミリーマート、ローソンの大手3社による出店競争が非常に激しく、業界内の競争が最も高い競争圧力となっています。"
                }
            ]
        },
        {
            id: 103,
            title: "BCGマトリクス & アンゾフのマトリクス",
            duration: "15分",
            content: `
<h2>BCGマトリクスとは</h2>
<p>BCGマトリクス（PPM：プロダクト・ポートフォリオ・マネジメント）は、ボストン・コンサルティング・グループが1970年代に開発した、<strong>事業ポートフォリオ</strong>を分析するためのフレームワークです。「市場成長率」と「相対的市場シェア」の2軸で事業を4つのカテゴリに分類します。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
BCGマトリクスは「限られた経営資源をどの事業に配分すべきか」を判断するためのツールです。多角化している企業の事業ポートフォリオを可視化するのに最適です。
</div>

<h3>BCGマトリクスの4象限</h3>
<div class="visual-box">
<div class="visual-box-title">BCGマトリクス（PPM）</div>
<table>
<tr>
<th style="background:transparent;border:none;"></th>
<th style="text-align:center;">高い市場シェア</th>
<th style="text-align:center;">低い市場シェア</th>
</tr>
<tr>
<th>高い市場成長率</th>
<td style="background:#fef3c7;text-align:center;padding:20px;">
<div style="font-size:2rem;">⭐</div>
<strong style="font-size:1.1rem;">花形 (Star)</strong><br>
<span style="font-size:0.85rem;">成長市場でトップシェア<br>売上大・投資も大</span>
</td>
<td style="background:#dbeafe;text-align:center;padding:20px;">
<div style="font-size:2rem;">❓</div>
<strong style="font-size:1.1rem;">問題児 (Question Mark)</strong><br>
<span style="font-size:0.85rem;">成長市場だがシェアは低い<br>投資判断が重要</span>
</td>
</tr>
<tr>
<th>低い市場成長率</th>
<td style="background:#d1fae5;text-align:center;padding:20px;">
<div style="font-size:2rem;">💰</div>
<strong style="font-size:1.1rem;">金のなる木 (Cash Cow)</strong><br>
<span style="font-size:0.85rem;">安定市場でトップシェア<br>投資少・利益大</span>
</td>
<td style="background:#fee2e2;text-align:center;padding:20px;">
<div style="font-size:2rem;">🐕</div>
<strong style="font-size:1.1rem;">負け犬 (Dog)</strong><br>
<span style="font-size:0.85rem;">低成長・低シェア<br>撤退を検討</span>
</td>
</tr>
</table>
</div>

<h3>各象限の戦略と具体例</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>花形 (Star) の戦略</strong>
<p>市場成長率が高く、自社のシェアも高い事業。売上は大きいが、成長維持のため積極投資が必要です。将来的に「金のなる木」に移行します。</p>
<p><em>具体例：AppleのiPhone事業（成長期）、テスラのEV事業</em></p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>金のなる木 (Cash Cow) の戦略</strong>
<p>市場成長率は低いが高い市場シェアを持つ事業。追加投資少なくても安定した利益を生みます。ここで得た資金を「花形」や「問題児」に投資します。</p>
<p><em>具体例：コカ・コーラの炭酸飲料事業、マイクロソフトのOffice事業</em></p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>問題児 (Question Mark) の戦略</strong>
<p>市場成長率は高いがシェアが低い事業。集中投資してシェアを拡大するか、撤退するかの選択と集中が重要です。</p>
<p><em>具体例：新興企業の新規参入事業、実験的な新サービス</em></p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>負け犬 (Dog) の戦略</strong>
<p>市場成長率が低くシェアも低い事業。撤退・売却を検討するか、ニッチ市場で生き残りを図ります。</p>
<p><em>具体例：衰退市場で下位シェアの事業、レガシー製品</em></p>
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">BCGマトリクスの限界</div>
BCGマトリクスは分かりやすい反面、2つの軸だけで事業を評価するため、事業間のシナジー効果や将来の成長可能性を十分に捉えきれません。他のフレームワークと組み合わせて使うことが重要です。
</div>

<h2>アンゾフのマトリクスとは</h2>
<p>アンゾフのマトリクス（成長マトリクス）は、経営学者イゴール・アンゾフが1957年に提唱した、<strong>企業の成長戦略</strong>を4つのパターンで整理するフレームワークです。「市場（既存/新規）」と「製品（既存/新規）」の2軸で分類します。</p>

<div class="visual-box">
<div class="visual-box-title">アンゾフの成長マトリクス</div>
<table>
<tr>
<th style="background:transparent;border:none;"></th>
<th style="text-align:center;">既存製品</th>
<th style="text-align:center;">新規製品</th>
</tr>
<tr>
<th>既存市場</th>
<td style="background:#d1fae5;text-align:center;padding:20px;">
<div style="font-size:1.5rem;">🔄</div>
<strong>市場浸透戦略</strong><br>
<span style="font-size:0.85rem;">リスク：低い<br>既存製品で既存市場のシェアを拡大</span>
</td>
<td style="background:#dbeafe;text-align:center;padding:20px;">
<div style="font-size:1.5rem;">🆕</div>
<strong>新製品開発戦略</strong><br>
<span style="font-size:0.85rem;">リスク：中程度<br>既存市場に新しい製品を投入</span>
</td>
</tr>
<tr>
<th>新規市場</th>
<td style="background:#fef3c7;text-align:center;padding:20px;">
<div style="font-size:1.5rem;">🌍</div>
<strong>新市場開拓戦略</strong><br>
<span style="font-size:0.85rem;">リスク：中程度<br>既存製品を新しい市場に展開</span>
</td>
<td style="background:#fee2e2;text-align:center;padding:20px;">
<div style="font-size:1.5rem;">🚀</div>
<strong>多角化戦略</strong><br>
<span style="font-size:0.85rem;">リスク：高い<br>新製品を新市場に投入</span>
</td>
</tr>
</table>
</div>

<h3>4つの成長戦略の詳細</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>🔄 市場浸透戦略</h4>
<p>最もリスクが低い戦略。広告強化や価格見直しで既存市場のシェアを拡大します。</p>
<p><em>例: マクドナルドの朝マック導入</em></p>
</div>
<div class="compare-card">
<h4>🌍 新市場開拓戦略</h4>
<p>既存製品を新しい地域や顧客層に展開する戦略です。</p>
<p><em>例: ユニクロの海外展開</em></p>
</div>
<div class="compare-card">
<h4>🆕 新製品開発戦略</h4>
<p>既存市場に新しい製品を投入する戦略です。</p>
<p><em>例: AppleがApple Watchを発売</em></p>
</div>
<div class="compare-card">
<h4>🚀 多角化戦略</h4>
<p>最もリスクが高い戦略。新製品で新市場に参入します。</p>
<p><em>例: ソニーが金融事業に参入</em></p>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">戦略選択の優先順位</div>
<p>一般的に、リスクの低い戦略から順に検討することが推奨されます。</p>
<ol>
<li><strong>市場浸透</strong>（最優先） - 既存市場でまだシェア拡大の余地があるか？</li>
<li><strong>新市場開拓 or 新製品開発</strong> - どちらが自社の強みを活かせるか？</li>
<li><strong>多角化</strong>（最終手段） - 既存事業の成長が限界に達した場合</li>
</ol>
</div>

<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：トヨタ自動車の成長戦略</div>
<table>
<tr><th>戦略</th><th>トヨタの具体例</th></tr>
<tr><td><strong>市場浸透</strong></td><td>国内市場でのトヨタ車の販売強化、販促キャンペーン</td></tr>
<tr><td><strong>新市場開拓</strong></td><td>東南アジア・アフリカなど新興国市場への進出</td></tr>
<tr><td><strong>新製品開発</strong></td><td>ハイブリッド車（プリウス）、水素燃料電池車（MIRAI）</td></tr>
<tr><td><strong>多角化</strong></td><td>ウーブン・シティ構想、ロボティクス事業</td></tr>
</table>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：BCGマトリクスとアンゾフのマトリクスの使い分け</div>
<div class="collapsible-body">
<p><strong>BCGマトリクス</strong>は「今ある事業群をどう管理するか」、<strong>アンゾフのマトリクス</strong>は「今後どう成長するか」を考えるツールです。両者を組み合わせることで、より精度の高い戦略策定が可能になります。</p>
</div>
</div>
`,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "BCGマトリクスにおいて、「市場成長率が低く、相対的市場シェアが高い」事業はどの象限に分類されますか？",
                    options: ["花形（Star）", "金のなる木（Cash Cow）", "問題児（Question Mark）", "負け犬（Dog）"],
                    answer: 1,
                    explanation: "金のなる木（Cash Cow）は、市場成長率が低く相対的市場シェアが高い事業です。追加投資が少なくても安定した利益を生み出し、他の事業への資金供給源となります。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "アンゾフのマトリクスにおいて、最もリスクが高い戦略はどれですか？",
                    options: ["市場浸透戦略", "新市場開拓戦略", "新製品開発戦略", "多角化戦略"],
                    answer: 3,
                    explanation: "多角化戦略は、新しい製品で新しい市場に参入するため、既存のノウハウや顧客基盤が活かしにくく、4つの戦略の中で最もリスクが高いとされています。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "ユニクロの海外展開（既存製品を新しい地域に展開）は、アンゾフのマトリクスのどの戦略に該当しますか？",
                    options: ["市場浸透戦略", "新市場開拓戦略", "新製品開発戦略", "多角化戦略"],
                    answer: 1,
                    explanation: "既存の製品（衣料品）を新しい市場（海外）に展開するのは「新市場開拓戦略」に該当します。製品はそのままで、販売する地域や顧客層を拡大する戦略です。"
                }
            ]
        },
        {
            id: 104,
            title: "3C分析 & VRIO分析",
            duration: "15分",
            content: `
<h2>3C分析とは</h2>
<p>3C分析は、マッキンゼーの経営コンサルタントであった大前研一氏が1982年に提唱したフレームワークで、事業環境を<strong>3つのC</strong>の視点から分析する手法です。</p>

<div class="visual-box">
<div class="visual-box-title">3C分析の3つの要素</div>
<div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap;padding:20px;">
<div style="background:#dbeafe;border:3px solid #2563eb;border-radius:50%;width:180px;height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
<div style="font-size:2rem;">👥</div>
<strong style="color:#1e40af;font-size:1.1rem;">Customer</strong>
<span style="font-size:0.8rem;">顧客・市場</span>
</div>
<div style="background:#fee2e2;border:3px solid #ef4444;border-radius:50%;width:180px;height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
<div style="font-size:2rem;">⚔️</div>
<strong style="color:#dc2626;font-size:1.1rem;">Competitor</strong>
<span style="font-size:0.8rem;">競合</span>
</div>
<div style="background:#d1fae5;border:3px solid #10b981;border-radius:50%;width:180px;height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
<div style="font-size:2rem;">🏢</div>
<strong style="color:#059669;font-size:1.1rem;">Company</strong>
<span style="font-size:0.8rem;">自社</span>
</div>
</div>
</div>

<h3>各要素の分析ポイント</h3>
<div class="steps">
<div class="step">
<div class="step-num">C1</div>
<div class="step-content">
<strong>Customer（顧客・市場）の分析</strong>
<p>顧客のニーズや市場の動向を把握します。最初に分析すべき要素です。</p>
<ul>
<li><strong>市場規模と成長率</strong> - 市場は拡大か？縮小か？</li>
<li><strong>顧客ニーズ</strong> - 何を求めているか？どう変化しているか？</li>
<li><strong>購買行動</strong> - いつ、どこで、どのように購入するか？</li>
<li><strong>セグメント</strong> - どのような顧客グループがあるか？</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">C2</div>
<div class="step-content">
<strong>Competitor（競合）の分析</strong>
<p>直接的な競合だけでなく、間接的な競合も含めて分析します。</p>
<ul>
<li><strong>競合の特定</strong> - 直接競合と間接競合は誰か？</li>
<li><strong>市場シェア</strong> - 各競合のシェアと推移</li>
<li><strong>競合の戦略</strong> - 価格戦略、差別化ポイント</li>
<li><strong>強み・弱み</strong> - 競合のリソース、能力、課題</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">C3</div>
<div class="step-content">
<strong>Company（自社）の分析</strong>
<p>顧客と競合の分析を踏まえて、自社のポジションを客観的に評価します。</p>
<ul>
<li><strong>経営資源</strong> - ヒト・モノ・カネ・情報・ブランド</li>
<li><strong>技術力・ノウハウ</strong> - 自社独自の技術や知見</li>
<li><strong>ビジネスモデル</strong> - 収益構造、コスト構造</li>
<li><strong>組織文化</strong> - 意思決定のスピード、柔軟性</li>
</ul>
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">分析の順序が重要</div>
3C分析は必ず <strong>Customer → Competitor → Company</strong> の順で行います。まず市場を理解し、次に競合を把握した上で、自社の戦略を検討するのが正しいアプローチです。
</div>

<h3>3C分析の実践例</h3>
<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：スターバックスの3C分析</div>
<table>
<tr><th>3C</th><th>分析内容</th></tr>
<tr>
<td><strong>Customer</strong></td>
<td>「空間体験」を求める顧客が増加、リモートワーカーのサードプレイスニーズ拡大</td>
</tr>
<tr>
<td><strong>Competitor</strong></td>
<td>コンビニコーヒーの台頭（価格面）、スペシャルティコーヒーの台頭（品質面）</td>
</tr>
<tr>
<td><strong>Company</strong></td>
<td>圧倒的ブランド力、サードプレイスコンセプト、ロイヤルティプログラムの強み</td>
</tr>
</table>
</div>

<h2>VRIO分析とは</h2>
<p>VRIO分析は、ジェイ・B・バーニー教授が提唱した「リソース・ベースド・ビュー（RBV）」に基づくフレームワークで、<strong>自社の経営資源が持続的な競争優位を生み出すかどうか</strong>を4つの基準で評価します。</p>

<div class="visual-box">
<div class="visual-box-title">VRIO分析の4つの評価軸</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center;">
<div style="background:#dbeafe;border-radius:12px;padding:16px;">
<div style="font-size:2rem;">💎</div>
<strong style="color:#1e40af;">V: Value<br>（経済的価値）</strong>
<p style="font-size:0.8rem;margin-top:8px;">その資源は機会を活かしたり脅威を無力化できるか？</p>
</div>
<div style="background:#fef3c7;border-radius:12px;padding:16px;">
<div style="font-size:2rem;">🔒</div>
<strong style="color:#d97706;">R: Rarity<br>（希少性）</strong>
<p style="font-size:0.8rem;margin-top:8px;">その資源を保有している企業は少数か？</p>
</div>
<div style="background:#fee2e2;border-radius:12px;padding:16px;">
<div style="font-size:2rem;">🛡️</div>
<strong style="color:#dc2626;">I: Imitability<br>（模倣困難性）</strong>
<p style="font-size:0.8rem;margin-top:8px;">他社が模倣するのは困難か？</p>
</div>
<div style="background:#d1fae5;border-radius:12px;padding:16px;">
<div style="font-size:2rem;">⚙️</div>
<strong style="color:#059669;">O: Organization<br>（組織）</strong>
<p style="font-size:0.8rem;margin-top:8px;">資源を活用できる組織体制が整っているか？</p>
</div>
</div>
</div>

<h3>VRIOの判定フロー</h3>
<div class="visual-box">
<div class="visual-box-title">VRIO判定フローチャート</div>
<table>
<tr>
<th>V（価値）</th><th>R（希少性）</th><th>I（模倣困難性）</th><th>O（組織）</th><th>競争上の状態</th><th>パフォーマンス</th>
</tr>
<tr>
<td style="text-align:center;color:#ef4444;font-weight:bold;">No</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td>
<td style="background:#fee2e2;"><strong>競争劣位</strong></td><td>平均以下</td>
</tr>
<tr>
<td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#ef4444;font-weight:bold;">No</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td>
<td style="background:#fef3c7;"><strong>競争均衡</strong></td><td>平均</td>
</tr>
<tr>
<td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#ef4444;font-weight:bold;">No</td><td style="text-align:center;">-</td>
<td style="background:#dbeafe;"><strong>一時的競争優位</strong></td><td>平均以上</td>
</tr>
<tr>
<td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#ef4444;font-weight:bold;">No</td>
<td style="background:#dbeafe;"><strong>一時的競争優位（未活用）</strong></td><td>平均以上</td>
</tr>
<tr>
<td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td><td style="text-align:center;color:#10b981;font-weight:bold;">Yes</td>
<td style="background:#d1fae5;"><strong>持続的競争優位</strong></td><td>平均を大きく上回る</td>
</tr>
</table>
</div>

<h3>模倣困難性を生む4つの要因</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>🏛️ 歴史的経路依存性</h4>
<p>特定の歴史的経緯で獲得された資源。時間を巻き戻せません。</p>
<p><em>例: コカ・コーラの130年以上のブランド歴史</em></p>
</div>
<div class="compare-card">
<h4>🔮 因果関係の曖昧さ</h4>
<p>競争優位の源泉が外部から特定しにくい状態。</p>
<p><em>例: トヨタ生産方式（組織文化が模倣を困難に）</em></p>
</div>
<div class="compare-card">
<h4>🤝 社会的複雑性</h4>
<p>人間関係・組織文化・信頼関係など複雑な要因に基づく資源。</p>
<p><em>例: Googleのイノベーション文化</em></p>
</div>
<div class="compare-card">
<h4>📜 特許・法的保護</h4>
<p>知的財産権や法的仕組みで保護されている資源。</p>
<p><em>例: 製薬会社の特許保護された新薬</em></p>
</div>
</div>

<h3>競争優位性の持続可能性</h3>
<div class="info-box success">
<div class="info-box-title">持続的競争優位を築くために</div>
<p>VRIO分析の4条件全てを満たす経営資源を持つことが、持続的な競争優位の源泉です。</p>
<ul>
<li><strong>模倣困難性の構築</strong>：組織文化や人材育成の仕組みなど「見えざる資産」を育てる</li>
<li><strong>組織能力の整備</strong>：優れた資源を活かす体制がなければ宝の持ち腐れ</li>
<li><strong>継続的な投資</strong>：競争優位は陳腐化するため、常に進化が必要</li>
</ul>
</div>

<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：AppleのVRIO分析</div>
<table>
<tr><th>経営資源</th><th>V</th><th>R</th><th>I</th><th>O</th><th>判定</th></tr>
<tr><td><strong>デザイン力</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="background:#d1fae5;font-weight:bold;">持続的競争優位</td></tr>
<tr><td><strong>エコシステム</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="background:#d1fae5;font-weight:bold;">持続的競争優位</td></tr>
<tr><td><strong>Apple Store</strong></td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:center;">No</td><td style="text-align:center;">Yes</td><td style="background:#dbeafe;">一時的競争優位</td></tr>
<tr><td><strong>価格競争力</strong></td><td style="text-align:center;">No</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="background:#fee2e2;">競争劣位</td></tr>
</table>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：3C分析とVRIO分析の組み合わせ</div>
<div class="collapsible-body">
<p>3C分析で事業環境を把握した後、VRIO分析で自社の強みが持続的な競争優位を生むかどうかを評価するのが効果的です。「何をすべきか」だけでなく「なぜ勝てるのか」という根拠のある戦略を立案できます。</p>
</div>
</div>
`,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "3C分析で推奨される分析の順序として正しいものはどれですか？",
                    options: ["Company → Customer → Competitor", "Competitor → Company → Customer", "Customer → Competitor → Company", "Company → Competitor → Customer"],
                    answer: 2,
                    explanation: "3C分析はCustomer（顧客）→ Competitor（競合）→ Company（自社）の順で分析するのが正しいアプローチです。まず市場・顧客を理解し、競合を把握した上で、自社の戦略を検討します。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "VRIO分析において、経営資源が「価値があり、希少で、模倣困難だが、組織体制が整っていない」場合の競争上の状態はどれですか？",
                    options: ["競争劣位", "競争均衡", "一時的競争優位（未活用）", "持続的競争優位"],
                    answer: 2,
                    explanation: "V・R・Iが全てYesでもO（組織）がNoの場合、資源のポテンシャルを十分に活用できていない「一時的競争優位（未活用）」の状態です。組織体制を整えることで持続的競争優位に発展できます。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "模倣困難性を生む要因として「トヨタ生産方式のように、表面的には真似できるが本質的な再現が困難な状態」を表すものはどれですか？",
                    options: ["歴史的経路依存性", "因果関係の曖昧さ", "社会的複雑性", "特許・法的保護"],
                    answer: 1,
                    explanation: "因果関係の曖昧さとは、競争優位の源泉が何かが外部からは特定しにくい状態です。トヨタ生産方式は表面的な仕組みは分かっても、組織文化や暗黙知の部分が模倣を困難にしています。"
                }
            ]
        }
    ]
};
