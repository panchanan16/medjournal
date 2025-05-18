"use client"

import StyleSheet from "./StyleSheet";

function AboutText({ Html, Title }) {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-red-900 mb-8 border-b-2 border-red-100 pb-4">
        {Title}
      </h1>

      <div className="space-y-8 html-content">
        <section>
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            {Title} of MedLetter
          </h2>

          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: Html }}
          ></div>
        </section>
        <StyleSheet />
      </div>
    </div>
  );
}

export default AboutText;
