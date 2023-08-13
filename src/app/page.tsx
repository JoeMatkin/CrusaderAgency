"use client";

import Image from "next/image";
import { Navbar } from "@/components";
import MuxVideo from "@mux/mux-video-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <MuxVideo
        className="w-full h-full absolute object-cover"
        // playbackId={video?.playbackId}
        src="https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/720p/file.mp4?loc=external&signature=b0c78c25f2f55ae3f00dca4e07238b15d319799aae345f3fbfce5a8d56c6692e"
        loop
        autoPlay
        muted
      />

      <div className="w-[100vw] h-[100vh] absolute flex justify-center items-center text-white">
        <div className="absolute z-10  ml-[-33.33%]">
          <h1 className="text-[1.5rem] uppercase mb-3">
            We build <span className="text-gray-500">exceptional</span> brands
            <br></br> for industry{" "}
            <span className="text-gray-500">leaders</span>
          </h1>
          <p className="text-white max-w-lg">
            a relentless commitment to pushing boundaries in design. Like the
            historical crusaders of old who pursued their ideals with fervor.
          </p>
        </div>

        <div className="left-8 bottom-8 absolute z-10 text-white max-w-md">
          <div className="mb-4">
            <h3>Crusader</h3>
            <div className="italic text-[13px] font-light">[noun]</div>
          </div>
          <p className="border-t-[0.25px] border-white pt-3 font-light text-[13px]">
            a relentless commitment to pushing boundaries in design. Like the
            historical crusaders of old who pursued their ideals with fervor,
            our agency charges forward to create impactful digital experiences,
            fearlessly conquering creative challenges to achieve our clients.
            goals.
          </p>
        </div>
        <div className="right-8 bottom-8 absolute z-10 text-white">
          <ul className="flex flex-row gap-x-2 font-light text-[13px]">
            <li>IG</li>
            <li>FB</li>
            <li>LI</li>
            <li>YT</li>
            <li>BE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
