import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import GreetingLottie from "../components/DisplayLottie";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="portfolio-item"
            key={projects.title}
            onClick={() => detailsModalShow(projects)}
          >
            <div>
              <img
                src={projects.images[0]}
                alt={projects.title}
              />
              <span className="project-date">{projects.startDate}</span>
            </div>
            <p className="project-title-settings">{projects.title}</p>
          </div>
        );
      });
    }

    return (
      <div className="col-md-12">
        <h1 className="section-title my-4 my-md-5" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="projects-grid px-0 col-lg-9">
            <div className="portfolio-item">
              <div>
                <GreetingLottie animationPath="/lottie/build.json" />
                <span class="project-date">Today</span>
              </div>
              <p className="project-title-settings">
                I'm keep coding
              </p>
            </div>
            {projects}
          </div>
        </div>
        <ProjectDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
        />
      </div>
    );
  }
}

export default Projects;
