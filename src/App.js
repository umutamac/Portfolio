import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills.js";


import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <Router /*basename="/Portfolio"*/>
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/skills" component={Skills} />
                    <Route component={NoMatch} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}

export default App;