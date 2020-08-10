import { gql } from '@apollo/client';

export const MISSION_NAMES = gql`
query missions{
    missions {
      name
    }
  }
`;

export const ADD_USER =gql`
mutation insert_users($name: String!){
  insert_users(
    objects: {
      name:  $name,
    }
  ) {
    returning {
      id
      name
    }
  }
}
`