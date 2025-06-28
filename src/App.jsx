import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectState] = useState({
    currentAction: 'nothing-selected',
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartedAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:null,

      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const NewProject = {
        ...projectData,
        id: Math.random()
      };
      return{
        ...prevState,
        projects: [...prevState.projects,newProject]
      }
    })
  }

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject/>
  }else if( projectsState.selectedProjectId === undefined){
    content =<NoProjectSelected onStartAddProject={handleStartedAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8 ">
        <ProjectsSidebar onStartAddProject={handleStartedAddProject} />
        {content}
      </main>


    </>
  );
}

export default App;
