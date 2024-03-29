import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Config from "./_components/config";
import Chat from "./_components/chat";

const Home = async () => {
  noStore();
  const session = await getServerAuthSession();

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div>
          <h1>Leman</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, eum.
          </p>
        </div>

        {session && (
          <>
            <Config />
            <Chat />
          </>
        )}

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
