import React, { useState } from "react";

const CaptionInput = ({ onAddCaption }) => {
  const [newCaption, setNewCaption] = useState("");
  const [timestamp, setTimestamp] = useState({ start: "", end: "" });
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!newCaption) {
      setError("Caption text cannot be empty.");
      return;
    }

    if (!timestamp.start || !timestamp.end) {
      setError("Start and end times are required.");
      return;
    }

    if (parseFloat(timestamp.end) <= parseFloat(timestamp.start)) {
      setError("End time must be greater than start time.");
      return;
    }

    // If validation passes
    setError("");
    onAddCaption({ text: newCaption, ...timestamp });
    setNewCaption("");
    setTimestamp({ start: "", end: "" });
  };

  return (
    <div className="space-y-4 mb-4">
      <textarea
        placeholder="Enter caption text"
        value={newCaption}
        onChange={(e) => setNewCaption(e.target.value)}
        className="w-full p-2 text-gray-900 rounded"
      />
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Start time (sec)"
          value={timestamp.start}
          onChange={(e) =>
            setTimestamp((prev) => ({ ...prev, start: e.target.value }))
          }
          className="flex-1 p-2 text-gray-900 rounded"
        />
        <input
          type="number"
          placeholder="End time (sec)"
          value={timestamp.end}
          onChange={(e) =>
            setTimestamp((prev) => ({ ...prev, end: e.target.value }))
          }
          className="flex-1 p-2 text-gray-900 rounded"
        />
      </div>

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Add Caption
      </button>
    </div>
  );
};

export default CaptionInput;
