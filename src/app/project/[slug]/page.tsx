import ProjectHero from "@/app/components/projectHero";
import ProjectInfoWeb from "@/app/components/projectInfoWeb";
import ProjectInfo from "@/app/components/projectInfo";
import prisma from "@/app/lib/db";
import AllProjectsLink from "@/app/components/allProjectsLink";
import NotFound from "@/app/not-found";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'

export const revalidate = 120  // revalidate at most every minute

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
    const projectImages = project.images;

    return (
        <>
            <ProjectHero hero={projectTitle}
                projectRemoteUrl={projectLink}
                imageInHero={projectMediaSwitcher}
                heroMediaUrl={projectMediaUrl}
            />
            <ProjectInfo project={project} />
            <div className="grid grid-cols-1 gap-10 pt-44 md:grid-cols-2">
            {project.images.map((image: any, index:any) => (
                <div className="h-auto max-w-full rounded-lg" key={index}>
                <Image
                src={image.url}
                alt={image.alt}
                className=""
                key={image.id}
                width={1000}
                height={1000}
              />

                </div>
            ))}
                </div>

            <AllProjectsLink />
        </>
    );
}
  
  export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const { slug } = params;

    const project:any = await prisma.project.findFirst({
        where: {
            slug: slug
        }
    });
   
    return {
        title: project?.metatitle + " | SVIPLAB Development company",
        description: project?.metadesc || "Trust your project to our app development company.",
        
    }
  }