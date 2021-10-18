import React from "react";
import Card from "./Card";


class CardList extends React.Component {
    render() {
        const { cards } = this.props;
        return(
            <ul>
                {
                    cards.map(card => {
                        return <Card card={card} changeTitle={this.props.changeTitle} save={this.props.save}
                            hideCheckBoxChange={this.props.hideCheckBoxChange} cancel={this.props.cancel}
                            changeText={this.props.changeText} handleCheckboxChange={this.props.handleCheckboxChange}
                            isEditable={this.props.isEditable}/>
                    })
                }
            </ul>
        );
    }
}

export default CardList;