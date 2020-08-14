import {gql} from '@apollo/client';

export const FETCH_REPOSITORY = gql`
  query ($owner: String!, $name: String!){
    repository(owner: $owner, name: $name) {
      id
      name
      owner {
        avatarUrl
        id
      }
      packages(first: 100){
        nodes{
          name
        }
      }
      dependencyGraphManifests{
        nodes{
          filename
          dependenciesCount
          dependencies(first: 100){
            nodes {
              packageName
              packageManager
              hasDependencies
              requirements
              repository{
                id
                name
                packages(last: 1) {
                  nodes {
                    latestVersion {
                      version
                    }
                  }
                }
                releases(last: 1) {
                  nodes {
                    id
                    name
                    tagName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;