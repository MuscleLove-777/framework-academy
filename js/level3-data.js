/* ============================================
   Level 3: 思考・問題解決フレームワーク
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "思考・問題解決フレームワーク",
    icon: "🧠",
    description: "MECE、ロジックツリー、デザインシンキングなど思考と問題解決の技法",
    modules: [
        /* ==================== Module 301 ==================== */
        {
            id: 301,
            title: "ロジカルシンキング（MECE・ロジックツリー・ピラミッドストラクチャー）",
            duration: "12分",
            content: `
<h2>ロジカルシンキングとは</h2>
<p>ロジカルシンキング（論理的思考）は、物事を体系的・構造的に整理し、筋道を立てて考える力です。ビジネスにおいて問題を正確に把握し、説得力のある提案を行うための基盤となるスキルです。</p>
<p>本モジュールでは、コンサルティングの現場で広く使われる3つの定番フレームワークを学びます。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 ロジカルシンキングの3大ツール</div>
    <p>ロジカルシンキングは「頭の良さ」ではなく「思考の技術」です。以下の3つのツールをマスターすることで、誰でも論理的に考え、伝えることができるようになります。</p>
    <ul>
        <li><strong>MECE</strong> — 情報を「漏れなくダブりなく」整理する原則</li>
        <li><strong>ロジックツリー</strong> — 問題をツリー状に分解して深掘りする手法</li>
        <li><strong>ピラミッドストラクチャー</strong> — 結論ファーストで論理を組み立てる構造</li>
    </ul>
</div>

<h2>1. MECEの原則</h2>
<p><strong>MECE</strong>（Mutually Exclusive, Collectively Exhaustive）は、マッキンゼーのバーバラ・ミントが提唱した情報整理の原則で、要素同士が「相互に排他的（重複しない）」かつ「全体として網羅的（漏れがない）」状態を指します。あらゆるビジネス分析の土台となる考え方です。</p>

<div class="visual-box">
    <div class="visual-box-title">MECEの4つの状態</div>
    <table>
        <thead>
            <tr>
                <th>状態</th>
                <th>説明</th>
                <th>例</th>
                <th>判定</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>MECE</strong></td>
                <td>漏れなし・ダブりなし</td>
                <td>男性 / 女性（生物学的分類）</td>
                <td>✅ 理想</td>
            </tr>
            <tr>
                <td><strong>漏れあり</strong></td>
                <td>一部がカバーされていない</td>
                <td>20代 / 30代 / 40代（50代以上が漏れ）</td>
                <td>❌ 不完全</td>
            </tr>
            <tr>
                <td><strong>ダブりあり</strong></td>
                <td>要素が重複している</td>
                <td>学生 / 社会人 / アルバイト（兼務で重複）</td>
                <td>❌ 冗長</td>
            </tr>
            <tr>
                <td><strong>漏れ＆ダブり</strong></td>
                <td>両方の問題あり</td>
                <td>営業部 / 技術職 / 新卒（軸が不統一）</td>
                <td>❌ 混乱</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>MECEの代表的な分類パターン</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>対立型（二項対立）</h4>
        <p>あるものと、そうでないものに二分する最もシンプルなパターン</p>
        <ul>
            <li>国内 / 海外</li>
            <li>既存顧客 / 新規顧客</li>
            <li>固定費 / 変動費</li>
            <li>オンライン / オフライン</li>
            <li>定量データ / 定性データ</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>プロセス型（時系列）</h4>
        <p>時間軸や手順で分けるパターン。流れを整理するのに有効</p>
        <ul>
            <li>企画 → 開発 → 製造 → 販売</li>
            <li>認知 → 検討 → 購入 → 利用</li>
            <li>短期 / 中期 / 長期</li>
            <li>導入期 → 成長期 → 成熟期 → 衰退期</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>因数分解型（要素分解）</h4>
        <p>全体を構成要素に分解するパターン。数値分析に特に有効</p>
        <ul>
            <li>売上 = 単価 × 数量</li>
            <li>利益 = 売上 − コスト</li>
            <li>コスト = 固定費 + 変動費</li>
            <li>人・モノ・金・情報</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>マトリクス型（2軸分類）</h4>
        <p>2軸で4象限に分けるパターン。優先順位付けに適する</p>
        <ul>
            <li>緊急度 × 重要度</li>
            <li>市場成長率 × シェア（BCG）</li>
            <li>影響度 × 発生確率</li>
            <li>難易度 × 効果</li>
        </ul>
    </div>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ MECE適用の注意点</div>
    <p>完璧なMECEにこだわりすぎると時間を浪費します。実務では<strong>「概ねMECE」</strong>で十分なことが多く、重要なのは<strong>致命的な漏れがないこと</strong>です。ダブりは多少許容し、まずは網羅性を優先しましょう。分類の「軸」を一つに統一することがMECEを崩さないコツです。</p>
</div>

<h2>2. ロジックツリー</h2>
<p>ロジックツリーは、あるテーマを頂点に置き、MECEに要素を分解していくことで問題の構造を可視化する手法です。目的に応じて3つのタイプを使い分けます。</p>

<div class="visual-box">
    <div class="visual-box-title">ロジックツリー3種（What / Why / How）の比較</div>
    <table>
        <thead>
            <tr>
                <th>種類</th>
                <th>別名</th>
                <th>目的</th>
                <th>問い</th>
                <th>使用場面</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Whatツリー</strong></td>
                <td>要素分解ツリー</td>
                <td>構成要素の洗い出し</td>
                <td>「何がある？」</td>
                <td>事業構造の把握、コスト構造分析</td>
            </tr>
            <tr>
                <td><strong>Whyツリー</strong></td>
                <td>原因究明ツリー</td>
                <td>原因の深掘り</td>
                <td>「なぜ？」</td>
                <td>問題の根本原因分析、不具合調査</td>
            </tr>
            <tr>
                <td><strong>Howツリー</strong></td>
                <td>問題解決ツリー</td>
                <td>解決策の具体化</td>
                <td>「どうする？」</td>
                <td>施策の洗い出し、アクションプラン策定</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Whyツリーの具体例：売上減少の原因分析</h3>
<div class="visual-box">
    <div class="visual-box-title">Whyツリー図解 — 「なぜ売上が減少しているか？」</div>
    <div style="text-align:center; padding:20px 0;">
        <div style="display:inline-block; background:var(--accent); color:#fff; padding:10px 28px; border-radius:8px; font-weight:bold; font-size:1.1rem;">売上が減少している</div>
        <div style="display:flex; justify-content:center; gap:40px; margin-top:18px; flex-wrap:wrap;">
            <div style="text-align:center;">
                <div style="width:2px; height:20px; background:var(--border); margin:0 auto;"></div>
                <div style="background:var(--bg-card); border:2px solid var(--accent); padding:8px 16px; border-radius:6px; font-weight:bold;">客数が減少</div>
                <div style="display:flex; gap:16px; margin-top:12px; justify-content:center;">
                    <div>
                        <div style="width:2px; height:14px; background:var(--border); margin:0 auto;"></div>
                        <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.85rem; border:1px solid var(--border);">新規客の減少</div>
                    </div>
                    <div>
                        <div style="width:2px; height:14px; background:var(--border); margin:0 auto;"></div>
                        <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.85rem; border:1px solid var(--border);">リピート率低下</div>
                    </div>
                </div>
            </div>
            <div style="text-align:center;">
                <div style="width:2px; height:20px; background:var(--border); margin:0 auto;"></div>
                <div style="background:var(--bg-card); border:2px solid var(--accent); padding:8px 16px; border-radius:6px; font-weight:bold;">客単価が低下</div>
                <div style="display:flex; gap:16px; margin-top:12px; justify-content:center;">
                    <div>
                        <div style="width:2px; height:14px; background:var(--border); margin:0 auto;"></div>
                        <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.85rem; border:1px solid var(--border);">購入点数の減少</div>
                    </div>
                    <div>
                        <div style="width:2px; height:14px; background:var(--border); margin:0 auto;"></div>
                        <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.85rem; border:1px solid var(--border);">商品単価の低下</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 ロジックツリー作成の4つのルール</div>
    <ol>
        <li><strong>各階層はMECE</strong>に分解する（漏れなくダブりなく）</li>
        <li><strong>分解は3〜5階層</strong>で十分（深すぎると実用性が下がる）</li>
        <li><strong>各ノードは2〜5個</strong>の子要素に分ける</li>
        <li>最下層は<strong>具体的なアクション</strong>に落とし込める粒度にする</li>
    </ol>
</div>

<h2>3. ピラミッドストラクチャー</h2>
<p>ピラミッドストラクチャーは、バーバラ・ミントが著書『考える技術・書く技術』で提唱した、<strong>結論を頂点に置き、根拠で支える</strong>論理構造です。プレゼンテーションや報告書の構成に最適な手法です。</p>

<div class="visual-box">
    <div class="visual-box-title">ピラミッドストラクチャーの構造</div>
    <div style="text-align:center; padding:20px 0;">
        <div style="display:inline-block; background:var(--accent); color:#fff; padding:12px 40px; border-radius:8px; font-weight:bold; font-size:1.1rem;">主張（結論）</div>
        <div style="margin-top:6px; font-size:0.8rem; color:var(--text-secondary);">So What?（だから何？）↑ ↓ Why So?（なぜ？）</div>
        <div style="display:flex; justify-content:center; gap:24px; margin-top:14px;">
            <div style="background:#e8f0fe; padding:10px 20px; border-radius:6px; font-weight:bold; border:2px solid var(--accent);">根拠①</div>
            <div style="background:#e8f0fe; padding:10px 20px; border-radius:6px; font-weight:bold; border:2px solid var(--accent);">根拠②</div>
            <div style="background:#e8f0fe; padding:10px 20px; border-radius:6px; font-weight:bold; border:2px solid var(--accent);">根拠③</div>
        </div>
        <div style="display:flex; justify-content:center; gap:8px; margin-top:14px; flex-wrap:wrap;">
            <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.82rem; border:1px solid var(--border);">事実A</div>
            <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.82rem; border:1px solid var(--border);">事実B</div>
            <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.82rem; border:1px solid var(--border);">事実C</div>
            <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.82rem; border:1px solid var(--border);">事実D</div>
            <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.82rem; border:1px solid var(--border);">事実E</div>
            <div style="background:#f0f4ff; padding:6px 12px; border-radius:4px; font-size:0.82rem; border:1px solid var(--border);">事実F</div>
        </div>
    </div>
</div>

<h3>2つの論理展開パターン</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>演繹的展開</h4>
        <p>一般的な前提から個別の結論を導く</p>
        <ul>
            <li>大前提 → 小前提 → 結論</li>
            <li>「市場は拡大している」→「当社は技術力がある」→「参入すべき」</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>帰納的展開</h4>
        <p>複数の事実から共通点を見出して結論を導く</p>
        <ul>
            <li>事実A + 事実B + 事実C → 結論</li>
            <li>「A地域で成功」+「B地域で成功」+「C地域で成功」→「全国展開すべき」</li>
        </ul>
    </div>
</div>

<h3>ピラミッドストラクチャーのチェックポイント</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h4>結論は1つに絞る</h4>
            <p>ピラミッドの頂点には、聞き手に伝えたいメッセージを<strong>1つだけ</strong>置きます。複数あると焦点がぼやけます。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h4>根拠は3つが理想</h4>
            <p>人が一度に理解しやすい情報量は3〜5個。根拠は<strong>3つ</strong>にまとめると説得力と分かりやすさが両立します。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h4>So What? / Why So? で検証</h4>
            <p>下から上に「だから何？」、上から下に「なぜそう言える？」と問いかけて、論理の飛躍がないか確認します。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <h4>同一階層はMECE</h4>
            <p>同じ階層にある要素同士は、互いに重複せず、全体として漏れがない状態にします。</p>
        </div>
    </div>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 実践のコツ</div>
    <p>ビジネスの現場では<strong>「結論ファースト」</strong>が鉄則です。報告・プレゼン・メール、全てにおいてまず結論を述べ、次に根拠を示しましょう。ピラミッドストラクチャーはそのための最強のツールです。日常のメール1通からでも練習を始められます。</p>
</div>
`,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "MECEの原則として正しい説明はどれですか？",
                    options: [
                        "要素同士が重複しており、全体として網羅的である状態",
                        "要素同士が重複せず、全体として網羅的である状態",
                        "要素同士が重複せず、一部のみをカバーしている状態",
                        "要素を可能な限り多く列挙し、後から整理する手法"
                    ],
                    answer: 1,
                    explanation: "MECEは Mutually Exclusive（相互に排他的＝重複しない）かつ Collectively Exhaustive（全体として網羅的＝漏れがない）の頭文字です。情報を漏れなくダブりなく整理する原則です。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "「なぜ売上が下がったのか？」という問いに対して使用するロジックツリーの種類はどれですか？",
                    options: [
                        "Whatツリー（要素分解ツリー）",
                        "Whyツリー（原因究明ツリー）",
                        "Howツリー（問題解決ツリー）",
                        "Whenツリー（時系列分解ツリー）"
                    ],
                    answer: 1,
                    explanation: "「なぜ？」という問いで原因を深掘りするのがWhyツリー（原因究明ツリー）です。Whatツリーは構成要素の洗い出し、Howツリーは解決策の具体化に使用します。Whenツリーという分類は一般的には存在しません。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "ピラミッドストラクチャーにおける「So What?」と「Why So?」の検証方法について正しい説明はどれですか？",
                    options: [
                        "「So What?」は上から下へ、「Why So?」は下から上へ問いかける",
                        "「So What?」は下から上へ、「Why So?」は上から下へ問いかける",
                        "両方とも上から下へ問いかけて論理を検証する",
                        "両方とも下から上へ問いかけて論理を検証する"
                    ],
                    answer: 1,
                    explanation: "「So What?（だから何？）」は下位の情報から上位の結論を導く検証（下→上）、「Why So?（なぜそう言える？）」は上位の主張を下位の根拠で支えられるか検証（上→下）します。この双方向チェックで論理の飛躍を防ぎます。"
                }
            ]
        },

        /* ==================== Module 302 ==================== */
        {
            id: 302,
            title: "クリティカルシンキング & システム思考",
            duration: "12分",
            content: `
<h2>クリティカルシンキングとは</h2>
<p>クリティカルシンキング（批判的思考）は、情報や主張を鵜呑みにせず、<strong>前提を疑い、証拠に基づいて論理的に判断する</strong>思考法です。「批判」という言葉がネガティブに聞こえますが、本質は「建設的に吟味する」ことにあります。</p>
<p>VUCA（変動性・不確実性・複雑性・曖昧性）の時代において、正確で客観的な判断力は最も求められるビジネススキルの一つです。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 ロジカルシンキングとの違い</div>
    <p><strong>ロジカルシンキング</strong>：与えられた前提のもとで論理的に考える（前提 → 結論）<br>
    <strong>クリティカルシンキング</strong>：前提そのものを疑い、隠れた仮定や偏りを検証する<br><br>
    両者は補完関係にあり、クリティカルシンキングは「正しい前提」を確認した上でロジカルに思考するための土台です。</p>
</div>

<h2>1. 思考のバイアス（認知バイアス）</h2>
<p>人間の思考には多くの「偏り（バイアス）」が潜んでいます。これらを認識することが、クリティカルシンキングの第一歩です。</p>

<div class="visual-box">
    <div class="visual-box-title">主要な認知バイアス一覧</div>
    <table>
        <thead>
            <tr>
                <th>バイアス名</th>
                <th>説明</th>
                <th>ビジネスでの例</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>確証バイアス</strong></td>
                <td>自分の信念を支持する情報ばかり集め、反証を無視する</td>
                <td>「この企画は成功する」と信じ、否定的なデータを軽視する</td>
            </tr>
            <tr>
                <td><strong>アンカリング効果</strong></td>
                <td>最初に提示された情報に判断が引きずられる</td>
                <td>最初に高い見積もりを見せられると、次の金額が安く感じる</td>
            </tr>
            <tr>
                <td><strong>サンクコスト効果</strong></td>
                <td>既に投下した回収不能なコストに引きずられて判断を誤る</td>
                <td>「もう3億投資したから」と失敗プロジェクトを続行する</td>
            </tr>
            <tr>
                <td><strong>ハロー効果</strong></td>
                <td>一つの際立った特徴が全体の評価に影響する</td>
                <td>有名大学出身というだけで全体的に高評価する</td>
            </tr>
            <tr>
                <td><strong>生存者バイアス</strong></td>
                <td>成功例だけを見て失敗例を無視する</td>
                <td>成功した起業家の話だけを聞いて「起業は簡単」と考える</td>
            </tr>
            <tr>
                <td><strong>バンドワゴン効果</strong></td>
                <td>多数派の意見に同調してしまう</td>
                <td>「みんながやっている」という理由だけで施策を採用する</td>
            </tr>
            <tr>
                <td><strong>フレーミング効果</strong></td>
                <td>同じ内容でも表現方法によって判断が変わる</td>
                <td>「成功率90%」と「失敗率10%」で印象が異なる</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>2. クリティカルシンキングのステップ</h2>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h4>主張を明確にする</h4>
            <p>「結局何を主張しているのか？」を正確に把握します。曖昧な表現を具体的な命題に言い換えましょう。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h4>前提を特定する</h4>
            <p>主張の背後にある<strong>暗黙の前提</strong>を洗い出します。「これが正しいとしたら、何を前提にしている？」と問いかけます。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h4>証拠を検証する</h4>
            <p>根拠として示されたデータや事例は信頼できるか？サンプルサイズは十分か？因果関係と相関関係を混同していないか？を確認します。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <h4>代替仮説を検討する</h4>
            <p>別の説明ができないかを考えます。「反対の立場ならどう考えるか？」「他にどんな解釈が可能か？」と多角的に検討します。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
            <h4>結論を導く</h4>
            <p>以上のステップを経て、証拠に裏付けされた合理的な結論を導きます。「確からしさの度合い」も意識しましょう。</p>
        </div>
    </div>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ よくある論理の誤り（論理的誤謬）</div>
    <ul>
        <li><strong>相関と因果の混同</strong>：「アイスの売上と溺水事故が同時に増える → アイスが溺水の原因」（実際は気温が共通原因）</li>
        <li><strong>早まった一般化</strong>：少数の事例から全体を断定する</li>
        <li><strong>権威への盲従</strong>：「有名人が言っているから正しい」</li>
        <li><strong>偽のジレンマ</strong>：2択に見せかけて他の選択肢を排除する（「やるかやらないか、二つに一つだ」）</li>
        <li><strong>藁人形論法</strong>：相手の主張を歪めて反論しやすくする</li>
    </ul>
</div>

<h2>3. システム思考</h2>
<p>システム思考は、問題を<strong>個別の要素ではなく、要素間の相互関係と全体構造</strong>で捉える思考法です。ピーター・センゲが著書『学習する組織』で広めました。</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>線形思考（従来型）</h4>
        <p>原因 → 結果を一直線に考える</p>
        <ul>
            <li>A → B → C</li>
            <li>単純な因果関係で理解</li>
            <li>部分最適に陥りやすい</li>
            <li>短期的な対処療法になりがち</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>システム思考</h4>
        <p>要素間の循環的な関係を捉える</p>
        <ul>
            <li>A ⇄ B ⇄ C ⇄ A</li>
            <li>フィードバックループで理解</li>
            <li>全体最適を目指す</li>
            <li>構造的・根本的な解決を志向</li>
        </ul>
    </div>
</div>

<h3>因果ループ図</h3>
<p>因果ループ図は、要素間の因果関係を矢印で結び、フィードバック構造を可視化する図です。</p>

<div class="visual-box">
    <div class="visual-box-title">因果ループ図：2つのループ型</div>
    <div class="compare-grid">
        <div class="compare-card">
            <h4>自己強化型ループ（R）</h4>
            <p>変化が同じ方向にさらなる変化を生む「好循環 / 悪循環」のループ</p>
            <div style="text-align:center; padding:10px;">
                <div style="font-size:0.9rem; margin-bottom:8px;">
                    売上増加 → <span style="color:#059669">（+）</span> → 広告投資増加<br>
                    ↑ <span style="color:#059669">（+）</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ <span style="color:#059669">（+）</span><br>
                    認知度向上 ← <span style="color:#059669">（+）</span> ← 顧客数増加
                </div>
            </div>
            <p style="font-size:0.85rem; color:var(--text-secondary);">全て正の関係（+）で結ばれ、成長が成長を呼ぶ構造</p>
        </div>
        <div class="compare-card">
            <h4>バランス型ループ（B）</h4>
            <p>変化を抑制し均衡へ向かう「安定化」のループ</p>
            <div style="text-align:center; padding:10px;">
                <div style="font-size:0.9rem; margin-bottom:8px;">
                    在庫過多 → <span style="color:#059669">（+）</span> → 発注抑制<br>
                    ↑ <span style="color:#dc2626">（−）</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ <span style="color:#059669">（+）</span><br>
                    在庫量 ← <span style="color:#dc2626">（−）</span> ← 在庫減少
                </div>
            </div>
            <p style="font-size:0.85rem; color:var(--text-secondary);">負の関係（-）が含まれ、変化を元に戻す方向に作用</p>
        </div>
    </div>
</div>

<h3>氷山モデル</h3>
<p>氷山モデルは、目に見える「出来事」の下に潜む構造的な要因を4段階で把握するフレームワークです。表面的な対処ではなく、根本原因へのアプローチを促します。</p>

<div class="visual-box">
    <div class="visual-box-title">氷山モデルの4層構造</div>
    <div style="text-align:center; padding:20px 0;">
        <div style="max-width:500px; margin:0 auto;">
            <div style="background:linear-gradient(135deg, #3b82f6, #2563eb); color:#fff; padding:14px; border-radius:8px 8px 0 0; font-weight:bold;">
                🔍 出来事（Events）<br><span style="font-size:0.8rem; font-weight:normal;">「何が起きた？」— 表面に見える現象</span>
            </div>
            <div style="background:linear-gradient(135deg, #60a5fa, #3b82f6); color:#fff; padding:14px; font-weight:bold;">
                📈 パターン（Patterns）<br><span style="font-size:0.8rem; font-weight:normal;">「繰り返されている傾向は？」— 時系列で見えるトレンド</span>
            </div>
            <div style="background:linear-gradient(135deg, #1e40af, #1d4ed8); color:#fff; padding:14px; font-weight:bold;">
                ⚙️ 構造（Structures）<br><span style="font-size:0.8rem; font-weight:normal;">「何がパターンを生んでいる？」— 制度・仕組み・関係性</span>
            </div>
            <div style="background:linear-gradient(135deg, #1e3a5f, #1e40af); color:#fff; padding:14px; border-radius:0 0 8px 8px; font-weight:bold;">
                💭 メンタルモデル（Mental Models）<br><span style="font-size:0.8rem; font-weight:normal;">「どんな思い込みが構造を維持？」— 価値観・信念・前提</span>
            </div>
        </div>
    </div>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 氷山モデルの活用例</div>
    <p><strong>出来事</strong>：若手社員の離職が増えた<br>
    <strong>パターン</strong>：入社2年目に集中して退職している<br>
    <strong>構造</strong>：メンター制度がなく、成長実感を得にくい評価制度<br>
    <strong>メンタルモデル</strong>：「若手は放置しても育つ」「辞めるのは根性がないから」という経営層の信念<br><br>
    表面の出来事だけに対処しても、根本的な解決にはなりません。氷山の下層にアプローチすることが重要です。</p>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 システム思考を実践するポイント</div>
    <ul>
        <li>個別の事象ではなく<strong>関係性</strong>に注目する</li>
        <li><strong>時間軸</strong>を意識する（遅延効果に注意）</li>
        <li><strong>境界</strong>を広げて考える（部分最適 vs 全体最適）</li>
        <li>意図せぬ<strong>副作用</strong>を予測する</li>
        <li>フィードバック・ループを探す</li>
    </ul>
</div>
`,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "「既に3億円投資したプロジェクトだから中止できない」という判断に影響しているバイアスはどれですか？",
                    options: [
                        "確証バイアス",
                        "アンカリング効果",
                        "サンクコスト効果",
                        "ハロー効果"
                    ],
                    answer: 2,
                    explanation: "サンクコスト効果（埋没費用効果）は、既に投下した回収不能なコストに引きずられて合理的な判断ができなくなるバイアスです。本来、過去の投資額は今後の意思決定に影響させるべきではありません。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "システム思考の因果ループ図で、変化が同じ方向にさらなる変化を生む「好循環・悪循環」のループを何と呼びますか？",
                    options: [
                        "バランス型ループ（B）",
                        "自己強化型ループ（R）",
                        "線形型ループ（L）",
                        "収束型ループ（C）"
                    ],
                    answer: 1,
                    explanation: "自己強化型ループ（Reinforcing Loop / Rループ）は、変化が同じ方向に加速する正のフィードバック構造です。好循環にも悪循環にもなり得ます。バランス型ループ（B）は変化を抑制し均衡へ向かうループです。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "氷山モデルの4層構造で、最も深層にあるものはどれですか？",
                    options: [
                        "出来事（Events）",
                        "パターン（Patterns）",
                        "構造（Structures）",
                        "メンタルモデル（Mental Models）"
                    ],
                    answer: 3,
                    explanation: "氷山モデルは上から「出来事 → パターン → 構造 → メンタルモデル」の4層で構成されます。最も深層にあるメンタルモデル（価値観・信念・前提）が構造を支え、構造がパターンを生み、パターンが個別の出来事として表出します。"
                }
            ]
        },

        /* ==================== Module 303 ==================== */
        {
            id: 303,
            title: "デザインシンキング & アート思考",
            duration: "10分",
            content: `
<h2>デザインシンキングとは</h2>
<p>デザインシンキング（Design Thinking）は、デザイナーの思考プロセスをビジネスの課題解決に応用するアプローチです。スタンフォード大学d.schoolやIDEO社が体系化し、世界中の企業で採用されています。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 デザインシンキングの本質</div>
    <p>従来のアプローチが「技術起点」や「ビジネス起点」であるのに対し、デザインシンキングは<strong>「人間（ユーザー）起点」</strong>で問題を捉えます。「本当に困っていることは何か？」を深く理解し、創造的に解決策を生み出します。不確実性の高い問題に特に有効です。</p>
</div>

<h2>デザインシンキング 5ステップ</h2>

<div class="visual-box">
    <div class="visual-box-title">デザインシンキング 5ステップ図解</div>
    <div style="display:flex; gap:4px; flex-wrap:wrap; justify-content:center; padding:20px 0;">
        <div style="flex:1; min-width:140px; text-align:center; background:linear-gradient(135deg, #e74c3c, #c0392b); color:#fff; padding:16px 8px; border-radius:8px;">
            <div style="font-size:1.8rem;">🤝</div>
            <div style="font-weight:bold; margin:6px 0;">共感</div>
            <div style="font-size:0.75rem;">Empathize</div>
        </div>
        <div style="flex:1; min-width:140px; text-align:center; background:linear-gradient(135deg, #e67e22, #d35400); color:#fff; padding:16px 8px; border-radius:8px;">
            <div style="font-size:1.8rem;">🎯</div>
            <div style="font-weight:bold; margin:6px 0;">定義</div>
            <div style="font-size:0.75rem;">Define</div>
        </div>
        <div style="flex:1; min-width:140px; text-align:center; background:linear-gradient(135deg, #f1c40f, #f39c12); color:#fff; padding:16px 8px; border-radius:8px;">
            <div style="font-size:1.8rem;">💡</div>
            <div style="font-weight:bold; margin:6px 0;">創造</div>
            <div style="font-size:0.75rem;">Ideate</div>
        </div>
        <div style="flex:1; min-width:140px; text-align:center; background:linear-gradient(135deg, #2ecc71, #27ae60); color:#fff; padding:16px 8px; border-radius:8px;">
            <div style="font-size:1.8rem;">🔨</div>
            <div style="font-weight:bold; margin:6px 0;">試作</div>
            <div style="font-size:0.75rem;">Prototype</div>
        </div>
        <div style="flex:1; min-width:140px; text-align:center; background:linear-gradient(135deg, #3498db, #2980b9); color:#fff; padding:16px 8px; border-radius:8px;">
            <div style="font-size:1.8rem;">✅</div>
            <div style="font-weight:bold; margin:6px 0;">検証</div>
            <div style="font-size:0.75rem;">Test</div>
        </div>
    </div>
</div>

<h3>各ステップの詳細と手法</h3>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h4>共感（Empathize）</h4>
            <p>ユーザーの立場に立ち、真のニーズや課題を理解するフェーズです。</p>
            <table>
                <thead>
                    <tr>
                        <th>手法</th>
                        <th>内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>インタビュー</strong></td><td>ユーザーに直接話を聞き、行動の背景にある感情や動機を探る</td></tr>
                    <tr><td><strong>観察（エスノグラフィー）</strong></td><td>ユーザーの行動を現場で観察し、本人も気づかない課題を発見</td></tr>
                    <tr><td><strong>体験</strong></td><td>自分自身がユーザーの立場を体験し、課題を身体的に理解する</td></tr>
                    <tr><td><strong>共感マップ</strong></td><td>ユーザーが「見る・聞く・考える・感じる・言う・行う」を整理</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h4>定義（Define）</h4>
            <p>共感フェーズで得た情報を整理し、解決すべき問題を<strong>「POV（Point of View）文」</strong>として明文化します。</p>
            <div class="info-box formula">
                <div class="info-box-title">📐 POV文のテンプレート</div>
                <p><strong>[ユーザー]</strong> は <strong>[ニーズ]</strong> を必要としている。なぜなら <strong>[インサイト]</strong> だからだ。</p>
                <p style="font-size:0.85rem; margin-top:8px;">例：「忙しい共働きの親は、栄養バランスの良い夕食を15分以内に作れる方法を必要としている。なぜなら、子どもの健康を大切にしつつも、仕事後の体力的・時間的余裕がないからだ。」</p>
            </div>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h4>創造（Ideate）</h4>
            <p>定義した問題に対して、<strong>量を重視して</strong>多くのアイデアを発散的に生み出すフェーズです。</p>
            <ul>
                <li><strong>ブレインストーミング</strong>：批判禁止・自由奔放・質より量・結合改善の4原則</li>
                <li><strong>SCAMPER法</strong>：代用・結合・適応・修正・転用・除去・逆転の7視点</li>
                <li><strong>How Might We（HMW）</strong>：「どうすれば〜できるだろうか？」で問いを立てる</li>
                <li><strong>マインドマップ</strong>：中心テーマから放射状にアイデアを展開</li>
            </ul>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <h4>試作（Prototype）</h4>
            <p>アイデアを<strong>素早く・安く・形にする</strong>フェーズです。完璧を求めず、検証に必要最低限のものを作ります。</p>
            <ul>
                <li><strong>ペーパープロトタイプ</strong>：紙とペンでUIを描く</li>
                <li><strong>ストーリーボード</strong>：ユーザー体験をコマ割りで描く</li>
                <li><strong>モックアップ</strong>：見た目だけ再現した模型</li>
                <li><strong>MVP（Minimum Viable Product）</strong>：最低限の機能を持つ実用品</li>
            </ul>
        </div>
    </div>
    <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
            <h4>検証（Test）</h4>
            <p>プロトタイプをユーザーに使ってもらい、フィードバックを得るフェーズです。結果次第で前のステップに戻ります。</p>
            <ul>
                <li>ユーザーテスト（思考発話法）</li>
                <li>A/Bテスト</li>
                <li>フィードバックグリッド（良い点・改善点・疑問・アイデア）</li>
            </ul>
        </div>
    </div>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ デザインシンキングの注意点</div>
    <p>5ステップは<strong>直線的に進むものではありません</strong>。検証の結果、共感フェーズに戻ることもあります。反復（イテレーション）を重ねることで、より良い解決策に近づきます。「早く失敗して、早く学ぶ」の精神が大切です。</p>
</div>

<h2>アート思考との比較</h2>
<p>近年注目されている「アート思考」は、アーティストの創作プロセスに学ぶ思考法です。デザインシンキングとは起点や目的が異なります。</p>

<div class="visual-box">
    <div class="visual-box-title">デザインシンキング vs アート思考 — 詳細比較</div>
    <table>
        <thead>
            <tr>
                <th>項目</th>
                <th>デザインシンキング</th>
                <th>アート思考</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>起点</strong></td>
                <td>ユーザーのニーズ（外発的）</td>
                <td>自分の内なる衝動・違和感（内発的）</td>
            </tr>
            <tr>
                <td><strong>目的</strong></td>
                <td>ユーザーの課題を解決する</td>
                <td>新しい問い・価値観を生み出す</td>
            </tr>
            <tr>
                <td><strong>プロセス</strong></td>
                <td>共感 → 定義 → 創造 → 試作 → 検証</td>
                <td>違和感 → 探究 → 表現 → 対話</td>
            </tr>
            <tr>
                <td><strong>評価基準</strong></td>
                <td>ユーザーの満足度・課題解決度</td>
                <td>独自性・問いの深さ・世界観</td>
            </tr>
            <tr>
                <td><strong>向いている場面</strong></td>
                <td>既存市場の改善、顧客体験向上</td>
                <td>新市場の創造、ビジョン策定、ブランディング</td>
            </tr>
            <tr>
                <td><strong>代表的な例</strong></td>
                <td>Airbnb（ユーザー体験の改善）</td>
                <td>iPhone（スマホという概念の創造）</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="compare-grid">
    <div class="compare-card">
        <h4>デザインシンキングが適するケース</h4>
        <ul>
            <li>顧客の不満や課題が明確にある</li>
            <li>既存製品・サービスのUX改善</li>
            <li>チームで共創したい場合</li>
            <li>短期間で成果を出したい場合</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>アート思考が適するケース</h4>
        <ul>
            <li>まだ誰も気づいていない問いを立てたい</li>
            <li>長期的なビジョン・世界観の策定</li>
            <li>破壊的イノベーションを目指す</li>
            <li>組織の固定観念を打破したい</li>
        </ul>
    </div>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 使い分けのポイント</div>
    <p>デザインシンキングとアート思考は対立するものではなく、<strong>補完関係</strong>にあります。アート思考で「問い」を生み出し、デザインシンキングで「解決策」を形にする、というハイブリッドアプローチが最も強力です。両者を状況に応じて使い分けましょう。</p>
</div>
`,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "デザインシンキングの5ステップの正しい順序はどれですか？",
                    options: [
                        "定義 → 共感 → 創造 → 検証 → 試作",
                        "共感 → 定義 → 創造 → 試作 → 検証",
                        "創造 → 定義 → 共感 → 試作 → 検証",
                        "共感 → 創造 → 定義 → 検証 → 試作"
                    ],
                    answer: 1,
                    explanation: "デザインシンキングの5ステップは「共感（Empathize）→ 定義（Define）→ 創造（Ideate）→ 試作（Prototype）→ 検証（Test）」の順序です。まずユーザーに共感し、課題を定義してからアイデアを出し、プロトタイプを作って検証します。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "デザインシンキングの「定義」フェーズで作成する、ユーザーのニーズとインサイトをまとめた文を何と呼びますか？",
                    options: [
                        "ミッション・ステートメント",
                        "バリュー・プロポジション",
                        "POV（Point of View）文",
                        "エレベーターピッチ"
                    ],
                    answer: 2,
                    explanation: "POV（Point of View）文は「[ユーザー]は[ニーズ]を必要としている。なぜなら[インサイト]だからだ」というテンプレートで、解決すべき問題を明文化するものです。定義フェーズの成果物として重要です。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "デザインシンキングとアート思考の違いとして正しいものはどれですか？",
                    options: [
                        "デザインシンキングは内発的動機から始まり、アート思考はユーザーニーズから始まる",
                        "デザインシンキングはユーザーニーズから始まり、アート思考は自分の内なる衝動から始まる",
                        "デザインシンキングは独自性を重視し、アート思考は課題解決を重視する",
                        "デザインシンキングは長期ビジョン策定に適し、アート思考は短期の改善に適する"
                    ],
                    answer: 1,
                    explanation: "デザインシンキングはユーザーのニーズ（外発的）を起点に課題を解決するアプローチであり、アート思考は自分の内なる衝動や違和感（内発的）を起点に新しい問いや価値観を生み出すアプローチです。"
                }
            ]
        },

        /* ==================== Module 304 ==================== */
        {
            id: 304,
            title: "意思決定フレームワーク",
            duration: "10分",
            content: `
<h2>意思決定フレームワークとは</h2>
<p>ビジネスでは日々、大小さまざまな意思決定が求められます。直感だけに頼らず、<strong>構造的かつ合理的に判断するための道具</strong>が意思決定フレームワークです。本モジュールでは代表的な4つの手法を学びます。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 なぜフレームワークが必要か</div>
    <p>人間は認知バイアス（Module 302参照）の影響で、しばしば非合理な判断を下します。フレームワークを使うことで：</p>
    <ul>
        <li>判断基準を<strong>明確化・可視化</strong>できる</li>
        <li>チーム内で<strong>共通言語</strong>として議論できる</li>
        <li>感情に流されず<strong>客観的</strong>に評価できる</li>
        <li>後から<strong>振り返り・検証</strong>ができる</li>
    </ul>
</div>

<h2>1. プロコン分析（Pros and Cons）</h2>
<p>最もシンプルな意思決定手法です。ある選択肢について<strong>メリット（Pros）とデメリット（Cons）</strong>を書き出して比較します。ベンジャミン・フランクリンも愛用していたとされる古典的手法です。</p>

<div class="visual-box">
    <div class="visual-box-title">プロコン分析の例：リモートワーク全面導入の是非</div>
    <table>
        <thead>
            <tr>
                <th style="width:50%;">Pros（メリット）</th>
                <th style="width:50%;">Cons（デメリット）</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>✅ 通勤時間の削減で生産性向上</td>
                <td>❌ 対面コミュニケーションの減少</td>
            </tr>
            <tr>
                <td>✅ オフィスコストの削減</td>
                <td>❌ セキュリティリスクの増加</td>
            </tr>
            <tr>
                <td>✅ 採用地域の拡大（全国対応）</td>
                <td>❌ 新人教育・OJTの難しさ</td>
            </tr>
            <tr>
                <td>✅ ワークライフバランスの改善</td>
                <td>❌ チームの一体感の低下</td>
            </tr>
            <tr>
                <td>✅ BCP（事業継続計画）の強化</td>
                <td>❌ 労務管理の複雑化</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ プロコン分析の限界</div>
    <p>プロコン分析は手軽ですが、各項目の<strong>重要度が同等に扱われる</strong>という弱点があります。致命的なデメリット1つと小さなメリット5つを単純に数で比較してはいけません。重要度の重み付けが必要な場合は、後述する意思決定マトリクスを使いましょう。</p>
</div>

<h2>2. ペイオフマトリクス</h2>
<p>ペイオフマトリクスは、複数のアイデアや施策を<strong>「効果」と「実現容易性」</strong>の2軸で4象限に分類し、優先順位を決める手法です。チームでの施策選定に特に効果的です。</p>

<div class="visual-box">
    <div class="visual-box-title">ペイオフマトリクス図解</div>
    <div style="max-width:500px; margin:0 auto; padding:20px 0;">
        <div style="text-align:center; font-weight:bold; margin-bottom:8px; font-size:0.9rem;">効果（高い）↑</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;">
            <div style="background:linear-gradient(135deg, #fbbf24, #f59e0b); color:#000; padding:20px; border-radius:8px 0 0 0; text-align:center;">
                <div style="font-weight:bold; font-size:1rem;">🤔 要検討</div>
                <div style="font-size:0.8rem; margin-top:6px;">効果は高いが実現が難しい<br><strong>→ 計画的に推進</strong></div>
            </div>
            <div style="background:linear-gradient(135deg, #34d399, #10b981); color:#000; padding:20px; border-radius:0 8px 0 0; text-align:center;">
                <div style="font-weight:bold; font-size:1rem;">🏆 最優先</div>
                <div style="font-size:0.8rem; margin-top:6px;">効果が高く実現も容易<br><strong>→ 今すぐ実行！</strong></div>
            </div>
            <div style="background:linear-gradient(135deg, #f87171, #ef4444); color:#fff; padding:20px; border-radius:0 0 0 8px; text-align:center;">
                <div style="font-weight:bold; font-size:1rem;">✋ 見送り</div>
                <div style="font-size:0.8rem; margin-top:6px;">効果が低く実現も難しい<br><strong>→ 優先度最低</strong></div>
            </div>
            <div style="background:linear-gradient(135deg, #60a5fa, #3b82f6); color:#fff; padding:20px; border-radius:0 0 8px 0; text-align:center;">
                <div style="font-weight:bold; font-size:1rem;">⚡ 即実行</div>
                <div style="font-size:0.8rem; margin-top:6px;">効果は中程度だが容易<br><strong>→ 小さな成功を積む</strong></div>
            </div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.85rem;">
            <span>実現容易性（低い）←</span>
            <span>→ 実現容易性（高い）</span>
        </div>
    </div>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 ペイオフマトリクスの使い方</div>
    <ol>
        <li>ブレストなどで出たアイデアを付箋に書き出す</li>
        <li>横軸に「実現容易性（コスト・時間・リソース）」、縦軸に「期待される効果」を設定</li>
        <li>チームで議論しながら各アイデアをマトリクスに配置</li>
        <li>右上の「最優先」象限から着手し、順に検討する</li>
    </ol>
</div>

<h2>3. ディシジョンツリー（決定木）</h2>
<p>ディシジョンツリーは、複数の選択肢と不確実な結果を<strong>ツリー状に展開し、期待値を計算</strong>して最適な選択を導く手法です。不確実性を伴う投資判断に特に有効です。</p>

<div class="visual-box">
    <div class="visual-box-title">ディシジョンツリーの構造と記号</div>
    <table>
        <thead>
            <tr>
                <th>記号</th>
                <th>名称</th>
                <th>意味</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="font-size:1.4rem;">□</td>
                <td><strong>決定ノード</strong></td>
                <td>意思決定者が選択できるポイント（コントロール可能）</td>
            </tr>
            <tr>
                <td style="font-size:1.4rem;">○</td>
                <td><strong>確率ノード</strong></td>
                <td>不確実な結果が分岐するポイント（コントロール不可能）</td>
            </tr>
            <tr>
                <td style="font-size:1.4rem;">△</td>
                <td><strong>結果ノード</strong></td>
                <td>最終的な結果（金額・利益など）</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>ディシジョンツリーの例：新製品の発売判断</h3>
<div class="visual-box">
    <div class="visual-box-title">期待値による意思決定</div>
    <div style="padding:16px;">
        <div style="background:var(--bg-card); border:2px solid var(--accent); border-radius:8px; padding:16px; margin-bottom:12px;">
            <strong>□ 意思決定：新製品を発売するか？</strong>
        </div>
        <div style="display:flex; gap:20px; flex-wrap:wrap;">
            <div style="flex:1; min-width:250px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; padding:16px;">
                <strong style="color:#2e7d32;">選択肢A：発売する</strong><br>
                <div style="margin-top:10px; font-size:0.9rem;">
                    ○ 成功（確率60%）→ 利益 +5,000万円<br>
                    ○ 失敗（確率40%）→ 損失 -2,000万円<br><br>
                    <strong>期待値 = 0.6 × 5,000 + 0.4 × (-2,000)</strong><br>
                    <strong style="color:#2e7d32;">= 3,000 - 800 = +2,200万円</strong>
                </div>
            </div>
            <div style="flex:1; min-width:250px; background:#fff3e0; border:1px solid #ff9800; border-radius:8px; padding:16px;">
                <strong style="color:#e65100;">選択肢B：発売しない</strong><br>
                <div style="margin-top:10px; font-size:0.9rem;">
                    結果 → 利益 0円（現状維持）<br><br>
                    <strong>期待値 = 0円</strong>
                </div>
            </div>
        </div>
        <div style="background:var(--accent); color:#fff; padding:12px 20px; border-radius:8px; margin-top:16px; text-align:center;">
            <strong>結論：期待値 +2,200万円の選択肢Aが合理的 → 発売すべき</strong>
        </div>
    </div>
</div>

<h2>4. 意思決定マトリクス（加重スコアリング）</h2>
<p>意思決定マトリクスは、複数の選択肢を<strong>複数の評価基準で採点</strong>し、各基準に<strong>重み（ウェイト）</strong>をつけて合計スコアを算出する手法です。最も体系的な意思決定ツールの一つです。</p>

<div class="visual-box">
    <div class="visual-box-title">意思決定マトリクスの例：オフィス移転先の選定</div>
    <table>
        <thead>
            <tr>
                <th>評価基準</th>
                <th>重み</th>
                <th>物件A（点数）</th>
                <th>物件A（加重）</th>
                <th>物件B（点数）</th>
                <th>物件B（加重）</th>
                <th>物件C（点数）</th>
                <th>物件C（加重）</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>立地・アクセス</strong></td>
                <td>30%</td>
                <td>4</td>
                <td>1.2</td>
                <td>5</td>
                <td>1.5</td>
                <td>3</td>
                <td>0.9</td>
            </tr>
            <tr>
                <td><strong>賃料</strong></td>
                <td>25%</td>
                <td>3</td>
                <td>0.75</td>
                <td>2</td>
                <td>0.5</td>
                <td>5</td>
                <td>1.25</td>
            </tr>
            <tr>
                <td><strong>広さ・設備</strong></td>
                <td>20%</td>
                <td>4</td>
                <td>0.8</td>
                <td>4</td>
                <td>0.8</td>
                <td>4</td>
                <td>0.8</td>
            </tr>
            <tr>
                <td><strong>拡張性</strong></td>
                <td>15%</td>
                <td>2</td>
                <td>0.3</td>
                <td>3</td>
                <td>0.45</td>
                <td>5</td>
                <td>0.75</td>
            </tr>
            <tr>
                <td><strong>ブランドイメージ</strong></td>
                <td>10%</td>
                <td>5</td>
                <td>0.5</td>
                <td>4</td>
                <td>0.4</td>
                <td>2</td>
                <td>0.2</td>
            </tr>
            <tr style="font-weight:bold; background:var(--bg-card);">
                <td><strong>合計</strong></td>
                <td>100%</td>
                <td>—</td>
                <td><strong>3.55</strong></td>
                <td>—</td>
                <td><strong>3.65</strong></td>
                <td>—</td>
                <td><strong>3.90</strong></td>
            </tr>
        </tbody>
    </table>
    <p style="text-align:center; margin-top:10px; font-size:0.9rem;">→ 加重スコアが最も高い<strong>物件C（3.90点）</strong>が最適と判断</p>
</div>

<h3>意思決定マトリクスの作成手順</h3>
<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h4>評価基準を決める</h4>
            <p>意思決定に関わる重要な基準をMECEに洗い出します。一般的に5〜8項目が適切です。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h4>重み（ウェイト）を設定</h4>
            <p>各基準の重要度を百分率で配分します。合計100%になるようにします。チームで合意を取ることが重要です。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h4>各選択肢をスコアリング</h4>
            <p>各評価基準について、選択肢ごとに1〜5点で採点します。できるだけ客観的な根拠に基づいて評価しましょう。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
            <h4>加重スコアを計算・比較</h4>
            <p>「点数 x 重み」の加重スコアを算出し、合計値で選択肢を比較します。最も高いスコアの選択肢が合理的な判断です。</p>
        </div>
    </div>
</div>

<h3>4つのフレームワークの使い分け</h3>

<div class="visual-box">
    <div class="visual-box-title">意思決定フレームワーク比較表</div>
    <table>
        <thead>
            <tr>
                <th>フレームワーク</th>
                <th>複雑さ</th>
                <th>適する場面</th>
                <th>利点</th>
                <th>弱点</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>プロコン分析</strong></td>
                <td>低</td>
                <td>二者択一のシンプルな判断</td>
                <td>簡単・直感的</td>
                <td>重要度の差が反映されない</td>
            </tr>
            <tr>
                <td><strong>ペイオフマトリクス</strong></td>
                <td>低〜中</td>
                <td>施策の優先順位付け</td>
                <td>視覚的・チーム議論に最適</td>
                <td>2軸に限定される</td>
            </tr>
            <tr>
                <td><strong>ディシジョンツリー</strong></td>
                <td>中〜高</td>
                <td>不確実性を伴う判断</td>
                <td>確率と期待値で定量評価</td>
                <td>確率の推定が主観的になりがち</td>
            </tr>
            <tr>
                <td><strong>意思決定マトリクス</strong></td>
                <td>中</td>
                <td>複数選択肢を多基準で比較</td>
                <td>体系的・公平・透明性が高い</td>
                <td>重みの設定に主観が入る</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 実践のコツ</div>
    <p>意思決定フレームワークは「正解を出す道具」ではなく、<strong>「判断のプロセスを透明化する道具」</strong>です。最終的な判断には定量的な分析に加えて、経験や直感、ステークホルダーの感情なども考慮する必要があります。フレームワークの結果は議論のたたき台として活用し、複数の手法を段階的に組み合わせることで、より精度の高い意思決定が可能になります。</p>
</div>
`,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "ペイオフマトリクスで「最優先で取り組むべき」とされるのは、どの象限に位置する施策ですか？",
                    options: [
                        "効果が高く、実現容易性が低い施策",
                        "効果が低く、実現容易性が高い施策",
                        "効果が高く、実現容易性が高い施策",
                        "効果が低く、実現容易性が低い施策"
                    ],
                    answer: 2,
                    explanation: "ペイオフマトリクスでは、効果が高く実現容易性も高い施策（右上の象限）が「最優先」です。コストや労力が少なく大きな効果が期待できるため、真っ先に着手すべきです。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "ディシジョンツリーにおいて、意思決定者が選択できるポイントを表す記号はどれですか？",
                    options: [
                        "○（確率ノード）",
                        "□（決定ノード）",
                        "△（結果ノード）",
                        "◇（判断ノード）"
                    ],
                    answer: 1,
                    explanation: "ディシジョンツリーでは、□（四角）が決定ノード（意思決定者が選択できるポイント）、○（丸）が確率ノード（不確実な結果が分岐するポイント）、△（三角）が結果ノード（最終的な結果）を表します。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "意思決定マトリクス（加重スコアリング）の手順として正しいものはどれですか？",
                    options: [
                        "選択肢を決定 → スコアリング → 評価基準を決定 → 重みの設定",
                        "評価基準を決定 → 重みの設定 → スコアリング → 加重スコアの算出",
                        "重みの設定 → 評価基準を決定 → 加重スコアの算出 → スコアリング",
                        "スコアリング → 加重スコアの算出 → 評価基準を決定 → 重みの設定"
                    ],
                    answer: 1,
                    explanation: "意思決定マトリクスの正しい手順は「評価基準を決定 → 重み（ウェイト）を設定 → 各選択肢をスコアリング → 加重スコアを算出して比較」です。まず基準と重みを定めてからスコアリングすることで、客観的な評価が可能になります。"
                }
            ]
        }
    ]
};
