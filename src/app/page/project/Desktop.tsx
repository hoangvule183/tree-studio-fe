import { useEffect, useState } from "react";
import { useRouter } from "../../../routes/hook";
import ProjectsService from "../../../services/api/projects.service";
import { ProjectDetails } from "../../../types/entities";

export default function Desktop() {
  const { page } = useRouter();
  const [project, setProject] = useState<ProjectDetails | null>(null);

  useEffect(() => {
    const getProjectById = async (id: number) => {
      const response = await ProjectsService.getById(id);
      if (response.status === "error") return;
      setProject(response.data);
    };
    const url = window.location.pathname;
    const projectId = url.split("/")[2];
    if (projectId) {
      getProjectById(parseInt(projectId));
    }
  }, []);

  const onClick = () => {};

  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-wrap justify-center pt-20 pb-[200px]">
    <div className="w-[55%] mx-auto flex flex-wrap justify-between">
      {project &&
        project.resource.child_resources.map((r) => !r.is_thumbnail && (
          <img
           onClick={() => alert(r.id)}
            referrerPolicy="no-referrer"
            src={`https://lh3.googleusercontent.com/d/${r.resource_id}`}
            className="w-[49%] pointer-events-none select-none mb-5"
          />
        ))}
    </div>
    </div>
  );
}
