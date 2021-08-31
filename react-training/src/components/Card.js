import "./Card.css"
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import EditCard from "./EditCard";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            currentTitle: "Card title",
            currentText: "Text",

        };
        this.hideCheckBoxChange = this.hideCheckBoxChange.bind(this);
        this.setCurrentText = this.setCurrentText.bind(this);
        this.setCurrentTitle = this.setCurrentTitle.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    render() {
        const classes = ["cardStyle", "card"]

        if(this.state.checked){
            classes.push("marked")
        }

        return (
            <div className={classes.join(" ")}>
                <div className="card-body">
                    <EditCard showing={!this.state.showing} hide={this.hideCheckBoxChange}
                        setCurrentText={this.setCurrentText} setCurrentTitle={this.setCurrentTitle}
                        currentTitle={this.state.currentTitle} currentText={this.state.currentText}/>
                    <div className="cardTitle" hidden={this.state.showing}>
                        <div className="title">
                            <h5 style={{paddingTop: "3px"}}>{this.state.currentTitle}</h5>
                        </div>
                        <button className="editButton" onClick={this.hideCheckBoxChange}> <AiOutlineEdit/> </button>
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange}/>
                    </div>
                    <div className="card-text">
                        <p hidden={this.state.showing}>{this.state.currentText}</p>
                    </div>
                </div>
            </div>
        );
    }

    setCurrentText(text){
        this.setState({currentText: text});
    }

    setCurrentTitle(text){
        this.setState({currentTitle: text});
    }

    handleCheckboxChange() {
        this.setState({checked: !this.state.checked});
    }

    hideCheckBoxChange() {
        this.setState({showing: !this.state.showing});
        this.setState({checked: false});
    }

}

export default Card;