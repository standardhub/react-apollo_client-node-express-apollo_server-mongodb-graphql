import './App.css';
import React from 'react';
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./apolloClient";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "20px" }}>
        <Register></Register>
        <hr />
        <Login></Login>
      </div>
    </ApolloProvider>
  );
}

export default App;
