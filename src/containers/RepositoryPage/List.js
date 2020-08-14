import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import Item from "./Item";

export default function List({node, loading, loadMore}) {
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
        {node.dependencies.pageInfo.hasNextPage && (
          <tfoot>
          <tr>
            <td colSpan="100">
              <div className="text-center pt-2">
                <div className="small mb-1">{node.dependenciesCount - node.dependencies.nodes.length} more dependencies</div>
                <Button size={"sm"} onClick={loadMore} disabled={loading}>{loading ? <><i
                  className="fa fa-spin fa-spinner"></i> Loading ...</> : 'Load more ...'} </Button></div>
            </td>
          </tr>
          </tfoot>
        )}
      </Table>

    </Card.Body>
  </Card>
}