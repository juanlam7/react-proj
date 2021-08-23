import React from "react";
import { Link, Route, Switch } from "wouter";
import './App.css';

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Header from "./components/Header";

import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
            <Route component={Home} path="/" />
            <Route component={Register} path="/register" />
            <Route component={Login} path="/login" />
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
