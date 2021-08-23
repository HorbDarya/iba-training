import './Card.css'
import React from "react";

class Card extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: "white",
            }
        };
    }

    render() {
        return (
            <div className="cardStyle card" style={this.state.style}>
                <div className="card-body">
                    <h5 className="card-title">Card title
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this)}/>
                    </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>
        );
    }

    handleCheckboxChange() {
        let color;

        if(this.state.style.backgroundColor === "white"){
            color = "lightsteelblue"
        }else { color = "white"}

        this.setState({checked: !this.state.checked});
        this.setState({ style: { backgroundColor: color}});

    }
}

export default Card;