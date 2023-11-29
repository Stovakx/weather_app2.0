"use client";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] md:flex">
        <Sidebar />
        <Dashboard/>
      </main>
    </>
  );
}
