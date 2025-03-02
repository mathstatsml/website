import { Marquee } from "~/components/ui/marquee";
import Image from "next/image";
import berkeleyEECS from "public/logos/berkeleyeecs.jpeg";
import cmu from "public/logos/cmu.jpg";
import mit from "public/logos/mit.png";
import stanford from "public/logos/stanford.png";

export const Logos = () => (
  <section className="mt-28 border-b border-dashed border-foreground/10 pb-6 md:mt-36 lg:mt-24">
    <div className="container">
      <Marquee>
        <Image
          className="h-16 w-auto object-cover"
          src={berkeleyEECS}
          alt="UC Berkeley EECS"
          draggable={false}
        />
        <Image
          className="h-14 w-auto object-cover"
          src={mit}
          alt="Massachusetts Institute of Technology"
          draggable={false}
        />
        <Image
          className="h-16 w-auto object-cover"
          src={berkeleyEECS}
          alt="UC Berkeley EECS"
          draggable={false}
        />
        <Image
          className="h-14 w-auto object-cover"
          src={mit}
          alt="Massachusetts Institute of Technology"
          draggable={false}
        />
        <Image
          className="h-20 w-auto object-cover"
          src={stanford}
          alt="Stanford University"
          draggable={false}
        />
        <Image
          className="h-20 w-auto object-cover"
          src={cmu}
          alt="Carnegie Mellon University"
          draggable={false}
        />
      </Marquee>
    </div>
  </section>
);
