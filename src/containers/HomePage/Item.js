import React from "react";
import {Link} from "react-router-dom";

export default function Item({node}) {
  return <>
    <td style={{width:'1%'}}><i className="fa fa-chevron-right"></i></td>
    <td>
      <Link target="_blank"
            to={`https://github.com/${node.packageName}`}>
        {node.packageName}
      </Link>
    </td>
    <td className="text-right">{node.requirements}</td>
  </>
}