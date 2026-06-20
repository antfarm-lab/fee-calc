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
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
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
      <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm">
    <a className="text-blue-600 underline" href="https://calc-tools-mauve.vercel.app/">
      利益計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://price-reverse-calc.vercel.app/">
      逆算計算ツール
    </a>
  </div>
</section>
    </main>
  );
}