import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Search({owner = "", name = ""}) {
  const [state, setState] = useState({owner, name});
  return (
    <Form inline>
      <Form.Label srOnly>
        Owner
      </Form.Label>
      <Form.Control
        type="text"
        className="mb-2 mr-sm-2"
        placeholder="Owner"
        value={state.owner}
        onChange={evt => setState({...state, owner: evt.currentTarget.value.trim()})}
      />
      <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
        Repository name
      </Form.Label>
      <Form.Control
        type="text"
        className="mb-2 mr-sm-2"
        placeholder="Repository name"
        value={state.name}
        onChange={evt => setState({...state, name: evt.currentTarget.value.trim()})}
      />
      <Link className={`btn btn-primary mb-2 ${!state.owner || !state.name ? 'disabled' : ''}`}
            to={`/${state.owner}/${state.name}/`}>
        Fetch dependencies
      </Link>
    </Form>
  )
    ;
}

export default Search;
