"use client";

import { CircleXIcon } from "lucide-react";

function CitationPopup({ isOpen, closetab }) {
  return (
    <div className={`bg-black/90 z-100 fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center max-h-screen ${isOpen ? '' : 'hidden'}`}>
      <div className="w-1/2 bg-white h-[30rem] rounded-lg">
        <div className="bg-red-700 items-center flex justify-between rounded-t-lg">
          <h3 className="p-3 text-white font-semibold rounded-t-lg">
            Article Citation
          </h3>
          <span className="text-white mr-3 cursor-pointer" onClick={()=> closetab(false)}>
            <CircleXIcon />
          </span>
        </div>
        <div className="overflow-y-scroll max-h-[25rem]">
          <ul className="p-2">
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">MLA</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                debitis reprehenderit soluta deleniti aut et perspiciatis eum
                tenetur non ducimus accusantium, quae nihil, error itaque, sed
                maiores unde suscipit earum.
              </p>
            </li>
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">MLA</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                debitis reprehenderit soluta deleniti aut et perspiciatis eum
                tenetur non ducimus accusantium, quae nihil, error itaque, sed
                maiores unde suscipit earum.
              </p>
            </li>
            <li className="border-b-gray-500 py-3">
              <h4 className="text-red-600 font-semibold">MLA</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                debitis reprehenderit soluta deleniti aut et perspiciatis eum
                tenetur non ducimus accusantium, quae nihil, error itaque, sed
                maiores unde suscipit earum.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CitationPopup;
