import HeartIcon from '@/assets/icon-heart.svg';

export default function Home() {
  return (
    <div>
      <button className="size-100">안녕asdfasfd</button>
      <HeartIcon width="32" height="32" fill="#FF0000" />

      <div className="text-3xl-bold">3xl bold</div>
      <div className="text-3xl-semibold">3xl semibold</div>
      <div className="text-3xl-medium">3xl medium</div>
      <div className="text-3xl-normal">3xl normal</div>
      <div className="text-3xl-light">3xl light</div>

      <div className="text-3xl-bold text-blue-50">3xl bold</div>
      <div className="text-3xl-semibold text-blue-100">3xl semibold</div>
      <div className="text-3xl-medium text-blue-200">3xl medium</div>
      <div className="text-3xl-normal text-blue-300">3xl normal</div>
      <div className="text-3xl-light text-blue-400">3xl light</div>

      <div className="text-3xl-bold text-blue-500">3xl bold</div>
      <div className="text-3xl-semibold text-blue-600">3xl semibold</div>
      <div className="text-3xl-medium text-blue-700">3xl medium</div>
      <div className="text-3xl-normal text-blue-800">3xl normal</div>
      <div className="text-3xl-light text-blue-900">3xl light</div>

      <div className="text-3xl-bold text-blue-950">3xl bold</div>
    </div>
  );
}
