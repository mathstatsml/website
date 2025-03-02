import { Lines } from "~/components/sections/lines";
import { Logos } from "~/components/sections/logos";
import Image from "next/image";

export const Hero = () => (
  <main className="relative flex flex-col">
    <Lines />
    <Background />
    <div className="bg-stripe-gradient absolute top-0 -z-10 size-full md:top-10" />
    <div className="mt-20 border-y border-dashed border-foreground/10 py-2 md:mt-24 lg:mt-28">
      <div className="container">
        <h1>
          Learn every bit of <br className="hidden sm:block" />
          Math behind Modern <br className="hidden sm:block" />
          AI/ML Research.
        </h1>
        <div className="mt-8 max-w-lg text-gray-700 dark:text-gray-300 md:max-w-xl">
          <p className="mb-6">
            Bite-sized lectures for foundational Machine Learning topics like
            Statistics and Convex Optimization — mathematically precise,
            beginner accessible, and linked with prerequisites.
          </p>
          <p>
            Mathematically rigorous curriculum designed by researchers and
            student instructors from top AI universities in the world.
          </p>
        </div>
        <div className="mt-12 flex max-w-lg justify-between md:max-w-xl">
          <div>
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              61
            </span>
            Lectures
          </div>
          <div className="">
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              3000
            </span>
            Students in our community
          </div>
          <div>
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              6
            </span>
            Attendees
          </div>
        </div>
      </div>
    </div>
    <Logos />
  </main>
);

const Background = () => (
  <div className="absolute inset-0 -top-16 -z-10 lg:-top-20">
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="absolute inset-x-0 top-0 max-w-7xl overflow-hidden lg:bottom-auto lg:left-auto lg:right-0 lg:w-4/5">
        <div className="scale-[calc(16/9)] md:scale-100">
          <div className="flex aspect-square items-center md:aspect-video">
            <iframe
              src="https://player.vimeo.com/video/810387165?h=7363b7ae4f&amp;dnt=1&amp;loop=1&amp;background=1&amp;app_id=58479"
              width="426"
              height="240"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="MathStatsML"
              className="size-full"
            />
          </div>
        </div>
        <div className="absolute -inset-px bg-background/10" />
        <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-background lg:block" />
      </div>
      <div className="relative flex justify-center overflow-hidden saturate-50">
        <Image
          src="/images/gradient-small.webp"
          width={640}
          height={1124}
          className="sm:hidden"
          draggable={false}
          alt=""
        />
        <Image
          src="/images/gradient-medium.webp"
          width={1024}
          height={1124}
          className="hidden sm:block lg:hidden"
          draggable={false}
          alt=""
        />
        <Image
          src="/images/gradient-large.webp"
          width={2510}
          height={1168}
          className="hidden max-w-none lg:block"
          draggable={false}
          alt=""
        />
      </div>
    </div>
  </div>
);
