import Contacts from "./components/contacts";
import Hero from "./components/hero/page";
import Services from "./components/services";
import { Header } from "./components/header";
import ProjectsOnHome from "./components/projectsOnHome";


export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <div className='py-16 text-center'>
        <span className='text-5xl'>
          Take a look at what we've done for our clients
        </span>
      </div>
      <ProjectsOnHome />
      <Contacts />
    </main>
  )
}
