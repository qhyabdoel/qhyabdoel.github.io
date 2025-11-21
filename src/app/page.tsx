export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      {/* Header */}
      <nav className="w-full mb-12 md:flex justify-between items-center">
        <div className="text-2xl font-bold md:mb-0 mb-4">Kiki Abdulloh</div>
        <div>
          <a href="#projects" className="md:mx-4 text-lg">
            Repositories
          </a>
        </div>
      </nav>
    </main>
  );
}
