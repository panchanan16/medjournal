"use client";

import { useState } from "react";
import FloatingSection from "../FloatingSection";
import Link from "next/link";
import Image from "next/image";
import { transformVolumes } from "@/utils/util";

function VolumesRender({ AllVolumes }) {
  const [activeYear, setActiveYear] = useState("2025");
  const filterResult = transformVolumes(AllVolumes);

  const years = Object.keys(filterResult).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white shadow-md z-5">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-3 scrollbar-hide">
            {years.map((year) => (
              <button
                key={year}
                className={`px-6 py-2 mx-1 rounded-md font-semibold transition-colors ${
                  activeYear === year
                    ? "bg-red-700 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-red-100"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container flex flex-col items-center mx-auto px-4 py-8">
        <div className="mb-8 md:self-start">
          <h2 className="text-3xl font-bold text-red-800 border-b-2 border-red-300 pb-2">
            {activeYear}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filterResult[activeYear]?.map((journal) => (
            <Link href={`/volume/${journal.volume}`} key={journal.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer min-w-[18rem]">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                    <div className="w-full h-[20rem] relative">
                      <Image
                        src={journal.image}
                        alt={`Cover for ${journal.title} Vol ${journal.volume}, No ${journal.issue}`}
                        layout="fill"
                        objectFit="fit"
                        className="transition-opacity duration-300 hover:opacity-90"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 border-t border-gray-100">
                  <h3 className="font-bold text-red-800 mb-1">
                    {journal.title}
                  </h3>
                  <p className="text-gray-700">{journal.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <FloatingSection />
    </div>
  );
}

export default VolumesRender;
