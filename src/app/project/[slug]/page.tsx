import ProjectHero from "@/app/components/projectHero/page";
import ProjectInfo from "@/app/components/projectInfo/page";
import prisma from "@/app/lib/db";


export const revalidate = 1  // revalidate at most every minute

export default async function Project({ params }: any) {
    const { slug } = params;

    const project = await prisma.project.findFirst({
        where: {
            slug: slug
        },
        include: {
            images: true
        }
    });

    console.log(project)
    if (!project) {
        return( <div>Project not found</div>);
    }

    // Ensure title is a string
    const projectTitle = project.title || "";

    return (
        <>
            <ProjectHero hero={projectTitle} />
            <ProjectInfo project={project} />
        </>
    );
}
