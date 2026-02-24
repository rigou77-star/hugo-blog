import Link from 'next/link';

const products = [
  { id: 1, name: 'Minimalist Note Template', price: '$15' },
  { id: 2, name: 'Pro Dev Environment Config', price: '$29' },
  { id: 3, name: 'Focus Mode Playlist', price: '$9' },
];

export default function ProductsList() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl font-mono">
      <div className="mb-8 border-b border-[var(--foreground)] pb-4">
        <h1 className="text-4xl font-bold uppercase">/dev/store</h1>
        <p className="opacity-70 mt-2">&gt; Listing available packages...</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group border border-[var(--foreground)] p-6 hover:bg-[rgba(0,255,0,0.1)] transition-colors bg-black flex flex-col justify-between h-full">
            <div className="aspect-square border border-[var(--foreground)] bg-black mb-6 flex flex-col items-center justify-center text-sm p-4 relative overflow-hidden">
               <div className="absolute top-2 left-2 text-[10px] opacity-70">PKG_ID: {product.id.toString().padStart(4, '0')}</div>
               <div className="text-center opacity-50 uppercase">[ BINARY_IMAGE_PLACEHOLDER ]</div>
            </div>
            
            <div className="mb-4">
               <h2 className="text-xl font-bold mb-2 uppercase group-hover:underline">{product.name}</h2>
               <div className="flex justify-between items-center text-sm font-bold border-t border-[var(--foreground)] pt-2 mt-2">
                 <span>COST:</span>
                 <span className="bg-[var(--foreground)] text-black px-1">{product.price}</span>
               </div>
            </div>

            <button className="w-full py-2 border border-[var(--foreground)] uppercase text-sm font-bold hover:bg-[var(--foreground)] hover:text-black transition-colors flex items-center justify-center gap-2">
              <span>[ APT-GET INSTALL ]</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
