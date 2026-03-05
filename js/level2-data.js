/* ============================================
   Level 2: マーケティングフレームワーク
   ============================================ */
const LEVEL2_DATA = {
    id: 2,
    title: "マーケティングフレームワーク",
    icon: "📣",
    description: "STP分析、AIDMA/AISAS、ファネル分析、ポジショニングマップなど、マーケティング戦略の必須フレームワークを学びます",
    modules: [
        {
            id: 201,
            title: "STP分析 & マーケティングミックス（4P/4C）",
            duration: "15分",
            content: `
<h2>STP分析とは</h2>
<p>STP分析は、フィリップ・コトラーが体系化したマーケティング戦略の基本フレームワークです。市場を細分化し、狙うべきターゲットを定め、競合との差別化ポジションを確立する<strong>3つのステップ</strong>で構成されます。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
STP分析は「誰に、どのような価値を、どう届けるか」を明確にするための出発点です。4P/4Cなどのマーケティングミックスを検討する前に、必ずSTPを行うのがセオリーです。
</div>

<div class="visual-box">
<div class="visual-box-title">STP分析の3ステップ</div>
<div style="display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap;padding:20px;">
<div style="background:#dbeafe;border:3px solid #2563eb;border-radius:16px;padding:20px 24px;text-align:center;min-width:200px;">
<div style="font-size:2rem;">🔍</div>
<strong style="color:#1e40af;font-size:1.1rem;">S: Segmentation</strong><br>
<span style="font-size:0.85rem;">市場の細分化</span><br>
<span style="font-size:0.8rem;color:#64748b;">市場をニーズごとに<br>グループに分ける</span>
</div>
<div style="font-size:2rem;color:#64748b;">→</div>
<div style="background:#fef3c7;border:3px solid #f59e0b;border-radius:16px;padding:20px 24px;text-align:center;min-width:200px;">
<div style="font-size:2rem;">🎯</div>
<strong style="color:#d97706;font-size:1.1rem;">T: Targeting</strong><br>
<span style="font-size:0.85rem;">標的市場の選定</span><br>
<span style="font-size:0.8rem;color:#64748b;">どのセグメントを<br>狙うか決める</span>
</div>
<div style="font-size:2rem;color:#64748b;">→</div>
<div style="background:#d1fae5;border:3px solid #10b981;border-radius:16px;padding:20px 24px;text-align:center;min-width:200px;">
<div style="font-size:2rem;">📍</div>
<strong style="color:#059669;font-size:1.1rem;">P: Positioning</strong><br>
<span style="font-size:0.85rem;">差別化の明確化</span><br>
<span style="font-size:0.8rem;color:#64748b;">顧客の中で独自の<br>位置を築く</span>
</div>
</div>
</div>

<h3>Step 1: セグメンテーション（市場細分化）</h3>
<p>市場をいくつかの同質的なグループ（セグメント）に分ける作業です。4つの主要な変数を使って分類します。</p>

<div class="visual-box">
<div class="visual-box-title">セグメンテーション変数の4分類</div>
<table>
<tr><th>変数</th><th>分類基準</th><th>具体例</th></tr>
<tr>
<td style="background:#dbeafe;font-weight:bold;">🌍 地理的変数 (Geographic)</td>
<td>地域・気候・都市規模</td>
<td>関東/関西、都市部/地方、温暖/寒冷地域</td>
</tr>
<tr>
<td style="background:#d1fae5;font-weight:bold;">👤 人口動態変数 (Demographic)</td>
<td>年齢・性別・所得・職業・家族構成</td>
<td>20代女性、年収600万以上、共働き世帯</td>
</tr>
<tr>
<td style="background:#fef3c7;font-weight:bold;">💭 心理的変数 (Psychographic)</td>
<td>ライフスタイル・価値観・性格</td>
<td>健康志向、環境重視、トレンドフォロワー</td>
</tr>
<tr>
<td style="background:#ede9fe;font-weight:bold;">🛒 行動的変数 (Behavioral)</td>
<td>購買頻度・使用場面・ロイヤルティ</td>
<td>ヘビーユーザー、週末利用、ブランドスイッチャー</td>
</tr>
</table>
</div>

<div class="info-box formula">
<div class="info-box-title">有効なセグメンテーションの条件（4R）</div>
<ul>
<li><strong>Rank（優先順位）</strong>：セグメントに優先順位をつけられるか</li>
<li><strong>Realistic（実現可能性）</strong>：十分な市場規模があるか</li>
<li><strong>Reach（到達可能性）</strong>：そのセグメントにマーケティング施策が届くか</li>
<li><strong>Response（測定可能性）</strong>：セグメントの反応を測定できるか</li>
</ul>
</div>

<h3>Step 2: ターゲティング（標的市場の選定）</h3>
<p>セグメンテーションで分類したグループの中から、自社が狙うべきセグメントを選択します。3つの基本戦略があります。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>🌐 無差別型マーケティング</h4>
<p>市場全体を1つのセグメントとみなし、同一の製品・メッセージでアプローチします。規模の経済が働きます。</p>
<p><em>例: コカ・コーラ（全世界で同一ブランド）</em></p>
</div>
<div class="compare-card">
<h4>🎯 差別化型マーケティング</h4>
<p>複数のセグメントそれぞれに異なる製品・メッセージを提供します。幅広くリーチできますがコストは高くなります。</p>
<p><em>例: トヨタ（レクサス、トヨタ、ダイハツで異なる層を狙う）</em></p>
</div>
</div>
<div style="margin-top:12px;">
<div class="compare-grid">
<div class="compare-card" style="grid-column:1/-1;">
<h4>🔬 集中型マーケティング</h4>
<p>特定の1つまたは少数のセグメントに経営資源を集中し、そのセグメントで圧倒的なポジションを築きます。限られた資源でも効果的ですが、市場変化のリスクが高い戦略です。</p>
<p><em>例: ポルシェ（高級スポーツカー市場に特化）、ワークマン（作業服市場に特化 → アウトドアへ拡張）</em></p>
</div>
</div>
</div>

<h3>Step 3: ポジショニング</h3>
<p>ターゲット顧客の頭の中に、自社製品の<strong>独自のポジション</strong>を確立することです。</p>

<div class="info-box success">
<div class="info-box-title">ポジショニングの要件</div>
<ul>
<li><strong>差別化</strong>：競合と明確に異なる価値を提供していること</li>
<li><strong>顧客価値</strong>：顧客にとって意味のある差別化であること</li>
<li><strong>一貫性</strong>：全てのマーケティング活動で一貫したメッセージを発信</li>
<li><strong>持続性</strong>：簡単に模倣されない差別化であること</li>
</ul>
</div>

<h2>マーケティングミックス：4P vs 4C</h2>
<p>STP分析で「誰に、どのような価値を」が決まったら、次は<strong>どのように届けるか</strong>を具体化するのがマーケティングミックスです。</p>

<div class="visual-box">
<div class="visual-box-title">4P（売り手視点）と 4C（買い手視点）の対応</div>
<table>
<tr><th>4P（売り手視点）</th><th>内容</th><th>4C（買い手視点）</th><th>内容</th></tr>
<tr>
<td style="background:#dbeafe;font-weight:bold;">Product（製品）</td>
<td>何を売るか</td>
<td style="background:#d1fae5;font-weight:bold;">Customer Value（顧客価値）</td>
<td>顧客にとっての価値は何か</td>
</tr>
<tr>
<td style="background:#dbeafe;font-weight:bold;">Price（価格）</td>
<td>いくらで売るか</td>
<td style="background:#d1fae5;font-weight:bold;">Cost（顧客コスト）</td>
<td>金銭的+時間的+心理的コスト</td>
</tr>
<tr>
<td style="background:#dbeafe;font-weight:bold;">Place（流通）</td>
<td>どこで売るか</td>
<td style="background:#d1fae5;font-weight:bold;">Convenience（利便性）</td>
<td>入手のしやすさ</td>
</tr>
<tr>
<td style="background:#dbeafe;font-weight:bold;">Promotion（販促）</td>
<td>どう知らせるか</td>
<td style="background:#d1fae5;font-weight:bold;">Communication（対話）</td>
<td>顧客との双方向のやり取り</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">4Pから4Cへのパラダイムシフト</div>
従来の4Pは売り手視点でしたが、現代では買い手視点の4Cが重視されています。企業は「製品を売る」のではなく「顧客の課題を解決する」という発想が不可欠です。
</div>

<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：スターバックスの4P/4C</div>
<table>
<tr><th>4P</th><th>施策</th><th>4C</th><th>顧客から見た価値</th></tr>
<tr><td><strong>Product</strong></td><td>高品質コーヒー、カスタマイズ</td><td><strong>Customer Value</strong></td><td>サードプレイスとしての空間体験</td></tr>
<tr><td><strong>Price</strong></td><td>プレミアム価格設定</td><td><strong>Cost</strong></td><td>リラックス空間への対価として納得</td></tr>
<tr><td><strong>Place</strong></td><td>駅近・商業施設内の好立地</td><td><strong>Convenience</strong></td><td>通勤途中に気軽に立ち寄れる</td></tr>
<tr><td><strong>Promotion</strong></td><td>SNS活用、限定メニュー</td><td><strong>Communication</strong></td><td>バリスタとの会話、SNSでの共有</td></tr>
</table>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：7Pへの拡張（サービスマーケティング）</div>
<div class="collapsible-body">
<p>サービス業では4Pに加えて3つのPが追加された<strong>7P</strong>が使われます。</p>
<ul>
<li><strong>People（人）</strong>：サービスを提供するスタッフの質・対応</li>
<li><strong>Process（プロセス）</strong>：サービス提供の手順・仕組み</li>
<li><strong>Physical Evidence（物的証拠）</strong>：店舗の雰囲気、制服、設備など</li>
</ul>
</div>
</div>
`,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "セグメンテーション変数の「心理的変数（Psychographic）」に該当するものはどれですか？",
                    options: ["年齢・性別・所得などの属性", "都市部か地方かの居住地域", "健康志向や環境意識などの価値観", "購買頻度やブランドロイヤルティ"],
                    answer: 2,
                    explanation: "心理的変数（Psychographic）は、ライフスタイル、価値観、性格などの心理的特性による分類です。年齢・性別は人口動態変数、居住地域は地理的変数、購買頻度は行動的変数です。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "ターゲティングの3戦略のうち、「限られた経営資源をニッチ市場に集中する」戦略はどれですか？",
                    options: ["無差別型マーケティング", "差別化型マーケティング", "集中型マーケティング", "マスマーケティング"],
                    answer: 2,
                    explanation: "集中型マーケティングは、特定の少数のセグメントに経営資源を集中する戦略です。資源が限られている中小企業がニッチ市場で高いシェアを獲得するのに適しています。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "4Pの「Price（価格）」に対応する4Cの要素はどれですか？",
                    options: ["Customer Value（顧客価値）", "Cost（顧客コスト）", "Convenience（利便性）", "Communication（対話）"],
                    answer: 1,
                    explanation: "4PのPriceは4CのCost（顧客コスト）に対応しています。Costは金銭的コストだけでなく、時間的・心理的コストも含めた顧客の総合的な負担を考慮する概念です。"
                }
            ]
        },
        {
            id: 202,
            title: "AIDMA / AISAS / カスタマージャーニー",
            duration: "15分",
            content: `
<h2>消費者の購買行動モデル</h2>
<p>消費者が商品やサービスを購入するまでの<strong>心理プロセス</strong>を理解することは、マーケティング戦略を立てる上で不可欠です。代表的なモデルとして<strong>AIDMA</strong>と<strong>AISAS</strong>があります。</p>

<h2>AIDMAモデル</h2>
<p>AIDMAは、1920年代にサミュエル・ローランド・ホールが提唱した、マスメディア時代の<strong>消費者購買心理モデル</strong>です。</p>

<div class="visual-box">
<div class="visual-box-title">AIDMAモデル - 消費者の購買心理5段階</div>
<div style="display:flex;justify-content:center;align-items:center;gap:8px;flex-wrap:wrap;padding:20px;">
<div style="background:#fee2e2;border:2px solid #ef4444;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">👁️</div>
<strong style="color:#dc2626;">A: Attention</strong><br>
<span style="font-size:0.8rem;">注意 - 商品を知る</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">💡</div>
<strong style="color:#d97706;">I: Interest</strong><br>
<span style="font-size:0.8rem;">興味 - 関心を持つ</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">❤️</div>
<strong style="color:#1e40af;">D: Desire</strong><br>
<span style="font-size:0.8rem;">欲求 - 欲しいと思う</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">🧠</div>
<strong style="color:#7c3aed;">M: Memory</strong><br>
<span style="font-size:0.8rem;">記憶 - 記憶に留める</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">🛒</div>
<strong style="color:#059669;">A: Action</strong><br>
<span style="font-size:0.8rem;">行動 - 購入する</span>
</div>
</div>
</div>

<div class="info-box tip">
<div class="info-box-title">AIDMAの3つのフェーズ</div>
<ul>
<li><strong>認知段階</strong>（Attention）：存在を知ってもらう</li>
<li><strong>感情段階</strong>（Interest → Desire → Memory）：感情を動かし記憶に残す</li>
<li><strong>行動段階</strong>（Action）：実際の購買行動を促す</li>
</ul>
</div>

<h2>AISASモデル</h2>
<p>AISASは、2004年に電通が提唱した<strong>インターネット時代の消費者購買行動モデル</strong>です。消費者が能動的に情報を検索し、購入後に共有するという行動特性を反映しています。</p>

<div class="visual-box">
<div class="visual-box-title">AISASモデル - インターネット時代の購買行動</div>
<div style="display:flex;justify-content:center;align-items:center;gap:8px;flex-wrap:wrap;padding:20px;">
<div style="background:#fee2e2;border:2px solid #ef4444;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">👁️</div>
<strong style="color:#dc2626;">A: Attention</strong><br>
<span style="font-size:0.8rem;">注意 - SNS・広告で知る</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">💡</div>
<strong style="color:#d97706;">I: Interest</strong><br>
<span style="font-size:0.8rem;">興味 - 関心を持つ</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">🔍</div>
<strong style="color:#1e40af;">S: Search</strong><br>
<span style="font-size:0.8rem;">検索 - 口コミで調べる</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">🛒</div>
<strong style="color:#059669;">A: Action</strong><br>
<span style="font-size:0.8rem;">行動 - 購入する</span>
</div>
<div style="font-size:1.3rem;color:#64748b;">→</div>
<div style="background:#ede9fe;border:2px solid #7c3aed;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">📢</div>
<strong style="color:#7c3aed;">S: Share</strong><br>
<span style="font-size:0.8rem;">共有 - SNSで発信</span>
</div>
</div>
</div>

<h3>AIDMAとAISASの比較</h3>
<div class="visual-box">
<div class="visual-box-title">AIDMA vs AISAS 比較表</div>
<table>
<tr><th>比較項目</th><th>AIDMA</th><th>AISAS</th></tr>
<tr><td><strong>提唱時期</strong></td><td>1920年代</td><td>2004年（電通）</td></tr>
<tr><td><strong>時代背景</strong></td><td>マスメディア中心</td><td>インターネット・SNS時代</td></tr>
<tr><td><strong>情報の流れ</strong></td><td>一方向（企業→消費者）</td><td>双方向（企業⇔消費者）</td></tr>
<tr><td><strong>消費者の特性</strong></td><td>受動的（情報を受け取る）</td><td>能動的（自ら検索・発信する）</td></tr>
<tr><td><strong>購入前</strong></td><td>Desire → Memory</td><td>Search（検索・比較検討）</td></tr>
<tr><td><strong>購入後</strong></td><td>（モデルに含まれない）</td><td>Share（共有・拡散）</td></tr>
<tr><td><strong>重要チャネル</strong></td><td>TV CM、新聞広告、店頭POP</td><td>SEO、SNS広告、口コミサイト</td></tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">AISASの「Share」の重要性</div>
AISASの最大の特徴は、購入後の「Share」が次の消費者の「Attention」につながる<strong>循環構造</strong>にあります。良い体験が口コミとして拡散されると、広告費をかけずに新規顧客を獲得できます。
</div>

<h2>カスタマージャーニーマップ</h2>
<p>カスタマージャーニーマップは、顧客が商品・サービスを<strong>認知してから購入・推奨に至るまでの一連の体験</strong>を時系列で可視化したものです。</p>

<div class="visual-box">
<div class="visual-box-title">カスタマージャーニーマップの5フェーズ</div>
<div style="display:flex;gap:4px;padding:10px;">
<div style="flex:1;background:#fee2e2;border-radius:8px;padding:12px;text-align:center;">
<div style="font-size:1.3rem;">👁️</div>
<strong style="font-size:0.85rem;">認知</strong>
<p style="font-size:0.75rem;margin-top:4px;">商品の存在を知る</p>
</div>
<div style="flex:1;background:#fef3c7;border-radius:8px;padding:12px;text-align:center;">
<div style="font-size:1.3rem;">🤔</div>
<strong style="font-size:0.85rem;">検討</strong>
<p style="font-size:0.75rem;margin-top:4px;">情報収集・比較する</p>
</div>
<div style="flex:1;background:#dbeafe;border-radius:8px;padding:12px;text-align:center;">
<div style="font-size:1.3rem;">🛒</div>
<strong style="font-size:0.85rem;">購入</strong>
<p style="font-size:0.75rem;margin-top:4px;">購買を決定する</p>
</div>
<div style="flex:1;background:#d1fae5;border-radius:8px;padding:12px;text-align:center;">
<div style="font-size:1.3rem;">📦</div>
<strong style="font-size:0.85rem;">利用</strong>
<p style="font-size:0.75rem;margin-top:4px;">製品を使用する</p>
</div>
<div style="flex:1;background:#ede9fe;border-radius:8px;padding:12px;text-align:center;">
<div style="font-size:1.3rem;">📢</div>
<strong style="font-size:0.85rem;">推奨</strong>
<p style="font-size:0.75rem;margin-top:4px;">他者に勧める</p>
</div>
</div>
</div>

<h3>カスタマージャーニーマップの作成手順</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>ペルソナを設定する</strong>
ターゲット顧客の具体的な人物像（年齢、職業、ライフスタイル、悩みなど）を設定します。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>フェーズを定義する</strong>
顧客の購買プロセスを段階に分けます（認知→検討→購入→利用→推奨）。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>タッチポイントを洗い出す</strong>
各フェーズで顧客と企業が接触するポイントを特定します。オンライン・オフライン両方を含めます。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>顧客の行動・思考・感情を記録する</strong>
各タッチポイントでの行動、考え、感情（ポジティブ/ネガティブ）を記入します。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>課題と改善策を特定する</strong>
顧客体験の中で離脱や不満が発生しているポイントを特定し、改善策を検討します。
</div>
</div>
</div>

<h3>タッチポイントの設計</h3>
<div class="scenario-box">
<div class="scenario-box-title">タッチポイント設計例：ECサイトの場合</div>
<table>
<tr><th>フェーズ</th><th>タッチポイント</th><th>顧客の行動</th><th>施策例</th></tr>
<tr><td><strong>認知</strong></td><td>SNS広告、検索結果</td><td>広告をクリック</td><td>ターゲティング広告の最適化</td></tr>
<tr><td><strong>検討</strong></td><td>商品ページ、レビュー</td><td>スペック比較、口コミを読む</td><td>詳細な商品情報、UGCの活用</td></tr>
<tr><td><strong>購入</strong></td><td>カート、決済画面</td><td>注文手続き</td><td>カート離脱防止、多様な決済手段</td></tr>
<tr><td><strong>利用</strong></td><td>開封体験、使用体験</td><td>商品を使い始める</td><td>おしゃれなパッケージ、取説充実</td></tr>
<tr><td><strong>推奨</strong></td><td>レビュー投稿、SNS</td><td>感想を共有</td><td>レビュー投稿特典、ハッシュタグ</td></tr>
</table>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：ULSSAS（ウルサス）モデル</div>
<div class="collapsible-body">
<p>SNS時代の新しい購買行動モデルとして、ホットリンク社が提唱する<strong>ULSSAS</strong>があります。</p>
<ul>
<li><strong>U（UGC）</strong>：ユーザー生成コンテンツがきっかけ</li>
<li><strong>L（Like）</strong>：いいね・共感する</li>
<li><strong>S（Search1）</strong>：SNS内で検索する</li>
<li><strong>S（Search2）</strong>：Google等で詳しく検索する</li>
<li><strong>A（Action）</strong>：購入する</li>
<li><strong>S（Spread）</strong>：拡散する → 新たなUGCが生まれる</li>
</ul>
<p>広告ではなく<strong>ユーザーの口コミが起点</strong>となる点がAISASとの違いです。</p>
</div>
</div>
`,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "AIDMAモデルの5段階を正しい順序で並べたものはどれですか？",
                    options: [
                        "Attention → Interest → Desire → Memory → Action",
                        "Attention → Interest → Search → Action → Share",
                        "Attention → Interest → Decision → Memory → Action",
                        "Awareness → Interest → Desire → Memory → Action"
                    ],
                    answer: 0,
                    explanation: "AIDMAモデルは、Attention（注意）→ Interest（興味）→ Desire（欲求）→ Memory（記憶）→ Action（行動）の5段階です。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "AISASモデルがAIDMAモデルと最も大きく異なる点はどれですか？",
                    options: [
                        "Attentionの段階がない",
                        "Interestの後にSearch（検索）があり、購入後にShare（共有）がある",
                        "行動段階が存在しない",
                        "感情段階が3つから5つに増えている"
                    ],
                    answer: 1,
                    explanation: "AISASの最大の特徴は、消費者が能動的に情報をSearch（検索）する段階と、購入後に体験をShare（共有）する段階が含まれる点です。"
                },
                {
                    id: "q202_3",
                    type: "choice",
                    question: "カスタマージャーニーマップの作成で最初に行うべきステップはどれですか？",
                    options: [
                        "タッチポイントの洗い出し",
                        "フェーズの定義",
                        "ペルソナの設定",
                        "KPIの設定"
                    ],
                    answer: 2,
                    explanation: "カスタマージャーニーマップ作成では、まず「ペルソナの設定」を行います。誰のジャーニーを描くのかが明確でないと、フェーズやタッチポイントの特定が曖昧になります。"
                }
            ]
        },
        {
            id: 203,
            title: "ファネル分析 & LTV & RFM分析",
            duration: "15分",
            content: `
<h2>マーケティングファネルとは</h2>
<p>マーケティングファネル（漏斗）は、潜在顧客が商品を認知してから購入・リピートに至るまでのプロセスを<strong>逆三角形</strong>の形で表したものです。各段階で顧客が離脱するため、下に行くほど人数が減ります。</p>

<div class="visual-box">
<div class="visual-box-title">マーケティングファネル</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:20px;">
<div style="background:#fee2e2;width:100%;max-width:500px;padding:14px;text-align:center;border-radius:4px;">
<strong>認知（Awareness）</strong> - 潜在顧客100%
</div>
<div style="background:#fef3c7;width:85%;max-width:425px;padding:14px;text-align:center;border-radius:4px;">
<strong>興味（Interest）</strong> - 約60%
</div>
<div style="background:#dbeafe;width:70%;max-width:350px;padding:14px;text-align:center;border-radius:4px;">
<strong>検討（Consideration）</strong> - 約30%
</div>
<div style="background:#d1fae5;width:55%;max-width:275px;padding:14px;text-align:center;border-radius:4px;">
<strong>購入（Purchase）</strong> - 約10%
</div>
<div style="background:#ede9fe;width:40%;max-width:200px;padding:14px;text-align:center;border-radius:4px;">
<strong>リピート（Loyalty）</strong> - 約3%
</div>
</div>
</div>

<h3>ファネル各段階のKPIと改善施策</h3>
<table>
<tr><th>ファネル段階</th><th>主要KPI</th><th>改善施策</th></tr>
<tr>
<td style="background:#fee2e2;"><strong>認知</strong></td>
<td>リーチ数、インプレッション数</td>
<td>マス広告、SNS広告、SEO対策</td>
</tr>
<tr>
<td style="background:#fef3c7;"><strong>興味</strong></td>
<td>クリック率（CTR）、サイト訪問数</td>
<td>魅力的なクリエイティブ、LP最適化</td>
</tr>
<tr>
<td style="background:#dbeafe;"><strong>検討</strong></td>
<td>資料請求数、カート追加率</td>
<td>事例紹介、比較コンテンツ、無料トライアル</td>
</tr>
<tr>
<td style="background:#d1fae5;"><strong>購入</strong></td>
<td>コンバージョン率（CVR）、客単価</td>
<td>カート離脱防止、決済手段の充実</td>
</tr>
<tr>
<td style="background:#ede9fe;"><strong>リピート</strong></td>
<td>リピート率、解約率、NPS</td>
<td>メールマーケティング、ポイント制度</td>
</tr>
</table>

<div class="info-box tip">
<div class="info-box-title">ファネル分析の活用ポイント</div>
ファネルの各段階間の「転換率」を計測し、<strong>最も離脱が多いボトルネック</strong>を特定して改善することが重要です。
</div>

<h2>LTV（Life Time Value：顧客生涯価値）</h2>
<p>LTVは、<strong>1人の顧客が取引期間全体を通じて企業にもたらす利益の総額</strong>です。顧客獲得コスト（CAC）と比較してマーケティング投資の妥当性を判断します。</p>

<div class="info-box formula">
<div class="info-box-title">LTVの基本計算式</div>
<div style="text-align:center;font-size:1.2rem;margin:16px 0;">
<strong>LTV = 平均購買単価 x 購買頻度 x 継続期間</strong>
</div>
<p>例：平均購買単価 5,000円 x 月2回 x 3年（36ヶ月）= <strong>360,000円</strong></p>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>LTVの計算方法（応用）</h4>
<ul>
<li><strong>簡易版</strong>：平均購買単価 x 購買頻度 x 継続期間</li>
<li><strong>粗利ベース</strong>：(平均購買単価 x 粗利率) x 購買頻度 x 継続期間</li>
<li><strong>CAC考慮版</strong>：LTV - 顧客獲得コスト（CAC）</li>
</ul>
</div>
<div class="compare-card">
<h4>LTV向上の3つのレバー</h4>
<ol>
<li><strong>購買単価を上げる</strong><br>アップセル・クロスセルの推進</li>
<li><strong>購買頻度を高める</strong><br>リマインド施策、定期購入の導入</li>
<li><strong>継続期間を延ばす</strong><br>顧客満足度の向上、解約防止施策</li>
</ol>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">LTV/CAC比率の目安</div>
<p>一般的に <strong>LTV / CAC ≧ 3</strong> が健全とされています。</p>
<ul>
<li><strong>LTV/CAC &lt; 1</strong>：赤字。顧客獲得コストが生涯価値を上回っている</li>
<li><strong>LTV/CAC = 1〜3</strong>：投資回収に時間がかかる。改善が必要</li>
<li><strong>LTV/CAC ≧ 3</strong>：健全。マーケティング投資を積極化できる</li>
</ul>
</div>

<h2>RFM分析とは</h2>
<p>RFM分析は、顧客データベースを<strong>3つの指標</strong>で評価し、顧客をセグメント化する手法です。</p>

<div class="visual-box">
<div class="visual-box-title">RFM分析の3つの指標</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:10px;">
<div style="background:#dbeafe;border:3px solid #2563eb;border-radius:16px;padding:20px;text-align:center;">
<div style="font-size:2.5rem;">📅</div>
<strong style="color:#1e40af;font-size:1.2rem;">R: Recency</strong><br>
<span style="font-size:0.9rem;">最終購買日</span>
<p style="font-size:0.8rem;margin-top:8px;color:#64748b;">最後にいつ購入したか？<br>直近ほどスコアが高い</p>
</div>
<div style="background:#fef3c7;border:3px solid #f59e0b;border-radius:16px;padding:20px;text-align:center;">
<div style="font-size:2.5rem;">🔄</div>
<strong style="color:#d97706;font-size:1.2rem;">F: Frequency</strong><br>
<span style="font-size:0.9rem;">購買頻度</span>
<p style="font-size:0.8rem;margin-top:8px;color:#64748b;">どれくらい頻繁に購入するか？<br>頻度が高いほどスコアが高い</p>
</div>
<div style="background:#d1fae5;border:3px solid #10b981;border-radius:16px;padding:20px;text-align:center;">
<div style="font-size:2.5rem;">💰</div>
<strong style="color:#059669;font-size:1.2rem;">M: Monetary</strong><br>
<span style="font-size:0.9rem;">購買金額</span>
<p style="font-size:0.8rem;margin-top:8px;color:#64748b;">累計でいくら使ったか？<br>金額が大きいほどスコアが高い</p>
</div>
</div>
</div>

<h3>RFM分析による顧客ランク分け</h3>
<div class="scenario-box">
<div class="scenario-box-title">RFMスコアに基づく顧客セグメント</div>
<table>
<tr><th>セグメント</th><th>R</th><th>F</th><th>M</th><th>特徴</th><th>施策例</th></tr>
<tr><td style="background:#d1fae5;font-weight:bold;">優良顧客</td><td>高</td><td>高</td><td>高</td><td>最近も頻繁に高額購入</td><td>VIP特典、限定サービス</td></tr>
<tr><td style="background:#dbeafe;font-weight:bold;">安定顧客</td><td>高</td><td>高</td><td>中</td><td>常連だが単価は中程度</td><td>アップセル、まとめ買い訴求</td></tr>
<tr><td style="background:#fef3c7;font-weight:bold;">新規顧客</td><td>高</td><td>低</td><td>低</td><td>最近購入したが初回</td><td>ウェルカム施策、2回目購入促進</td></tr>
<tr><td style="background:#fee2e2;font-weight:bold;">離反危険顧客</td><td>低</td><td>高</td><td>高</td><td>以前は優良だが最近購入なし</td><td>カムバックキャンペーン</td></tr>
<tr><td style="background:#fee2e2;font-weight:bold;">休眠顧客</td><td>低</td><td>低</td><td>低</td><td>長期間購入なし</td><td>再アプローチ or リスト整理</td></tr>
</table>
</div>

<h3>RFM分析の実践手順</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>データを収集する</strong>
顧客ごとの購買データ（最終購買日、購買回数、累計金額）を収集します。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>R・F・Mそれぞれのスコアを付ける</strong>
各指標を5段階でスコアリングします。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>顧客をセグメント化する</strong>
R・F・Mのスコアの組み合わせで顧客をグループに分類します。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>セグメント別に施策を立案する</strong>
各セグメントに合わせた個別のマーケティング施策を設計・実行します。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">ファネル・LTV・RFMの連携</div>
<ul>
<li><strong>ファネル分析</strong>でボトルネックを把握</li>
<li><strong>LTV</strong>で顧客獲得への投資額を判断</li>
<li><strong>RFM分析</strong>で既存顧客をセグメント化して施策を最適化</li>
</ul>
<p>この3つを組み合わせることで、新規獲得から既存顧客育成まで一貫したデータドリブンマーケティングが実現します。</p>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：ダブルファネルとフライホイールモデル</div>
<div class="collapsible-body">
<p>現代では購入後の顧客体験が新たな顧客を呼ぶ<strong>循環型モデル</strong>が重視されています。</p>
<ul>
<li><strong>ダブルファネル</strong>：購入ファネルと影響ファネル（継続→紹介→発信）を組み合わせたモデル</li>
<li><strong>フライホイールモデル</strong>（HubSpot提唱）：Attract→Engage→Delightの循環で成長を加速させるモデル</li>
</ul>
</div>
</div>
`,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "マーケティングファネルで「最も離脱が多いボトルネック」を改善する目的はどれですか？",
                    options: [
                        "全てのファネル段階を均等に改善するため",
                        "コンバージョン率を高め、効率的に顧客を獲得するため",
                        "認知段階の広告費を削減するため",
                        "新規顧客の獲得を完全に止めるため"
                    ],
                    answer: 1,
                    explanation: "ファネル分析の目的は、各段階間の転換率を計測して最も離脱が多いボトルネックを特定し、そこを改善することで効率的に顧客を獲得・育成することです。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "LTV（顧客生涯価値）の計算式として正しいものはどれですか？",
                    options: [
                        "LTV = 新規顧客数 x 広告費用",
                        "LTV = 平均購買単価 x 購買頻度 x 継続期間",
                        "LTV = 売上高 / 顧客数",
                        "LTV = 顧客獲得コスト x リピート率"
                    ],
                    answer: 1,
                    explanation: "LTVの基本計算式は「平均購買単価 x 購買頻度 x 継続期間」です。例えば、平均5,000円 x 月2回 x 3年（36ヶ月）= 360,000円となります。"
                },
                {
                    id: "q203_3",
                    type: "choice",
                    question: "RFM分析で「以前は優良顧客だったが、最近購入がない」顧客はどのセグメントですか？",
                    options: [
                        "優良顧客（R高・F高・M高）",
                        "新規顧客（R高・F低・M低）",
                        "離反危険顧客（R低・F高・M高）",
                        "休眠顧客（R低・F低・M低）"
                    ],
                    answer: 2,
                    explanation: "以前は頻繁に高額購入していた（F高・M高）が最近購入がない（R低）顧客は「離反危険顧客」です。カムバックキャンペーンなどで早期に対策を打つべきセグメントです。"
                }
            ]
        },
        {
            id: 204,
            title: "ポジショニングマップ & ブランドエクイティ",
            duration: "15分",
            content: `
<h2>ポジショニングマップとは</h2>
<p>ポジショニングマップ（知覚マップ）は、顧客が市場内の複数のブランドや製品を<strong>どのように認識しているか</strong>を2つの軸で視覚的に表した図です。STP分析のPositioningを具体化するためのツールです。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
ポジショニングマップは「事実」ではなく「顧客の知覚（パーセプション）」に基づいて描きます。企業がどう思っているかではなく、顧客がどう感じているかが重要です。
</div>

<h3>ポジショニングマップの作成手順</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>軸を選定する</strong>
顧客が購買意思決定の際に重視する要素を2つ選びます。軸の選定がマップの質を左右する最重要ステップです。
<ul>
<li>軸は互いに<strong>独立性が高い</strong>ものを選ぶ（相関が高い2軸は避ける）</li>
<li>顧客にとって<strong>意味のある差別化要因</strong>を選ぶ</li>
<li>例：価格（高い⇔安い）、品質（高⇔低）、デザイン（保守的⇔革新的）</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>競合をプロットする</strong>
選んだ2軸のマップ上に自社と競合ブランドをプロット（配置）します。顧客アンケートの結果に基づいて配置するのが理想的です。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>分析・戦略を導出する</strong>
マップから以下の情報を読み取ります。
<ul>
<li><strong>空白地帯</strong>：競合がいないポジション（ビジネスチャンスの可能性）</li>
<li><strong>密集地帯</strong>：競争が激しいポジション（差別化が困難）</li>
<li><strong>自社の位置</strong>：ターゲット顧客の理想と一致しているか</li>
</ul>
</div>
</div>
</div>

<h3>ポジショニングマップの具体例</h3>
<div class="visual-box">
<div class="visual-box-title">自動車市場のポジショニングマップ</div>
<div style="position:relative;width:100%;max-width:500px;height:400px;margin:0 auto;border-left:2px solid #64748b;border-bottom:2px solid #64748b;">
<div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-weight:700;color:#64748b;font-size:0.85rem;">高価格</div>
<div style="position:absolute;bottom:-25px;left:50%;transform:translateX(-50%);font-weight:700;color:#64748b;font-size:0.85rem;">低価格</div>
<div style="position:absolute;top:50%;right:-50px;transform:translateY(-50%);font-weight:700;color:#64748b;font-size:0.85rem;">スポーティ</div>
<div style="position:absolute;top:50%;left:-40px;transform:translateY(-50%);font-weight:700;color:#64748b;font-size:0.85rem;">実用的</div>
<div style="position:absolute;top:15%;left:60%;background:#ef4444;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">ポルシェ</div>
<div style="position:absolute;top:12%;left:30%;background:#2563eb;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">メルセデス</div>
<div style="position:absolute;top:25%;left:75%;background:#7c3aed;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">BMW</div>
<div style="position:absolute;top:45%;left:25%;background:#059669;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">トヨタ</div>
<div style="position:absolute;top:55%;left:55%;background:#d97706;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">スバル</div>
<div style="position:absolute;top:70%;left:20%;background:#0891b2;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">ダイハツ</div>
<div style="position:absolute;top:75%;left:50%;background:#dc2626;color:white;padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">スズキ</div>
<div style="position:absolute;top:35%;left:55%;background:rgba(16,185,129,0.15);border:2px dashed #10b981;border-radius:12px;padding:10px;font-size:0.75rem;color:#059669;font-weight:700;">空白地帯</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">ポジショニングマップの注意点</div>
<ul>
<li>2軸だけでは表現しきれない場合は複数のマップを作成する</li>
<li>空白地帯に必ずしもビジネスチャンスがあるとは限らない（需要がない可能性）</li>
<li>マップは定期的に更新する必要がある（環境や認識は変化する）</li>
</ul>
</div>

<h2>ブランドエクイティとは</h2>
<p>ブランドエクイティ（Brand Equity）は、デイヴィッド・アーカーが提唱した概念で、<strong>ブランドが持つ資産としての価値</strong>を表します。強力なブランドエクイティを持つ企業は、価格プレミアムの実現、顧客ロイヤルティの向上など多くの競争優位を享受できます。</p>

<div class="visual-box">
<div class="visual-box-title">ブランドエクイティの5つの要素（アーカーモデル）</div>
<div style="display:flex;flex-direction:column;gap:12px;text-align:left;padding:10px;">
<div style="display:flex;align-items:center;gap:16px;background:#dbeafe;border-radius:12px;padding:16px;">
<div style="font-size:2rem;min-width:40px;text-align:center;">🔔</div>
<div>
<strong style="color:#1e40af;">1. ブランド認知（Brand Awareness）</strong>
<p style="font-size:0.85rem;margin-top:4px;">消費者がそのブランドを知っていて、思い出せる度合い。「コーラと言えば？」→「コカ・コーラ」</p>
</div>
</div>
<div style="display:flex;align-items:center;gap:16px;background:#d1fae5;border-radius:12px;padding:16px;">
<div style="font-size:2rem;min-width:40px;text-align:center;">⭐</div>
<div>
<strong style="color:#059669;">2. 知覚品質（Perceived Quality）</strong>
<p style="font-size:0.85rem;margin-top:4px;">消費者がそのブランドの品質をどう認識しているか。プレミアム価格を支える重要な要素。</p>
</div>
</div>
<div style="display:flex;align-items:center;gap:16px;background:#fef3c7;border-radius:12px;padding:16px;">
<div style="font-size:2rem;min-width:40px;text-align:center;">💭</div>
<div>
<strong style="color:#d97706;">3. ブランド連想（Brand Association）</strong>
<p style="font-size:0.85rem;margin-top:4px;">消費者がそのブランドから連想するイメージ。Appleなら「革新的」「洗練されたデザイン」</p>
</div>
</div>
<div style="display:flex;align-items:center;gap:16px;background:#fee2e2;border-radius:12px;padding:16px;">
<div style="font-size:2rem;min-width:40px;text-align:center;">❤️</div>
<div>
<strong style="color:#dc2626;">4. ブランドロイヤルティ（Brand Loyalty）</strong>
<p style="font-size:0.85rem;margin-top:4px;">顧客がブランドに対して持つ愛着や信頼、繰り返し購入する傾向。</p>
</div>
</div>
<div style="display:flex;align-items:center;gap:16px;background:#ede9fe;border-radius:12px;padding:16px;">
<div style="font-size:2rem;min-width:40px;text-align:center;">📋</div>
<div>
<strong style="color:#7c3aed;">5. その他のブランド資産（Other Brand Assets）</strong>
<p style="font-size:0.85rem;margin-top:4px;">商標権、特許、流通チャネルとの関係など法的・制度的に保護された資産。</p>
</div>
</div>
</div>
</div>

<h3>ブランドエクイティがもたらす競争優位</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>企業にとってのメリット</h4>
<ul>
<li><strong>価格プレミアム</strong>：同等品でも高い価格で販売可能</li>
<li><strong>顧客獲得コスト削減</strong>：認知度が高く自然流入が増加</li>
<li><strong>新製品導入の優位性</strong>：既存ブランドへの信頼が波及</li>
<li><strong>流通力の強化</strong>：小売店が優先的に扱う</li>
</ul>
</div>
<div class="compare-card">
<h4>顧客にとってのメリット</h4>
<ul>
<li><strong>購買リスクの低減</strong>：信頼ブランドで安心して購入</li>
<li><strong>意思決定の簡素化</strong>：ブランドが判断基準になる</li>
<li><strong>自己表現</strong>：ブランドでアイデンティティを表現</li>
<li><strong>体験の予測可能性</strong>：一貫した品質への期待</li>
</ul>
</div>
</div>

<h3>ブランド構築のステップ</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>ブランドアイデンティティを定義する</strong>
「このブランドは何者か？」を明確にします。ミッション、ビジョン、バリュー、提供価値を言語化します。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>ブランド認知を構築する</strong>
ターゲット顧客にブランドの存在を知ってもらいます。広告、PR、SNS、イベントを通じてブランド名とカテゴリの結びつきを形成します。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>ブランドの意味を確立する</strong>
知覚品質とブランド連想を形成します。製品品質を高め、ポジティブな連想を構築します。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>ブランドへの反応を引き出す</strong>
顧客がブランドに対して好意的な判断（品質が良い、信頼できる）と感情（ワクワクする、安心する）を持つようにします。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>ブランドロイヤルティを形成する</strong>
顧客とブランドの間に深い絆を形成します。コミュニティ、ロイヤルティプログラム、一貫したブランド体験がカギです。
</div>
</div>
</div>

<div class="scenario-box">
<div class="scenario-box-title">ケーススタディ：Appleのブランドエクイティ</div>
<table>
<tr><th>エクイティ要素</th><th>Appleの事例</th></tr>
<tr><td><strong>ブランド認知</strong></td><td>世界中で「リンゴのロゴ」を見ただけでAppleと認識される圧倒的認知度</td></tr>
<tr><td><strong>知覚品質</strong></td><td>「高品質・高性能・使いやすい」という強い品質認知</td></tr>
<tr><td><strong>ブランド連想</strong></td><td>「革新的」「クリエイティブ」「プレミアム」「シンプル」</td></tr>
<tr><td><strong>ブランドロイヤルティ</strong></td><td>iPhone→Mac→Apple Watch→AirPodsとエコシステムへのロックイン</td></tr>
<tr><td><strong>その他資産</strong></td><td>多数の特許、独自OS、Apple Storeの直販ネットワーク</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">ポジショニングとブランドエクイティの関係</div>
<p><strong>ポジショニング</strong>は「顧客の頭の中に独自の位置を築く」戦略であり、<strong>ブランドエクイティ</strong>はその結果として蓄積される資産です。明確なポジショニングを一貫して維持することで、強力なブランドエクイティが構築されます。</p>
</div>

<div class="collapsible">
<div class="collapsible-header">発展：ケラーのブランド・エクイティ・ピラミッド（CBBE）</div>
<div class="collapsible-body">
<p>ケビン・レーン・ケラーは、ブランドエクイティを顧客視点で4段階のピラミッドとして体系化しました。</p>
<ol>
<li><strong>第1段階：アイデンティティ</strong> - ブランドの認知（Who are you?）</li>
<li><strong>第2段階：ミーニング</strong> - ブランドの意味（What are you?）</li>
<li><strong>第3段階：レスポンス</strong> - ブランドへの反応（What about you?）</li>
<li><strong>第4段階：レゾナンス</strong> - ブランドとの絆（What about you and me?）</li>
</ol>
<p>下の段階から順に構築していくことで、最終的に顧客との深い絆を実現できます。</p>
</div>
</div>
`,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "ポジショニングマップの軸を選定する際に最も重要なことはどれですか？",
                    options: [
                        "企業が重視する経営指標を軸にする",
                        "競合企業が使っている軸と同じにする",
                        "顧客の購買意思決定に影響する要因で、互いに独立性が高い軸を選ぶ",
                        "軸は3つ以上設定して多次元で分析する"
                    ],
                    answer: 2,
                    explanation: "ポジショニングマップの軸は、顧客が購買意思決定の際に重視する要素であり、かつ互いに独立性が高いものを選ぶことが重要です。企業視点ではなく顧客視点で選定します。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "ブランドエクイティの5要素のうち、「コーラと言えばコカ・コーラ」のようにカテゴリからブランドが想起される度合いを表すものはどれですか？",
                    options: [
                        "知覚品質（Perceived Quality）",
                        "ブランド認知（Brand Awareness）",
                        "ブランド連想（Brand Association）",
                        "ブランドロイヤルティ（Brand Loyalty）"
                    ],
                    answer: 1,
                    explanation: "ブランド認知（Brand Awareness）は、消費者がブランドを知っていてカテゴリから想起できる度合いです。「コーラ→コカ・コーラ」「スマホ→iPhone」のような想起がこれに該当します。"
                },
                {
                    id: "q204_3",
                    type: "choice",
                    question: "ブランド構築のステップにおいて、最も最初に行うべきことはどれですか？",
                    options: [
                        "大規模な広告キャンペーンでブランド認知を高める",
                        "ブランドアイデンティティ（ミッション・ビジョン・提供価値）を定義する",
                        "ロイヤルティプログラムを構築して顧客を囲い込む",
                        "競合ブランドの模倣をしてシェアを奪う"
                    ],
                    answer: 1,
                    explanation: "ブランド構築の最初のステップはブランドアイデンティティの定義です。「このブランドは何者か」が明確でなければ、広告やロイヤルティプログラムも一貫性を持てず、強いブランドは構築できません。"
                }
            ]
        }
    ]
};
