import React from "react";

function Extra() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md mb-8">
      <div className="bg-red-700 text-white p-4">
        <h3 className="text-lg font-semibold">Journal Metrics</h3>
      </div>
      <div className="p-4">
        <div className="flex justify-between border-b border-gray-200 py-2">
          <span className="font-medium">Impact Factor:</span>
          <span>4.892</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2">
          <span className="font-medium">5-Year IF:</span>
          <span>5.218</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2">
          <span className="font-medium">CiteScore:</span>
          <span>5.1</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-medium">Acceptance Rate:</span>
          <span>32%</span>
        </div>
      </div>
    </div>
  );
}

export default Extra;
