import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-400 to-sky-200 h-screen ">
      <div className="flex float-right p-20">
      <div className="w-[300px] rounded-md border ">
        <div className="p-4">
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link href={"/login"} className="hover:text-white">
              LOGIN
            </Link>
          </button>
        </div>
      </div>
      <div className="w-[300px] rounded-md border">
        <div className="p-4">
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link href={"/Registration"} className="hover:text-white uppercase">
              Registration
            </Link>
          </button>
        </div>
        </div>
        </div>
    </div>
  );
}
