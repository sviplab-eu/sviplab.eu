import Image from "next/image";

const ProjectInfo = ({ project }: any) => {
  if (!project || !project.images || project.images.length === 0) {
    return <div>No images available for this project.</div>;
  }

  return (
    <>
      <div className="pt-40">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[344px] max-w-[602px] md:h-[588px] md:max-w-[1024px]">
          <div className="rounded-lg overflow-hidden h-[312px] md:h-[556px] bg-white dark:bg-gray-800">

            {/** IF IMAGE **/}
            {project.images.map((image: any) => (
              <Image
                src={image.url}
                alt={image.alt}
                className="dark:hidden h-[312px] md:h-[556px] w-full"
                key={image.id}
                width={100}
                height={100}
              />
            ))}

            {/** IF VIDEO **/}
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover rounded-lg">
              <source src="/images/showreel.mp4" type="video/mp4" />
              Your browser does&apos;nt support video format
            </video>
            
          </div>
        </div>
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[34px] max-w-[702px] md:h-[42px] md:max-w-[1194px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[112px] h-[10px] md:w-[192px] md:h-[16px] bg-gray-800"></div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
