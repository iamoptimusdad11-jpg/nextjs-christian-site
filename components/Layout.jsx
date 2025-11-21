export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto p-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">God's Grace</h1>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/blog" className="hover:underline">Blog</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>

      <footer className="max-w-6xl mx-auto p-6 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} God's Grace — Only through God's Son will he open up to us our Heavenly home.</div>
      </footer>
    </div>
  );
}
