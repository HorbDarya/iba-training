import "./Card.css"
import React from "react";
import {AiOutlineClose, AiOutlineEdit, AiOutlineSave} from "react-icons/ai";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            currentTitle: "Card title",
            currentText: "Text",
            titleCount: 0,
            textCount:0,
            prevTitle: "Card title",
            prevText: "text"
        };
        this.hideCheckBoxChange = this.hideCheckBoxChange.bind(this);
        this.setCurrentText = this.setCurrentText.bind(this);
        this.setCurrentTitle = this.setCurrentTitle.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeText = this.changeText.bind(this);
        this.changeTitle = this.changeTitle.bind(this);

    }

    render() {
        const classes = ["cardStyle", "card"]

        if(this.state.checked){
            classes.push("marked")
        }

        return (
            <div className={classes.join(" ")}>
                <div className="card-body">
                    <div hidden={!this.state.showing}>
                        <input type="text" size="40px" value={this.state.currentTitle} onChange={this.changeTitle}/>
                        <button className="saveButton" onClick={this.save}><AiOutlineSave/></button>
                        <button className="closeButton" onClick={this.cancel}><AiOutlineClose/></button>
                        <textarea value={this.state.currentText} onChange={this.changeText}/>
                    </div>
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

    save() {
        this.setState({titleCount: 0});
        this.setState({textCount: 0});
        this.setState({prevText: this.state.currentText});
        this.setState({prevTitle: this.state.currentTitle});
        this.hideCheckBoxChange();
    }

    changeTitle(event) {
        if(this.state.titleCount === 0){
            this.setState({prevTitle: this.state.currentTitle})
        }
        this.setState({currentTitle: event.target.value})
        this.setState({titleCount: this.state.titleCount + 1})
    }

    changeText(event) {
        if(this.state.textCount === 0){
            this.setState({prevText: this.state.currentText})
        }
        this.setState({currentText: event.target.value});
        this.setState({textCount: this.state.textCount + 1});
    }

    cancel() {
        this.hideCheckBoxChange();
        this.setState({currentText: this.state.prevText});
        this.setState({currentTitle: this.state.prevTitle});
    }

}

export default Card;