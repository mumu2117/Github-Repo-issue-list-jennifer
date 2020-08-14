import {gql} from '@apollo/client';

export const FETCH_DEPENDENCIES = gql`
  query ($owner: String!, $name: String!){
    repository(owner: $owner, name: $name) {
      id
      dependencyGraphManifests{
        edges{
          node{
            filename
            dependenciesCount
            dependencies(first: 100){
              edges{
                node{
                  packageName
                  packageManager
                  hasDependencies
                  requirements
                }
              }
            }
          }
        }
      }
    }
  }
`;