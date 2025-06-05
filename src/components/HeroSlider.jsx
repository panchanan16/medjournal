"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/config/api.config";
import Image from "next/image";

function HeroSlider({ SliderImgs, HighlightInfo }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SliderImgs.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + SliderImgs.length) % SliderImgs.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-full mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* New Slider */}
        <div className="w-full md:w-7/10 min-w-0">
          <div className="relative">
            {/* Main Slider */}
            <div className="rounded-lg md:h-96 flex items-center justify-between p-5 relative overflow-hidden">
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                <img
                  className="w-full object-cover"
                  src={
                    SliderImgs.length &&
                    `${BASE_URL}${SliderImgs[currentSlide].slider_img}`
                  }
                  alt="slider images"
                />
              </div>
              {/* Navigation */}
              <div
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-black/40 text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </div>
              <div
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-black/40 text-white p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>

            {/* Content */}
            <div className="mt-3 bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-2">
                  {SliderImgs.length && SliderImgs[currentSlide].slide_title}
                </h3>
                <p className="text-gray-600 mb-2 text-xs md:text-sm leading-relaxed">
                  {SliderImgs.length && SliderImgs[currentSlide].slider_desc}
                </p>
                <Link
                  href={
                    SliderImgs.length && SliderImgs[currentSlide].slider_link
                  }
                >
                  <button className="text-red-600 hover:text-red-800 font-semibold text-sm">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            {/* Dots */}
            <div className="flex mt-3 justify-center space-x-2">
              {SliderImgs.length &&
                SliderImgs.map((slider, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? "bg-red-600" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
            </div>
          </div>
        </div>
        {/* Journal Volume - 30% */}
        <div className="w-full md:w-2/8 flex-shrink-0 min-w-0">
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800 truncate">
                  {HighlightInfo ? HighlightInfo[0].journal_name : "N/A"}
                </h3>
              </div>
            </div>

            <div className="p-2">
              <div className="rounded-lg p-1 text-center">
                <div className="flex justify-center">
                  {/* <img
                    src={
                      HighlightInfo
                        ? `${BASE_URL}${HighlightInfo[0]?.thumbnail}`
                        : ""
                    }
                    alt="Journal cover"
                    className="max-w-full h-auto"
                  /> */}
                  <Image
                    src={`${BASE_URL}${HighlightInfo[0]?.thumbnail}`}
                    alt="Journal cover"
                    width={500}
                    height={600}
                    objectFit="fit"
                    className="transition-opacity duration-300 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-bold text-sm">ISSN (Print) : </span>
                <span>
                  {HighlightInfo ? HighlightInfo[0]?.issn_print : "N/A"}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-bold text-sm">ISSN (Online) :</span>{" "}
                <span>
                  {HighlightInfo ? HighlightInfo[0]?.issn_online : "N/A"}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-bold text-sm">Abbreviation :</span>
                <span>
                  {HighlightInfo ? HighlightInfo[0]?.abbreviation_name : "N/A"}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-bold text-sm">Subjects : </span>
                <span>
                  {HighlightInfo ? HighlightInfo[0]?.subjects : "N/A"}
                </span>
              </div>

              <Link href={"/about"}>
                <span className="text-red-700 font-semibold">
                  Read Aim & Scope →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
