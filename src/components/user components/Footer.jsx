export function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
        
        {/* Left */}
        <p className="text-center md:text-left">
          © 2026 Al Imran School System
        </p>

        {/* Right (optional links) */}
        <div className="flex gap-4">
          <span className="hover:text-black cursor-pointer">Privacy</span>
          <span className="hover:text-black cursor-pointer">Terms</span>
          <span className="hover:text-black cursor-pointer">Contact</span>
        </div>

      </div>
    </footer>
  );
}