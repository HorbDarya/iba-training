import "./Card.css"
import React from "react";
import {AiOutlineClose, AiOutlineEdit, AiOutlineSave} from "react-icons/ai";
import cn from "classnames";

class Card extends React.Component {

    render() {
        const classNames = cn(
            "cardStyle", "card", {
                "marked": this.props.card.checked
            }
         );

        const visibility = cn(
            "editButton", {
                "non-visible": this.props.isEditable
            }
        );
        const { card } = this.props;
        return (

            <div className={classNames}>
                <div className="card-body">
                    <div hidden={!card.showing}>
                        <input type="text" size="40px" value={card.currentTitle}
                               onChange={(event)=>this.props.changeTitle(event, this.props.card.id)}/>
                        <button className="saveButton"
                                onClick={()=>this.props.save(card.id)} hidden={this.props.isEditable}><AiOutlineSave/></button>
                        <button className="closeButton"
                                onClick={()=>this.props.cancel(card.id)} hidden={this.props.isEditable}><AiOutlineClose/></button>
                        <textarea value={card.currentText}
                                  onChange={(event)=>this.props.changeText(event, card.id)}/>
                    </div>
                    <div className="cardTitle" hidden={card.showing}>
                        <div className="title">
                            <h5 style={{paddingTop: "3px"}}>{card.currentTitle}</h5>
                        </div>
                        <button className={visibility}
                                onClick={()=>this.props.hideCheckBoxChange(card.id)} > <AiOutlineEdit/></button>
                        <input type="checkbox" id="changeColour" checked={card.checked}
                                    onChange={()=>this.props.handleCheckboxChange(card.id)}/>
                    </div>
                    <div className="card-text">
                        <p hidden={card.showing}>{card.currentText}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;