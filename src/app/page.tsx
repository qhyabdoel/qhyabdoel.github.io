import { FaGithub } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors">
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
      {/* Main Content */}
      <section className="w-full md:flex">
        <div className="flex-1">
          <p>
            So this is my personal website. I built it using Next.js and
            Tailwind CSS. You can change the theme using the button on the top
            right corner.
          </p>
          <p className="mt-4">You can find the source code on my GitHub.</p>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <Image
            src="/IMG20.jpg"
            alt="Kiki Abdulloh"
            width={96}
            height={96}
            className="rounded-full md:ml-auto"
          />
        </div>
      </section>
    </main>
  );
}
