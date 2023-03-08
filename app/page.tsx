import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`px-4 py-8 flex flex-col justify-between min-h-screen ${inter.className}`}
      >
        <div>
          <h1 className="text-2xl">S(n)</h1>

          <div>
            <a
              href="https://iterate.world"
              className="mt-5 group block"
              target="_blank"
              rel="noopener"
            >
              <h2 className="mt-5 text-lg">
                <span className="group-hover:underline">Iterate.World</span>{" "}
                <span className="transition-transform group-hover:translate-x-1 inline-block">
                  -&gt;
                </span>
              </h2>
              <p>Collaborate on AI images with friends.</p>
            </a>

            <a
              href="https://www.mailing.run"
              className="mt-5 group block"
              target="_blank"
            >
              <h2 className="text-lg">
                <span className="group-hover:underline">Mailing</span>{" "}
                <span className="transition-transform group-hover:translate-x-1 inline-block">
                  -&gt;
                </span>
              </h2>
              <p>Build, test, send emails from your react app.</p>
            </a>
          </div>
        </div>
        <footer className="text-xs">
          © Sofn Inc, {new Date().getFullYear()}
        </footer>
      </main>
    </>
  );
}
