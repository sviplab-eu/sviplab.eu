import Contacts from "./components/contacts";
import Hero from "./components/hero/page";
import Projects from "./components/Projects";
import Services from "./components/services";
import { Header } from "./components/header";

export default function Home() {


  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contacts />
    </main>
  )
}
