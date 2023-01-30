import Project from "../components/project/Project";
import { projectHelper } from "../components/project/projectHelper";



const ProjectsPage = () => {
    return ( 
         <main className="section">
            <div className="container">
                <h2 className="title-1">My Projects</h2>
                <ul className="projects">

                    {projectHelper.map((p , index) => {
                        return(
                            <Project 
                                     key={index} 
                                     title={p.title}
                                     img={p.img}
                                     index={index}
                                     />
                        )
                    })}

                </ul>
            </div>
        </main>
     );
}
 
export default ProjectsPage;