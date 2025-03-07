import { LatestPost } from "~/app/_components/post";
import { Layout } from "~/components/layouts/layout";
import { Announcement } from "~/components/sections/announcement";
import { Footer } from "~/components/sections/footer";
import { Hero } from "~/components/sections/hero";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Link from "next/link";

const About = async () => {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      {/* <main>
        <div>
          <h1>
            Create <span>T3</span> App
          </h1>
          <div>
            <p>{hello ? hello.greeting : "Loading tRPC query..."}</p>

            <div>
              <p>{session && <span>Logged in as {session.user?.name}</span>}</p>
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main> */}
      <Announcement />
      <Layout>
        <Hero />
        <section className="py-[1000px]">Roadmap</section>
        <section className="py-[1000px]">
          Showcase video highlighting the type of shorts we make
        </section>
        <section className="py-[1000px]">
          Discord community and shorts comments, discussing each video
        </section>
        <section>Creator Program</section>
        <Footer />
      </Layout>
    </HydrateClient>
  );
};

export default About;
