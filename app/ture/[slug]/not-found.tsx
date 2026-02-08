import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Tura nije pronađena</h1>
        <p className="text-gray-400 mb-8">Tura koju tražite ne postoji ili je uklonjena.</p>
        <Link
          href="/#popularne"
          className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
        >
          Vrati se na ture
        </Link>
      </div>
    </main>
  );
}
