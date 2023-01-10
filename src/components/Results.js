import React from "react";

function Results({ repos, name, getRepos }) {
  return (
    <div className="repos">
      <h1 className="repo-header">Repositories</h1>
      <ul className="repo-container">
        {/* here, i added repos to the condition. so the map will only happen if all condition are true */}
        {repos &&
          repos[0] &&
          repos.map((repo, i) => (
            <a
              href={`https://github.com/${name}/${repo.name}`}
              key={i}
              target="_blank"
              rel="noreferrer"
            >
              <li className="repo-card">
                <h4 className="repo-name">{repo.name}</h4>
              </li>
            </a>
          ))}
      </ul>
      <div className="buttons">
        <button onClick={() => getRepos(1)} className="previous">
          Previous
        </button>
        <button onClick={() => getRepos(2)} className="next">
          Next
        </button>
      </div>
    </div>
  );
}
export default Results;
