import Image from "next/image";
import BookLogo from "./ui/book-logo";
import styles from '@/app/ui/home.module.css';
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-500 p-4 md:h-52 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark opacity-45">
        <BookLogo/>
      </div>

      <div className="mt-4 flex grow flex-col gap-6 md:flex-row">
        <div className=" lg:flex flex-col justify-center gap-6 rounded-lg bg-white-50 px-6 py-10 md:w-2/5 md:px-20 z-10 w-full max-w-6xl text-sm">
        <div className={styles.shape}/>
          <p className={`${lusitana.className} text-gray-800 md:text-3xl md:leading-normal fixed left-0 top-0 flex w-full justify-center border-b border-gray-500 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30`}>
            <strong>Welcome to Stories.</strong> 
          </p>
          <Link
            href={"/login"}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`${lusitana.className} mb-3 text-2xl font-semibold`}>
              Login{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
                <ArrowRightCircleIcon className="w-8 md:w-8"/>
              </span>
            </h2>
          <p className={`${lusitana.className} m-0 max-w-[40ch] text-lg opacity-50`}>
            Login to mark the books you have read. 
          </p>
          </Link>
        
        </div>
      {/* <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/dark-book.jpg"
          alt="dark shot of a book"
          width={1000}
          height={760}
          priority
        />

      </div> */}

      <div className="relative justify-center p-6 md:w-3/5 md:px-28 md:py-12 z-[-1] flex place-items-center before:absolute before:h-[500px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-500 after:via-blue-1000 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-1000 before:dark:opacity-10 after:dark:from-sky-1200 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/dark-book.jpg"
          alt="dark shot of a book"
          width={800}
          height={800}
          priority
        />
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* <a
          href="/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* <h2 className="mb-3 text-2xl font-semibold">
            Login{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -->
            </span>
            
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Login to mark the books you have read. 
          </p> */} 
        {/* </a> */}

        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a> */}

      {/* </div> */}
      </div>
    </main>
  );
}
