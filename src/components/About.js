import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var passions = this.props.resumeBasicInfo.passions.map(passion => {
        return (<div className="col-md-4 center">
          <div className="polaroid">
            <span style={{ cursor: "auto" }}>
              <img
                src={'images/' + passion.image}
                alt="Avatar placeholder"
              />
              <h2 className="mt-4">
                {passion.passion}
              </h2>
            </span>
          </div>
        </div>)
      });
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <div className="col-md-12">
        <h1 style={{ color: "black" }} className="section-title my-4 my-md-5">
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="px-0 col-md-6 center">
            <div className="px-0 col-md-8">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row center mx-auto mb-5">
          <div className="row px-0 col-12 col-xl-8 center">
            {passions}
          </div>
        </div>
          {/* <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={angularIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={vueIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div> */}
      </div>
    );
  }
}

export default About;
