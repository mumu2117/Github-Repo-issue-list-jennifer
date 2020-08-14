/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {Route} from 'react-router-dom';
import Layout from "../../components/Layout";

export default function AppRoute({
                                   component: Component,
                                   template = 'default',
                                   loginRequired,
                                   onlyRoles,
                                   ...rest
                                 }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Layout {...routeProps}>
          <Component {...routeProps} />
        </Layout>
      )
      }
    />
  );
}
