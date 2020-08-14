import React from "react";
import {Media} from "react-bootstrap";

export default function Repo({repo}) {
  return <div className="mb-3 pt-3 pb-4 ">
    <div className="container">
      <Media>
        <img
          width={100}
          height={100}
          className="mr-3"
          src={repo.owner.avatarUrl}
          alt=""
        />
        <Media.Body>
          <h5>{repo.name}</h5>
          <p>
            {repo.description}
          </p>
          <div className="small text-muted">
            <span className="mr-4"><i className="fa fa-user"></i> {repo.owner.name}</span>
            <span><i className="fa fa-link"></i> {repo.homepageUrl}</span>
          </div>
        </Media.Body>
      </Media>
    </div>
  </div>
}