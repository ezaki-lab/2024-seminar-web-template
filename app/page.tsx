export default function Page() {
  return (
    // 中央揃えで表示
    <div className="p-5 pb-32 flex flex-col items-center">
      <h1 className="mb-10 text-cyan-600 text-3xl font-bold">
        春休みゼミ「Webフロントエンド」へようこそ！
      </h1>

      <p>
        Webページが表示されるまでの流れや、フロントエンドの役割について解説します。
        担当者と一緒に、フロントエンドのシステムの実装練習を行います。
      </p>

      {/* 2カラムで表示 */}
      <div className="
        p-5 my-10 w-full flex flex-row gap-5
        border-4 border-gray-200 rounded-xl
      ">
        <div className="w-full">
          <h2 className="mb-3 text-blue-600 text-2xl font-bold">
            濱口 宝（はまぐち たから）
          </h2>

          <p>
            こんにちは！このゼミを担当しているJ5の
            <span className="font-bold">濱口 宝</span>です！
            4月から東京の情報系企業に就職し、バックエンドエンジニアになります。
            好きな食べ物はハンバーガーと寿司です！
          </p>
        </div>

        <div className="w-32">
          <img src="programmer.png" alt="担当者" />
        </div>
      </div>
    </div>
  );
}
