import Projects from "@/app/projects/projects.client";
import AllProjectsLink from "../allProjectsLink";
import prisma from "@/app/lib/db";


export const revalidate = 5  // revalidate at most every minute


export default async function ProjectsOnHome() {
  const project = await prisma.project.findMany({
    take: 4
  });

  return (<>
        <Projects projects={project} />
        <AllProjectsLink/>
    </>);
}
