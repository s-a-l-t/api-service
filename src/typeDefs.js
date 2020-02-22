import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    tenant(id: ID!): Tenant
  }

  type Tenant {
    id: ID
  }
`;

export default typeDefs;
