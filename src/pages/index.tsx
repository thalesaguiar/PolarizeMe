import Head from "next/head";
import React from "react";
import Image from "next/image";
import Menu from "../components/Menu";
import PolaroidMaker from "../components/PolaroidMaker";

export default function Home() {
  return (
    <div>
      <Menu />
      <PolaroidMaker />
    </div>
  );
}
