const ProjectInfo = ({ project }: any) => {
    if (!project || !project.images || project.images.length === 0) {
      return <div>No images available for this project.</div>;
    }
  
    return (
      <div>
        <h2>Project Details</h2>
        <div>
          <h3>Images</h3>
          {project.images.map((image: any) => (
            <div key={image.id}>
              <img src={image.url} alt={image.alt} />
              <p>Image ID: {image.id}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectInfo;
  