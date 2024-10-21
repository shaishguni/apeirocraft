"use client"

import { useState } from "react";

const categories = ["All", "Web Development", "SaaS", "Content Creation"];

const Filters = ({ setCategory }: { setCategory: (cat: string) => void }) => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 border ${active === category ? "bg-blue-500 text-white" : "bg-white"}`}
          onClick={() => {
            setCategory(category);
            setActive(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;
