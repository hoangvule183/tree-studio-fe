import { useEffect, useState } from "react";
import { useRouter } from "../../../routes/hook";
import ProjectsService from "../../../services/api/projects.service";
import { ProjectDetails } from "../../../types/entities";
import StackGrid, { transitions } from "react-stack-grid";
import { IPage } from "../../../types";

const { scaleDown } = transitions;

export default function Desktop() {
  const { page } = useRouter();
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (page.activePage === IPage.PROJECT_DETAILS) {
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
    }
  }, [page]);

  return (
    <div className="w-screen h-screen bg-[url(/images/portfolio/bg.png)] bg-fixed bg-cover bg-center overflow-y-auto flex flex-wrap justify-center pt-20 pb-[200px]">
      <StackGrid
        columnWidth={"50%"}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
        gutterWidth={20}
        gutterHeight={20}
        style={{
          width: "50%",
        }}
      >
        {project &&
          project.resource.child_resources.map(
            (r) =>
              !r.is_thumbnail && (
                  <img
                    onClick={() => setPreviewPhoto(r.resource_id)}
                    referrerPolicy="no-referrer"
                    src={`https://lh3.googleusercontent.com/d/${r.resource_id}`}
                    className="rounded-2xl shadow-md hover:brightness-50 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 transition-all"
                  />
              )
          )}
      </StackGrid>
      {previewPhoto && (
        <div
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              setPreviewPhoto(null);
            }
          }}
          className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] z-[500] flex items-center justify-center animate-init-page"
        >
          <img
            referrerPolicy="no-referrer"
            src={`https://lh3.googleusercontent.com/d/${previewPhoto}`}
            className="rounded-xl shadow-xl select-none max-h-[60vh]"
          />
        </div>
      )}
    </div>
  );
}
