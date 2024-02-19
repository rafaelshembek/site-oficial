import React from "react";
import UseHome from './ui/home';
import UnderConstruction from "./ui/underConstruction";
import UiPageDevice from "./ui/UiPageDevice";
import UiPageWeb from "./ui/UiPageWeb";
import UiPageJogo from "./ui/UiPageJogo";

export default function Home() {
  return (
    <>
      <UseHome />
      <UiPageDevice />
      <UiPageWeb />
      <UiPageJogo />
      {/* <UnderConstruction /> */}
    </>
  )
}
