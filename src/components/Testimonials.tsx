import { Icons } from "@/components/Icons";
import Img from "@/components/Img";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Star, Check } from "lucide-react";
import { Reviews } from "./Reviews";

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            What our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
            </span>{" "}
            say
          </h2>
          <Img className="w-24 order-0 lg:order-2" src="/snake-2.png" alt="" />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <Testimonial
            p1="The case feels durable and I even got a compliment on the design. Had the case for two and half months now and"
            spanText="the image is super clear"
            p2="on the case I had before, the image started fading into yellow-ish color after a couple of weeks. Love it."
            src="/users/user-1.png"
            userName="Jonathan"
          />

          <Testimonial
            p1="I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner "
            spanText="looks brand new after about half a year."
            p2=" Amazing Product "
            src="/users/user-4.jpg"
            userName="Jude"
          />
        </div>
      </MaxWidthWrapper>

      <div className="pt-16">
        <Reviews />
      </div>
    </section>
  );
}

function Testimonial({
  p1,
  spanText,
  p2,
  src,
  userName,
}: {
  p1: string;
  spanText: string;
  p2: string;
  src: string;
  userName: string;
}) {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 ">
      <div className="flex gap-0.5 mb-2 ">
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
      </div>
      <div className="text-lg leading-8">
        <p>
          {p1}
          <span className="p-0.5 bg-slate-800 text-white">
            {spanText}
          </span>, {p2}
        </p>
      </div>
      <div className="flex gap-4 mt-2">
        <Img
          className="rounded-full h-12 w-12 object-cover"
          src={src}
          alt="user image"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{userName}</p>
          <div className="flex gap-1.5 items-center text-zinc-600">
            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
