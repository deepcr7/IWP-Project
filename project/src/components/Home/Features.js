import React from "react";

const Features = () => {
  return (
    <div className="bg-indigo text-white">
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-9">
            <div className="row justifiy-content-end">
              <div className="col-md-8">
                <span>
                  <img
                    src="./img/firstinfo.jpg"
                    className="img-fluid ml-auto"
                    alt="Feature 1"
                  />
                </span>
              </div>
              <div className="col-md-4 my-auto text-left">
                <p>There is a need for a portal that provides a few of the essential features of a Project Management System, while keeping it informative and ensuring user-friendliness at the same time. </p>
                <p>Through Our Project, we would like to develop a Product that models a Project Management and Scheduling Application which includes features like Management and Scheduling of tasks from a Project Managers Perspective.  </p>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4 my-auto text-right">
                <p>In Addition to Scheduling, we will also be developing a feature to visualize the progress of user’s tasks.</p>
                <p>The Product will be modelled around the Agile Mode of Project Management and its features. </p>
                <p>It is a web-based portal or application that can be used by software companies, project coordinators and project guides.</p>
              </div>
              <div className="col-md-8">
                <span>
                  <img
                    src="./img/secondinfo.jpg"
                    className="img-fluid"
                    alt="Feature 2"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Features;
