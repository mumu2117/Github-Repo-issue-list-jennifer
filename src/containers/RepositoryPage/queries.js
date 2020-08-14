import {gql} from '@apollo/client';

export const FETCH_REPOSITORY = gql`
  query ($owner: String!, $name: String!, $cursor: String){
    repository(owner: $owner, name: $name) {
      id
      name
      description
      homepageUrl
      owner {
        avatarUrl
        id
        ... on Organization {
          id
          email
          name
          avatarUrl
        }
        ... on User {
          id
          email
          name
        }
      }
      vulnerabilityAlerts(last: 10) {
        nodes {
          id
          vulnerableRequirements
          vulnerableManifestPath
          securityVulnerability {
            package {
              name
              ecosystem
            }
            vulnerableVersionRange
            severity
          }
          createdAt
        }
      }
      dependencyGraphManifests{
        nodes{
          id
          filename
          dependenciesCount
          dependencies(first: 5, after: $cursor){
            nodes {
              packageName
              packageManager
              hasDependencies
              requirements
              repository{
                id
                name
                owner {
                  avatarUrl
                  id
                  ... on Organization {
                    id
                    email
                    name
                    avatarUrl
                  }
                  ... on User {
                    id
                    email
                    name
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    }
  }
`;