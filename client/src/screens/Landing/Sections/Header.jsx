// libraries
import { useState } from "react"

// assets
import Nav from "../../../components/Nav/Nav";
import TupleCard from "../../../components/Elements/TupleCard.jsx";

import packs from "../../../assets/Packs.json"
const packagesArray = Object.values(packs);

export default function Header() {


  return (
    <>
      <Nav />
      <div className="flex flex-col">
      {packagesArray.map((pack, index) => (
        <section
          key={index}
          id="sectionWrapper"
          className={`flex justify-start items-baseline w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <TupleCard ClassName="m-20" pack={pack} />
          <div className={`${index % 2 === 0 ? "mr-50" : "ml-50"} m-10`} id="textWrapper">
            <p>{pack.desc}</p>
          </div>
        </section>
      ))}
      </div>
      {/* Add a spacer at bottom for fixed footer if desired */}
      <div className="h-32 md:h-16" />
    </>
  );
}

