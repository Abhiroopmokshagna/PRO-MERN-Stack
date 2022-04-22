import React from "react";

const IssueEdit = ({ match }) => {
  const { id } = match.params;
  return <div>{`Placeholder for editing issue ${id}`}</div>;
};

export default IssueEdit;
