import React from "react";
import RepoCard from "./RepoCard";

const RepoList = (props) => {
  const { repos } = props;
  return (
    <div>
      {repos.map((reposo) => (
        <RepoCard key={reposo.id} reposo={reposo} />
      ))}
    </div>
  );
};

export default RepoList;
