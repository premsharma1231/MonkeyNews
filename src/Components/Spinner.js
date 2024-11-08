import React, { Component } from "react";
// import Loading from "./Loading.gif";

export class Spinner extends Component {
  render() {
    return (
      // <div className="text-center flex align-middle justify-center mt-12 mb-12">
      //   <img src={Loading} alt="Loading" />
      // </div>
      <div className="flex row-auto justify-center align-middle mb-12">
      <div class="spinner-grow w-16 mr-1 h-16 text-primary" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      <div class="spinner-grow w-16 mr-1 h-16 text-secondary" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      <div class="spinner-grow w-16 mr-1 h-16 text-success" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      <div class="spinner-grow w-16 mr-1 h-16 text-danger" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      <div class="spinner-grow w-16 mr-1 h-16 text-warning" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      <div class="spinner-grow w-16 mr-1 h-16 text-info" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      <div class="spinner-grow w-16 h-16 text-dark" role="status">
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      </div>
    );
  }
}

export default Spinner;