import React from 'react';
import {Alert} from "react-bootstrap";

function Loading({loading, error, children}) {
  if (loading) {
    return <div className="p-5"><h3 className="text-center"><i className="fa fa-spin fa-spinner"></i> Loading ...</h3>
    </div>
  }
  if (error) {
    return (
      <div className="p-5">
        <Alert variant="danger">
          <h5><i className="fa fa-warning"></i> Error !!!</h5>
          {error.graphQLErrors.map(({message}, i) => (
            <div key={i}>{message}</div>
          ))}
        </Alert>
      </div>
    )
  }

  return <>{children}</>
}

export default Loading;
