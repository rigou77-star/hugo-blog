import Link from 'next/link';

const products = [
  { id: 1, name: 'Minimalist Note Template', price: '$15' },
  { id: 2, name: 'Pro Dev Environment Config', price: '$29' },
  { id: 3, name: 'Focus Mode Playlist', price: '$9' },
];

export default function ProductsList() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Store</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
            <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center text-gray-400">
              Product Image
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h2>
            <p className="text-blue-600 font-medium mb-4">{product.price}</p>
            <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
