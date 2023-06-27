import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills.js";


import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./app.css";

function App() {
    return (
        <Router /*basename="/Portfolio"*/>
            <div>
                <Header />
                <main>
                    <Sidebar />

                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/skills" component={Skills} />
                        <Route component={NoMatch} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;