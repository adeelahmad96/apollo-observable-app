/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: insert_users
// ====================================================

export interface insert_users_insert_users_returning {
  __typename: "users";
  id: any;
  name: string | null;
}

export interface insert_users_insert_users {
  __typename: "users_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: insert_users_insert_users_returning[];
}

export interface insert_users {
  /**
   * insert data into the table: "users"
   */
  insert_users: insert_users_insert_users | null;
}
