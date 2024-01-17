import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={previewUrl} passHref>
      <div
        className="h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full absolute inset-0 flex flex-col justify-end text-white bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-70">
          <div className={`py-6 px-4 ${isHovered ? "" : "opacity-0"}`}>
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
