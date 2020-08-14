import React from "react";

export default function Item({node}) {
  const {releases} = node.repository || {releases: {}};
  return <>
    <td style={{width: '1%'}}><i className="fa fa-chevron-right"></i></td>
    <td>
      <a target="_blank"
         href={`https://github.com/${node.packageName}`}>
        {node.packageName}
      </a>
    </td>
    <td className="text-right">{node.requirements}</td>
    <td className="text-right">{releases.nodes && releases.nodes.length > 0 ? (releases.nodes[0].name || releases.nodes[0].tagName) : ''}</td>
  </>
}