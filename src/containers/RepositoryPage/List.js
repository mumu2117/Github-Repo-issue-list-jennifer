import React from "react";
import {Card, Table} from "react-bootstrap";
import Item from "./Item";

export default function List({node}) {
  return <Card className="mb-3">
    <Card.Header><i className="fa fa-cubes"></i> Dependencies defined in <b>{node.filename}</b> <span
      className="badge badge-dark">{node.dependenciesCount}</span></Card.Header>
    <Card.Body className="p-0">
      <Table hover>
        <tbody>
        {node.dependencies.nodes.map(dependency => (
          <tr key={`${dependency.packageManager}/${dependency.packageName}`}><Item node={dependency}/>
          </tr>
        ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
}