"use client";

import { _GET } from "@/request/request";
import { CircleXIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function CitationPopup({ isOpen, closetab }) {
  const params = useParams();
  const slug = params.articleId;
  const [citation, setcitation] = useState(null)

  console.log('rending')

  useEffect(() => {
    async function getCitationData() {
      const response = await _GET(`citation/readOne?ariticle_id=${slug}`, 'core');
      setcitation(response)
    }
    getCitationData()
  }, [slug]);

  return (
    <div
      className={`bg-black/90 z-100 fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center max-h-screen ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-1/2 bg-white h-[30rem] rounded-lg">
        <div className="bg-red-700 items-center flex justify-between rounded-t-lg">
          <h3 className="p-3 text-white font-semibold rounded-t-lg">
            Article Citation
          </h3>
          <span
            className="text-white mr-3 cursor-pointer"
            onClick={() => closetab(false)}
          >
            <CircleXIcon />
          </span>
        </div>
        <div className="overflow-y-scroll max-h-[25rem]">
          <ul className="p-2">
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">APA</h4>
              <p className="text-sm">
                {citation && citation.citation_apa}
              </p>
            </li>
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">MLA</h4>
              <p className="text-sm">
                {citation && citation.citation_mla}
              </p>
            </li>
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">Chicago</h4>
              <p className="text-sm">
                {citation && citation.citation_chicago}
              </p>
            </li>
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">Harvard</h4>
              <p className="text-sm">
                {citation && citation.citation_harvard}
              </p>
            </li>
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">Vancouver</h4>
              <p className="text-sm">
                {citation && citation.citation_vancouver}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CitationPopup;
