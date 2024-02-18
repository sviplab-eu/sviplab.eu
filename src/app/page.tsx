import Contacts from "./components/contacts";
import Hero from "./components/hero/page";
import Projects from "./components/Projects";
import PreloaderMod from "./components/PreloaderMod";
import { cookies } from "next/headers";

export default function Home() {

  const cookiesList = cookies();
  const hasCookie = cookiesList.has('loader')


  return (
    <main className="min-h-screen">
      {hasCookie ? null : <PreloaderMod />}
      <Hero />
      <Projects />
      <Contacts />
    </main>
  )
}
