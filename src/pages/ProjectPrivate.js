import { useParams } from "react-router-dom";
import BtnGitHub from "../components/buttonGitHub/BtnGitHub";
import { projectHelper } from "../components/project/projectHelper";



const ProjectPrivate = () => {

    const {id} = useParams();
    const project = projectHelper[id]

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.img} alt={project.title} className="project-details__cover"/>

                   <BtnGitHub link={project.gitHubLink}/>

                </div>
            </div>
        </main>
     );
}
 
export default ProjectPrivate;