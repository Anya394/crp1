import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Добро пожаловать в магазин космических кораблей!</h1>
          <p className="text-xl mb-8">Лучшие корабли для ваших межгалактических путешествий</p>
          <Link href="/catalog">
            <div className="px-6 py-3 mainButton text-white rounded-lg hover:bg-gray-900 transition-colors text-lg">
              Перейти в каталог
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
