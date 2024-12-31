import React from "react";

const CaptionList = ({ captions }) => {
  return (
    <ul className="space-y-4">
      {captions.map((caption, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-800 p-4 rounded"
        >
          <span>{`${caption.text} (${caption.start}s - ${caption.end}s)`}</span>
        </li>
      ))}
    </ul>
  );
};

export default CaptionList;
