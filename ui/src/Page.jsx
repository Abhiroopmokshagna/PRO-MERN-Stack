import React from "react";
import Contents from "./Contents.jsx";

function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      {" | "}
      <a href="/#/issues">Issue List</a>
      {" | "}
      <a href="/#/report">Report</a>
    </nav>
  );
}
const Page = () => {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
};

export default Page;
