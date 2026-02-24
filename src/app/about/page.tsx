export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-mono">
      <div className="mb-8 border-b border-[var(--foreground)] pb-4">
        <h1 className="text-4xl font-bold uppercase">/etc/motd</h1>
        <p className="opacity-70 mt-2">&gt; Message of the Day (About User)...</p>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">
          <span className="text-[var(--foreground)] font-bold">&gt; WHOAMI:</span> Hugo Li<br/>
          <span className="text-[var(--foreground)] font-bold">&gt; ROLE:</span> Builder / Explorer / AI Enthusiast<br/>
          <span className="text-[var(--foreground)] font-bold">&gt; LOCATION:</span> Yokohama, Japan
        </p>
        
        <div className="border border-[var(--foreground)] p-6 my-8 bg-black">
          <p className="mb-4">
            Initializing connection...
          </p>
          <p className="mb-4">
            This digital space is a manifestation of my current neural state. I build systems, explore artificial intelligence, and occasionally document the process.
          </p>
          <p>
            System objective: To learn, to build, and to share.
          </p>
        </div>

        <h3 className="text-xl font-bold uppercase mt-8 border-b border-[var(--foreground)] inline-block pr-4">
          :: TECH_STACK ::
        </h3>
        <ul className="list-none pl-0 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ React ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ Next.js ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ TypeScript ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ Tailwind ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ Python ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ Node.js ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ LLMs ]</li>
          <li className="border border-[var(--foreground)] p-2 text-center text-sm hover:bg-[var(--foreground)] hover:text-black transition-colors cursor-default">[ Linux ]</li>
        </ul>
      </div>
    </div>
  );
}
