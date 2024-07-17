import { Header } from "../components/header";
import Projects from "./projects.client";
import prisma from "@/app/lib/db";

export const revalidate = 120  // revalidate at most every minute

export default async function ProjectsServer() {
  const project = await prisma.project.findMany({
    include: {
      services: {
      }
    }
  });

  return (<>
    <Header />
    
   <Projects projects={project} />
  </>);
}
