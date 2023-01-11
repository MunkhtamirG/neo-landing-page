import React from "react";
import Navbar from "./Navbar";
import NavigationBar from "./NavigationBar";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full max-w-[1280px] m-auto">
      <div className="fixed w-full h-screen left-0 bg-layer"></div>
      <Navbar />
      {children}
      <NavigationBar />
    </div>
  );
}
