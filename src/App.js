import React from "react";
import { Link, Route, Switch } from "wouter";
import './App.css';

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Feed from "./pages/Feed";

import Header from "./components/Header";

import { UserContextProvider } from "./context/UserContext";
import { ReleaseContextProvider } from "./context/ReleaseContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
            <ReleaseContextProvider>
              <Route component={Home} path="/" />
              <Route component={Feed} path="/feed" />
              <Route component={Register} path="/register" />
              <Route component={Login} path="/login" />
            </ReleaseContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
