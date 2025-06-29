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

  function handleStartedAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject(){
     setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      };
    });
  }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartedAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8 ">
        <ProjectsSidebar
          onStartAddProject={handleStartedAddProject}
          projects={projectsState.projects}
        />
        {content}
      </main>


    </>
  );
}

export default App;
