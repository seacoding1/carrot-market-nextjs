import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="my-auto">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>
      <div>
        <Link href="/create-account">시작하기</Link>
        <div>
            <span>이미 계정이 있나요?</span>
            <Link href="/login"></Link>
        </div>
      </div>
    </div>
  );
}
