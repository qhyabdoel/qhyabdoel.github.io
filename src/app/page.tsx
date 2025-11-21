import { FaGithub } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-blue-50 dark:bg-zinc-400 transition-colors">
      {/* Header */}
      <nav className="w-full mb-12 md:flex justify-between items-center">
        <div className="text-2xl font-bold md:mb-0 mb-4">Kiki Abdulloh</div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/qhyabdoel"
            target="_blank"
            className="md:mx-4 text-lg flex items-center gap-2"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </main>
  );
}
