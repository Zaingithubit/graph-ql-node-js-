const  {gql}= require("apollo-server")

const typeDefs = gql`

type User{
id: ID!
name: String!
userName: String!
nationality:  Nationality!
age: Int!
friends: [User]
}

enum Nationality {
    USA
    Canada
    UK
    Australia
    Germany
    China
}
type Movie{
id: ID!
name: String!
yearOfPublication: Int!
isInTheater: Boolean!
}

type Query {
users: [User!]!
user(id: ID!): User!
movies:[Movie!]!
movie(name: String!): Movie!  
}
input InputUserCreate{
name: String!
userName: String!
nationality:  Nationality
age: Int!

}
type Mutation {
createUser(user: InputUserCreate!): User
}
`
module.exports = {typeDefs}