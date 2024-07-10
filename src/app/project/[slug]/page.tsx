import ProjectHero from "@/app/components/projectHero";
import ProjectInfoWeb from "@/app/components/projectInfoWeb";
import ProjectInfo from "@/app/components/projectInfo";
import prisma from "@/app/lib/db";
import AllProjectsLink from "@/app/components/allProjectsLink";
import NotFound from "@/app/not-found";


export const revalidate = 30  // revalidate at most every minute

export default async function Project({ params }: any) {
    const { slug } = params;

    const project:any = await prisma.project.findFirst({
        where: {
            slug: slug
        },
        include: {
            images: true
        }
    });

    if (!project) {
        return(<NotFound/>);
    }

    // Ensure title is a string
    const projectTitle = project.title || "Untitled";
    const projectLink = project.url;
    const projectMediaSwitcher = project.imageInHero;
    const projectMediaUrl = project.heroMediaUrl;

    return (
        <>
            <ProjectHero hero={projectTitle}
                projectRemoteUrl={projectLink}
                imageInHero={projectMediaSwitcher}
                heroMediaUrl={projectMediaUrl}
            />
            <ProjectInfo project={project} />
            <ProjectInfoWeb project={project} />
            <AllProjectsLink />
        </>
    );
}
