import React from 'react';
import {Breadcrumb, Nav, Navbar} from 'react-bootstrap';
import Search from "../Search";

function Layout({children, ...rest}) {
  const {owner, name} = rest.match.params;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Github clone</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Search owner={owner} name={name}/>
      </Navbar>
      <div className="bg-light ">
        <Breadcrumb>
          <Breadcrumb.Item target={'_blank'} href={`https://github.com/${owner}`}>
            <i className="fa fa-github text-dark"></i> {owner}
          </Breadcrumb.Item>
          <Breadcrumb.Item target={'_blank'} href={`https://github.com/${owner}/${name}`}>
            {name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </>
  )
    ;
}

export default Layout;
