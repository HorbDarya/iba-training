import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CardList from "./components/CardList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            cards: [
                {
                    id: 1,
                    showing: false,
                    currentTitle: "Card title1",
                    currentText: "Text1",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title1",
                    prevText: "Text1"
                },
                {
                    id: 2,
                    showing: false,
                    currentTitle: "Card title2",
                    currentText: "Text2",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title2",
                    prevText: "Text2"
                },
                {
                    id: 3,
                    showing: false,
                    currentTitle: "Card title3",
                    currentText: "Text3",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title3",
                    prevText: "Text3"
                },
                {
                    id: 4,
                    showing: false,
                    currentTitle: "Card title4",
                    currentText: "Text4",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title4",
                    prevText: "Text4"
                },
                {
                    id: 5,
                    showing: false,
                    currentTitle: "Card title5",
                    currentText: "Text5",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title5",
                    prevText: "Text5"
                },
                {
                    id: 6,
                    showing: false,
                    currentTitle: "Card title6",
                    currentText: "Text6",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title6",
                    prevText: "Text6"
                },
                {
                    id: 7,
                    showing: false,
                    currentTitle: "Card title7",
                    currentText: "Text7",
                    titleCount: 0,
                    textCount:0,
                    prevTitle: "Card title7",
                    prevText: "Text7"
                },
            ]
        };

        this.hideCheckBoxChange = this.hideCheckBoxChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeText = this.changeText.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App Name</h1>
                    <label><input type="checkbox" checked={this.state.isEditable} onChange={this.handleCheckbox}/>Read only</label>
                    <CardList cards={this.state.cards} changeTitle={this.changeTitle} save={this.save}
                        hideCheckBoxChange={this.hideCheckBoxChange} cancel={this.cancel} changeText={this.changeText}
                        handleCheckboxChange={this.handleCheckboxChange} isEditable={this.state.isEditable}/>
                </div>
            </div>
        );
    }

    handleCheckboxChange(id) {
        this.setState({cards: this.state.cards.map(card => {
            if(card.id === id){
                card.checked = !card.checked;
            }
            return card;
        })})
    }

    handleCheckbox() {
        this.setState({isEditable: !this.state.isEditable});
        this.state.cards.map(card => {
            if(card.showing === true){
                this.cancel(card.id);
            }
        })
    }

    hideCheckBoxChange(id) {
        this.setState({cards: this.state.cards.map(card => {
            if(card.id === id){
                card.showing = !card.showing;
                card.checked = false;
            }
            return card;
        })})
    }

    save(id) {
        this.setState({cards: this.state.cards.map(card => {
            if(card.id === id){
                card.titleCount = 0;
                card.textCount = 0;
                card.prevTitle = card.currentTitle;
                card.prevText = card.currentText;
                this.hideCheckBoxChange(id);
            }
            return card;
        })})
    }

    changeTitle(event, id) {
        this.setState({cards: this.state.cards.map(card => {
            if(card.id === id){
                if(card.titleCount === 0){
                    card.prevTitle = card.currentTitle;
                }
                card.currentTitle = event.target.value;
                card.titleCount = card.titleCount + 1;
            }
            return card;
        })})
    }

    changeText(event, id) {
        this.setState({cards: this.state.cards.map(card => {
            if(card.id === id){
                if(card.textCount === 0){
                    card.prevText = card.currentText;
                }

                card.currentText = event.target.value;
                card.textCount = card.textCount + 1;
            }
            return card;
        })})
    }

    cancel(id) {
        this.hideCheckBoxChange(id);
        this.setState({cards: this.state.cards.map(card => {
            if(card.id === id){
                card.currentText = card.prevText;
                card.currentTitle = card.prevTitle;
            }
            return card;
        })})

    }
}

export default App;
