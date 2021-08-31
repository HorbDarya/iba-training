import React, {useState} from "react";
import { AiOutlineClose, AiOutlineSave } from "react-icons/ai";

function EditCard(props) {

    const [titleCount, setTitleCount] = useState(0);
    const [textCount, setTextCount] = useState(0);
    const [prevTitle, setPrevTitle] = useState("Card title");
    const [prevText, setPrevText] = useState("Text");

    const save = () => {
        setTitleCount(0);
        setTextCount(0);
        setPrevText(props.currentText);
        setPrevTitle(props.currentTitle);
        props.hide();
    }
    const changeTitle = (event) => {
        if(titleCount === 0){
            setPrevTitle(props.currentTitle)
        }
        props.setCurrentTitle(event.target.value);
        setTextCount(titleCount + 1)
    }

    const changeText = (event) => {
        if(textCount === 0){
            setPrevText(props.currentText)
        }
        props.setCurrentText(event.target.value);
        setTextCount(textCount  + 1);
    }

    const cancel = () => {
        props.hide();
        props.setCurrentText(prevText);
        props.setCurrentTitle(prevTitle);
    }

    return(
        <div>
            <div hidden={props.showing}>
                <input type="text" size="40px" value={props.currentTitle} onChange={changeTitle}/>
                <button className="saveButton" onClick={save}><AiOutlineSave/></button>
                <button className="closeButton" onClick={cancel}><AiOutlineClose/></button>
                <textarea value={props.currentText} onChange={changeText}/>
            </div>
        </div>

    )
}

export default EditCard;