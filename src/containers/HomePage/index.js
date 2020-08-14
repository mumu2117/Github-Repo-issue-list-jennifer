import React, {useEffect} from 'react';
import {NetworkStatus, useApolloClient, useQuery} from "@apollo/client";
import {FETCH_DEPENDENCIES} from "./queries";
import List from "./List";
import {Alert} from 'react-bootstrap';

function HomePage(props) {
  const {owner = '', name = ''} = props.match.params;
  const client = useApolloClient();
  client.link.options.headers.Accept = 'application/vnd.github.hawkgirl-preview+json';
  let {loading, error, data, refetch, networkStatus} = useQuery(FETCH_DEPENDENCIES, {
    client,
    notifyOnNetworkStatusChange: true,
    variables: {owner, name}
  });

  useEffect(() => {
    refetch({owner, name})
  }, [owner, name])

  if (!owner || !name) {
    return (
      <Alert variant="info">
        Fetch dependencies of <b>Owner</b> and <b>Repository name</b> by the form
      </Alert>
    );
  }
  
  if (loading || networkStatus === NetworkStatus.refetch) return <p>Fetching...</p>;
  if (error) return (
    <Alert variant="danger">
      <h5><i className="fa fa-warning"></i> Error !!!</h5>
      {error.graphQLErrors.map(({message}, i) => (
        <div key={i}>{message}</div>
      ))}
    </Alert>
  );
  return <>
    <h3>Dependency graph</h3>
    <hr/>
    {data.repository.dependencyGraphManifests.edges.map((edge, index) => (
      <List key={index.toString()} node={edge.node}/>
    ))}
  </>
}

export default HomePage;