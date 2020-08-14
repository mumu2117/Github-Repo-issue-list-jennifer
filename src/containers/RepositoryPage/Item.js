import React from "react";

export default function Item({node}) {
  return <>
    <td style={{width: '1%'}}><i className="fa fa-chevron-right"></i></td>
    <td>
      <img className="d-inline mr-2 rounded-circle" width={20} height={20} src={node.repository.owner.avatarUrl}/>
      <a target="_blank"
         href={`https://github.com/${node.packageName}`}>
        {node.packageName}
      </a>
    </td>
    <td className="text-right">{node.requirements}</td>
  </>
}