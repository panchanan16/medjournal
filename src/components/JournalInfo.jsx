import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function JournalInfo({ Info }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            About the Journal
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Journal Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium text-gray-700 w-32">
                      ISSN (Print):
                    </span>
                    <span className="text-gray-600">
                      {Info.issn_print ? Info.issn_print : "N/A"}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 w-32">
                      ISSN (Online):
                    </span>
                    <span className="text-gray-600">
                      {Info.issn_online ? Info.issn_online : "N/A"}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 w-32">
                      Abbreviation:
                    </span>
                    <span className="text-gray-600">
                      {Info.abbreviation_name ? Info.abbreviation_name : "N/A"}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 w-32">
                      Disciplines:
                    </span>
                    <span className="text-gray-600">
                      {Info.subjects ? Info.subjects : "N/A"}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 w-32">
                      Founded:
                    </span>
                    <span className="text-gray-600">
                      ResRidge Publication Foundation
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: Info.about }}
                ></div>

                <Link
                  href="/about"
                  className="text-red-700 hover:text-red-800 font-medium inline-flex items-center"
                >
                  Read full aims & scope
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JournalInfo;
