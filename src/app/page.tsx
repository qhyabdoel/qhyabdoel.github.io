import { FaGithub } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";
import { ViewCounter } from "@/components/view-counter";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex-1 space-y-4">
          <p>I am Kiki Abdulloh, a full stack developer.</p>
          <p>
            In 2014, I graduated from STMIK LPKIA Bandung and started working as
            a web developer creating websites using PHP and MySQL.
          </p>
          <p>And then I moved to jakarta.</p>
          <p>My Projects:</p>
          <ul className="list-disc list-inside">
            <li>Develop website with AI Integration</li>
            <li>
              Create a saas dashboard with user authentication, role-based
              access control, membership, payment, subscription, analytics, and
              domain management features.
            </li>
            <li>
              Datavisualization dashboard with subcsription and payment that
              connect to shopify.
            </li>
            <li>
              <a href="paques.id" className="text-blue-500">
                Paques
              </a>{" "}
              Data Solution Frontend
            </li>
            <li>E-Commerce Platform</li>
            <li>Mobile Application</li>
            <li>Projects Marketplace</li>
          </ul>
          <p>My Skills:</p>
          <ul className="list-disc list-inside">
            <li>
              Frontend: React.js, React Native, Angular, Vue.js and Tailwind
            </li>
            <li>Backend: Node.js, PHP, Python and Go</li>
            <li>Database: MySQL, PostgreSQL and MongoDB</li>
            <li>Others: Git, Docker, Vercel, Stripe and Shopify</li>
          </ul>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <Image
            src="/img-21.jpg"
            alt="Kiki Abdulloh"
            width={70}
            height={70}
            className="rounded-full md:ml-auto"
          />
          <div className="md:text-right mt-8 flex flex-col gap-2 text-sm">
            <p className="underline">
              <Link href="https://medium.com/@kikiabdull" target="_blank">
                My Articles
              </Link>
            </p>

            <p className="underline">
              <Link href="mailto:qhyabdoel@gmail.com">qhyabdoel@gmail.com</Link>
            </p>

            <p className="underline">
              <Link
                href="https://www.linkedin.com/in/kiki-abdulloh-b55b147a"
                target="_blank"
              >
                LinkedIn
              </Link>
            </p>
            <ViewCounter />
          </div>
        </div>
      </section>
    </main>
  );
}
