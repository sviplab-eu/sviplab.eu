import ContactForm from "@/app/components/contactForm"
import ProjectHero from "@/app/components/projectHero/page"
import ProjectInfo from "@/app/components/projectInfo/page"
import { fetchProjectBySlug } from "@/app/db/queries/project"

export const revalidate = 3600 // revalidate at most every hour

export default async function Project({ params }: { params: { slug: string } }) {

    const project = await fetchProjectBySlug(params.slug)


    return (<>
        <ProjectHero />
        <ProjectInfo />

        
        Project title from DB
        {project?.title}

        <ContactForm />
    </>)
}