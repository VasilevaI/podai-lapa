import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {
    async getAnimals(responseFields) {
        const response = await graphQLClient.query({
            query: gql `
                query {
                    animals {
                        ${responseFields}
                    }
                }           `
        })
        return response;
    },
    async addAnimal(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($name: String!, $kind: String!, $imageUrl: String!, $sex: String!, $age: Float!, $city: String!, $author: String!, $phone: String!, $info: String!){
                addAnimal(name: $name, kind: $kind, imageUrl: $imageUrl, sex: $sex, age: $age, city: $city, author: $author,  phone:$phone,  info: $info){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    async deleteAnimal(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($_id: String!){
                deleteAnimal(_id: $_id){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    async editUser(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `
            mutation($_id: String!, $firstName: String!, $lastName: String!, $password: String!){
               editUser(_id: $_id, firstName: $firstName, lastName: $lastName, password: $password){
                    ${responseFields}
               }
           }`,
           variables
        })
        return response;
    },
    async addUser(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($firstName: String!, $lastName: String!, $email: String!, $userType: String!, $password: String!){
                addUser(firstName: $firstName, lastName: $lastName, email: $email, userType: $userType, password: $password)
            }`,
            variables
        })
        return response;
    },

    async login(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($email: String!, $password: String!){
                login(email: $email, password: $password)
            }`,
            variables
        })
        return response;
    },
    async currentUser(responseFields = "_id firstName lastName email userType animals {name}"){
        const response = await graphQLClient.query({
            query: gql `
                query {
                    currentUser {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    }


} 