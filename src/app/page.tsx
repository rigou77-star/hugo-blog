import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 font-mono max-w-4xl mx-auto">
      {/* Header / Intro */}
      <section className="mb-12 border-b-2 border-[var(--foreground)] pb-8">
        <div className="mb-4">
          <span className="text-[var(--foreground)]">root@jarvis:~/hugo-blog#</span> <span className="text-white">./init_sequence.sh</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">
          HUGO<span className="animate-pulse">_</span>LI
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          &gt; Technology. Design. Life.<br/>
          &gt; Status: Online
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/blog" className="inline-block border-2 border-[var(--foreground)] px-6 py-2 hover:bg-[var(--foreground)] hover:text-black transition-colors font-bold uppercase">
            [ cd /blog ]
          </Link>
          <Link href="/products" className="inline-block border-2 border-[var(--foreground)] px-6 py-2 hover:bg-[var(--foreground)] hover:text-black transition-colors font-bold uppercase">
            [ ./exec_store ]
          </Link>
        </div>
      </header>

      {/* Latest Logs (Blog) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 uppercase border-b border-[var(--foreground)] inline-block pr-8">
          :: System Logs ::
        </h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer border border-[var(--foreground)] p-4 hover:bg-[rgba(0,255,0,0.1)] transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm opacity-70">[2024-03-{10+i}]</span>
                <span className="text-xs border border-[var(--foreground)] px-1">LOG_00{i}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:underline">
                &gt; The Future of Digital Interaction
              </h3>
              <p className="opacity-80 line-clamp-2 mb-4">
                Exploring how AI agents like Jarvis are reshaping our daily workflows and creative processes.
                <span className="animate-pulse">_</span>
              </p>
              <div className="text-right">
                <span className="text-sm uppercase font-bold">&lt;READ_MORE&gt;</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Inventory (Products) */}
       <section className="mb-12">
         <h2 className="text-2xl font-bold mb-6 uppercase border-b border-[var(--foreground)] inline-block pr-8">
           :: Inventory ::
         </h2>
         <div className="grid md:grid-cols-2 gap-6">
           <div className="border border-[var(--foreground)] p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase">Pro Workspace Kit</h3>
                <p className="opacity-80 mb-4 font-mono text-sm">
                  Optimization tools for your digital environment.
                </p>
              </div>
              <button className="w-full border border-[var(--foreground)] py-2 uppercase text-sm font-bold hover:bg-[var(--foreground)] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed">
                [ Install Pending... ]
              </button>
           </div>
           
           <div className="border border-[var(--foreground)] p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase">Source Code</h3>
                <p className="opacity-80 mb-4 font-mono text-sm">
                  /usr/src/hugo-blog/
                </p>
              </div>
              <button className="w-full bg-[var(--foreground)] text-black py-2 uppercase text-sm font-bold hover:opacity-80">
                [ View Source ]
              </button>
           </div>
         </div>
      </section>
      
    </div>
  );
}
