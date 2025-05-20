import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection({ HeroData }) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-red-700">{HeroData.journal_name}</span> {HeroData.tagline ? `- ${HeroData.tagline}` : ""}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A continuous magazine dedicated to publishing cutting-edge
              research, expert opinions, and analytical views on current global
              health issues.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/submit"
                className="bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-lg transition flex items-center"
              >
                Submit Your Research
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/about/journal"
                className="bg-white hover:bg-gray-100 text-red-700 border border-red-700 font-medium px-6 py-3 rounded-lg transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative md:w-[70%] lg:ml-28">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-100 rounded-tl-3xl z-0"></div>
              {/* <Image
                src="/book-0rg.png"
                alt="Medical research scientist looking through microscope"
                className="rounded-lg h-[30rem] shadow-lg relative z-10 w-full"
                height="500"
                width="600"
              /> */}
               <img className="transition-transform relative duration-300 hover:scale-105 object-cover w-full h-full z-30" src={`http://localhost:3100${HeroData.thumbnail}`} alt={'Journal thumbnail'} />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-br-3xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
