import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--foreground)] p-8 mt-12 font-mono text-sm opacity-70">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          &copy; {new Date().getFullYear()} Hugo Li. All systems nominal.
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:bg-[var(--foreground)] hover:text-black px-1">[ ./github ]</Link>
          <Link href="#" className="hover:bg-[var(--foreground)] hover:text-black px-1">[ ./twitter ]</Link>
          <Link href="#" className="hover:bg-[var(--foreground)] hover:text-black px-1">[ ./email ]</Link>
        </div>
        <div>
          uptime: {Math.floor(Math.random() * 1000)} days
        </div>
      </div>
    </footer>
  );
}
