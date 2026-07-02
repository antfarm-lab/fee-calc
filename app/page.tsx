"use client";

import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState("");

  const salePrice = Number(price) || 0;
  const fee = Math.floor(salePrice * 0.1);
  const netAmount = salePrice - fee;

  const reset = () => {
    setPrice("");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="mb-2 text-2xl font-bold">
          フリマ手数料計算ツール
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          販売価格から、手数料と手取り金額を計算します。
        </p>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="販売価格（例：3000）"
          className="w-full rounded border p-3"
        />

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">メルカリ手数料（10%）</p>
          <p className="text-2xl font-bold">{fee.toLocaleString()}円</p>

          <p className="mt-4 text-sm text-gray-600">手取り金額</p>
          <p className="text-3xl font-bold">
            {netAmount.toLocaleString()}円
          </p>
        </div>

        <button
          onClick={reset}
          className="mt-6 w-full rounded bg-black py-3 font-bold text-white"
        >
          リセット
        </button>
      </div>
      <section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      メルカリの販売手数料はいくら引かれる？
    </h2>
    <p>
      メルカリでは販売価格に対して手数料が差し引かれます。
      例えば販売価格が3000円の場合、手数料を引いたあとの金額を確認しないと、
      実際に手元に残る利益を正しく把握できません。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      販売価格10000円なら手数料はいくら？
    </h2>
    <p>
      販売価格が高くなるほど、差し引かれる手数料の金額も大きくなります。
      10000円の商品を販売する場合でも、
      手数料や送料を差し引いた後の利益を事前に確認することが大切です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      手数料を考えずに価格設定すると赤字になることもある
    </h2>
    <p>
      フリマ販売では、仕入れ値・送料・販売手数料をすべて含めて利益を考える必要があります。
      手数料を計算せずに値下げすると、
      売れても利益がほとんど残らない場合があります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. メルカリ以外の手数料計算にも使えますか？<br />
      A. はい。手数料率を入力できる場合、他サービスの目安計算にも使えます。<br /><br />

      Q. 送料込み販売の利益確認にも使えますか？<br />
      A. はい。送料や仕入れ値とあわせて利益確認に使えます。
    </p>
  </div>

</section>
      <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    販売手数料を事前に把握することが重要な理由
  </h2>

  <p className="mb-3">
    メルカリやラクマでは商品が売れると販売手数料が差し引かれます。
    表示価格そのままが利益になるわけではありません。
  </p>

  <p className="mb-3">
    手数料を考慮せずに価格設定すると、
    想定より利益が少なくなるケースがあります。
  </p>

  <p>
    この手数料計算ツールでは販売価格を入力するだけで
    自動で手数料を計算できます。
  </p>
</section>
     <section className="mt-10 rounded-xl border bg-white p-5">
 <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://calc-tools-mauve.vercel.app/">
      総合計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
  </li>
  <li>
    <a href="https://price-reverse-calc.vercel.app/">
      販売価格逆算ツール
    </a>
  </li>
  <li>
    <a href="https://profit-rate-calc.vercel.app/">
      利益率計算ツール
    </a>
  </li>
  <li>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
  </li>
  <li>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI計算ツール
    </a>
  </li>
  <li>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </li>
</ul>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシーS
  </a>
</footer>
    </main>
  );
}