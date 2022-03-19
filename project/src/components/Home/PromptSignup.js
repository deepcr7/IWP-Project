import React from "react";
import { NavLink } from "react-router-dom";

const PromptSignup = props => {
  return (
    <div className="jumbotron marginRow">
      <div className="container-fluid text-center">
        <br />
        <br />
        <br />
        <p>A Project Management and Scheduling Application is one of the most quintessential features of any Software Development Team.</p>
        <p>
        Any Software Product developed is always the result of a thorough and detailed development process
        </p>
        <p>This involves various criteria right from Project Planning to Budgeting to Risk Analysis.</p>
        <button className="btn btn-lg btn-dark-green">
          <NavLink to="/signup" className="text-white">
            <i className="fa fa-sign-in" aria-hidden="true"/> SignUp for Free
          </NavLink>
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PromptSignup;
