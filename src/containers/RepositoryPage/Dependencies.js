import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import List from "./List";
import {NetworkStatus} from "@apollo/client";

export default function Dependencies({repo, networkStatus, loadMore}) {
  const [loadMoreDependencies, setLoadMoreDependencies] = useState('');
  return (
    <div className="py-3 bg-white">
      <Row>
        {repo.dependencyGraphManifests.nodes.map(node => (
          <Col key={node.id} md={6}>
            <List
              node={node}
              loading={networkStatus === NetworkStatus.fetchMore && node.filename === loadMoreDependencies}
              loadMore={() => {
                setLoadMoreDependencies(node.filename)
                loadMore(node)
              }}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}