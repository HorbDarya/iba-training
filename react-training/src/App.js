import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card";
import React from 'react';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App Name</h1>
                </div>
                <div>
                    <Card state={this.state} th={this}></Card>
                </div>
            </div>
        );
    }
}

export default App;
