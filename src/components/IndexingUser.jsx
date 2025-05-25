"use client";
import Link from "next/link";
import StyleSheet from "./StyleSheet";

function IndexingUser({ IndexItem }) {
  return (
    <div className="html-content">
      <div>
        <h2>Indexing</h2>
        <p>This Journal is indexed and covered by</p>
      </div>
      <div>
        <ul>
          {IndexItem?.length &&
            IndexItem.map((indx, key) => (
              <li key={key}>
                <a href={`${indx.link}`} target="_blank">{indx.index_name}</a>
              </li>
            ))}
        </ul>
      </div>
      <StyleSheet />
    </div>
  );
}

export default IndexingUser;
