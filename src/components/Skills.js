import React, { Component } from "react";
import GreetingLottie from "../components/DisplayLottie";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      
      var skillSections = this.props.sharedSkills.map(function (section, i) {
        
        var skills = section.icons.map(function (skills, i) {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skills.class} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "40%", marginTop: "4px" }}
                    >
                      {skills.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        })    
        
        return (
          <div  style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2 className="my-4 my-md-5">
              <span className="text-white">{section.section}</span>
            </h2>
            {skills}
          </div>
        )
      }) 
    
    }

    return (
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title my-4 my-md-5">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-sm-11 col-md-4 mx-auto ">
          <GreetingLottie animationPath="/lottie/webdev.json" />
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skillSections}</ul>
        </div>
      </div>
    );
  }
}

export default Skills;
