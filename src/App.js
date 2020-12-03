import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="/react-portfolio">
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route component={NoMatch} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}

export default App;