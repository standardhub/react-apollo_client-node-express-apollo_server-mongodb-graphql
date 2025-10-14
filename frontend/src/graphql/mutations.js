import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation Register($name: String!, $email: String!, $password:String!) {
        register(name: $name, email: $email, password: $password) {
            id
            name
            email
            token
        }
    }
`;

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            name
            email
            token
        }
    }
`;