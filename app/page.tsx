"use client";

import { useState } from "react";

export default function Home() {
  
const [price, setPrice] = useState("");
const [feeRate, setFeeRate] = useState("10");

const salePrice = Number(price) || 0;
const rate = Number(feeRate) || 0;

const fee = Math.floor(salePrice * (rate / 100));
const netAmount = salePrice - fee;

const reset = () => {
  setPrice("");
  setFeeRate("10");
};
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "手数料はどうやって計算しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "販売価格に手数料率を掛けて計算します。例えば10,000円の商品で手数料率が10%なら、販売手数料は1,000円です。",
      },
    },
    {
      "@type": "Question",
      name: "メルカリの手数料計算にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。利用するサービスの手数料率を確認し、このツールに入力することで販売手数料と手取り金額を計算できます。",
      },
    },
    {
      "@type": "Question",
      name: "手数料率を自由に入力できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。5%・10%・15%のプリセットに加えて、任意の手数料率を自由入力できます。",
      },
    },
    {
      "@type": "Question",
      name: "送料も含めて計算されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。このツールで表示する手取り金額には送料を含んでいません。",
      },
    },
  ],
};
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqStructuredData),
  }}
/>
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
        <div className="mt-3">
  <p className="mb-2 text-sm font-semibold text-gray-700">
    よく使う販売価格
  </p>

  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
    {["1000", "3000", "5000", "10000"].map((value) => (
      <button
        key={value}
        type="button"
        onClick={() => setPrice(value)}
        className={`rounded-lg border px-3 py-2 text-sm font-bold ${
          price === value
            ? "border-black bg-black text-white"
            : "border-gray-300 bg-white text-gray-700"
        }`}
      >
        {Number(value).toLocaleString()}円
      </button>
    ))}
  </div>
</div>
        <div className="mt-4">
  <p className="mb-2 text-sm font-semibold text-gray-700">
    手数料率
  </p>

  <div className="grid grid-cols-3 gap-2">
    {["5", "10", "15"].map((value) => (
      <button
        key={value}
        type="button"
        onClick={() => setFeeRate(value)}
        className={`rounded-lg border px-3 py-2 text-sm font-bold ${
          feeRate === value
            ? "border-black bg-black text-white"
            : "border-gray-300 bg-white text-gray-700"
        }`}
      >
        {value}%
      </button>
    ))}
  </div>

  <div className="mt-3">
    <label className="mb-1 block text-sm text-gray-600">
      自由入力（%）
    </label>
    <input
      type="number"
      min="0"
      step="0.1"
      value={feeRate}
      onChange={(e) => setFeeRate(e.target.value)}
      className="w-full rounded border p-3"
      placeholder="例：8.8"
    />
  </div>
</div>
       <div className="mt-6 rounded-xl bg-gray-50 p-4">
  <p className="text-sm text-gray-600">販売価格</p>
  <p className="text-xl font-bold">
    {salePrice.toLocaleString()}円
  </p>

  <p className="mt-4 text-sm text-gray-600">
    販売手数料（{rate}%）
  </p>
  <p className="text-2xl font-bold">
    {fee.toLocaleString()}円
  </p>

  <p className="mt-4 text-sm text-gray-600">
    手取り金額（送料別）
  </p>
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
      <section className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 shadow">
  <h2 className="mb-2 text-xl font-bold">
    販売手数料10%の早見表
  </h2>

  <p className="mb-5 text-sm text-gray-600">
    販売手数料が10%の場合の、販売価格・手数料・手取り金額の目安です。
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-3 text-left">販売価格</th>
          <th className="border p-3 text-right">手数料</th>
          <th className="border p-3 text-right">手取り</th>
        </tr>
      </thead>

      <tbody>
        {[
          [300, 30, 270],
          [1000, 100, 900],
          [3000, 300, 2700],
          [5000, 500, 4500],
          [10000, 1000, 9000],
          [30000, 3000, 27000],
          [50000, 5000, 45000],
        ].map(([sale, feeAmount, net]) => (
          <tr key={sale}>
            <td className="border p-3 font-medium">
              {sale.toLocaleString()}円
            </td>
            <td className="border p-3 text-right">
              {feeAmount.toLocaleString()}円
            </td>
            <td className="border p-3 text-right font-bold">
              {net.toLocaleString()}円
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="mt-3 text-xs text-gray-500">
    ※送料などのその他費用は含んでいません。
  </p>
</section>
     <section className="mx-auto mt-12 max-w-3xl space-y-8 text-left">
  <div>
    <h2 className="mb-3 text-2xl font-bold">
      販売手数料の計算方法
    </h2>
    <p>
      販売手数料は「販売価格 × 手数料率」で計算できます。
      例えば販売価格が3,000円、手数料率が10%の場合、
      販売手数料は300円、手取り金額は2,700円です。
    </p>
  </div>

  <div>
    <h2 className="mb-3 text-2xl font-bold">
      フリマアプリの手数料計算にも使えます
    </h2>
    <p>
      メルカリなどのフリマアプリや販売サービスでは、
      商品が売れた際に販売手数料が差し引かれます。
      このツールでは手数料率を自由に変更できるため、
      利用しているサービスの手数料率を入力して計算できます。
    </p>
  </div>

  <div>
    <h2 className="mb-3 text-2xl font-bold">
      販売価格から手取り金額を確認
    </h2>
    <p>
      商品の販売価格だけでなく、
      手数料を差し引いた後に実際に残る手取り金額も確認できます。
      値下げや価格設定をする前の目安として利用できます。
    </p>
  </div>

  <div>
    <h2 className="mb-3 text-2xl font-bold">
      よくある質問
    </h2>

    <div className="space-y-5">
      <div>
        <h3 className="font-bold">
          手数料はどうやって計算しますか？
        </h3>
        <p className="mt-1">
          販売価格に手数料率を掛けて計算します。
          例えば10,000円の商品で手数料率が10%なら、
          販売手数料は1,000円です。
        </p>
      </div>

      <div>
        <h3 className="font-bold">
          メルカリの手数料計算にも使えますか？
        </h3>
        <p className="mt-1">
          はい。利用するサービスの手数料率を確認し、
          このツールに入力することで販売手数料と手取り金額を計算できます。
        </p>
      </div>

      <div>
        <h3 className="font-bold">
          手数料率を自由に入力できますか？
        </h3>
        <p className="mt-1">
          はい。5%・10%・15%のプリセットに加えて、
          任意の手数料率を自由入力できます。
        </p>
      </div>

      <div>
        <h3 className="font-bold">
          送料も含めて計算されますか？
        </h3>
        <p className="mt-1">
          いいえ。このツールで表示する手取り金額には送料を含んでいません。
          送料まで含めた利益を確認したい場合は、
          送料込み利益計算ツールをご利用ください。
        </p>
      </div>
    </div>
  </div>
</section>
     <section className="mt-10 max-w-3xl mx-auto rounded-xl border bg-white p-5">
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
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}