import React from "react";
import { IProject } from "./Projects";
import Image from "next/image";

interface ProjectProps {
  data: IProject;
}

export default function Project(data: ProjectProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 hover:transition">
      <figure>
        <Image src={data.data.thumbnail} alt={data.data.title} width={500} height={500}/>
      </figure>
      <div className="card-body bg-neutral-900 gap-4">
        <h2 className="card-title text-white">{data.data.title}</h2>
        <p className="text-neutral-400 text-sm">{data.data.description}</p>
        <div className="card-actions justify-end">
          {data.data.skills.map((sk) => (
            <div key={sk} className="badge badge-outline text-white text-xs">
              {sk}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
