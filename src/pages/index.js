import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import DefaultLayout from "../layouts/DefaultLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <DefaultLayout>
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        {/* Your existing content here */}
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          {/* ...rest of your content */}
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          {/* Footer links */}
        </footer>
      </div>
    </DefaultLayout>
  );
}
