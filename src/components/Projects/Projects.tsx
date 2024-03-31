import { useState } from "react";
import resumeBasicInfo from "../../../public/res_primaryLanguage.json";
import { ProjectDetailsModal } from "../ProjectDetailModal";
import { TProject } from "@/types";
import { Badge } from "react-bootstrap";
export const Projects = () => {
  const [deps, setDeps] = useState<TProject>(null);
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const detailsModalClose = () => setDetailsModalShow(false);

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{resumeBasicInfo.basic_info.section_name.projects}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {resumeBasicInfo.projects.map((project) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={project.title}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <Badge
                  style={{
                    position: "absolute",
                    top: -20,
                    right: 6,
                    zIndex: 99,
                    borderRadius: "2px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  {project.status}
                </Badge>
                <span className="portfolio-item d-block">
                  <div
                    className="foto"
                    onClick={() => {
                      setDetailsModalShow(true);
                      setDeps(project);
                    }}
                  >
                    <div>
                      <img
                        src={project.images[0]}
                        alt="projectImages"
                        height="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                          objectFit: "cover",
                        }}
                      />
                      <span className="project-date">{project.startDate}</span>
                      <br />
                      <p className="project-title-settings mt-3">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>

        {!!detailsModalShow && (
          <ProjectDetailsModal
            show={detailsModalShow}
            onHide={detailsModalClose}
            data={deps}
          />
        )}
      </div>
    </section>
  );
};
