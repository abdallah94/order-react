import React, {Component} from "react";
import "./App.css";
import {DashboardContainer} from "./shared";

class App extends Component {
    render() {
        return (
            <div>
                <DashboardContainer/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
