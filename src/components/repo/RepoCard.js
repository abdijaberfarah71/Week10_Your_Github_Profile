import React from "react";

function RepoCard(props) {
  const { reposo } = props;

  return (
    <div className="flex items-center gap-3 px-2 py-3 mt-2 bg-white rounded border w-full ">
      <div className="leading-3 mt-1">
        <p className=" text-sm font-bold text-slate-700">{reposo.name}</p>

        <p className="text-sm font-bold text-slate-700">
          Language : {reposo.language}
        </p>
        <p className="text-sm font-bold text-slate-700">
          Date : {reposo.created_at}
        </p>
      </div>
    </div>
  );
}

export default RepoCard;
