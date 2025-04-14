import React, {useState} from "react";

function MyDemo(){
    
    const[name, setName] = useState("Enter name above")
    const[answer, setAnswer] = useState("");


    const handleNameInput = () => {
        setName(document.getElementById("myName")).value
    }

    return(
        <div>
            <input id="myName"></input>
            <button onClick={handleNameInput}>
                Submit Name</button>
            <p>Name: {name}</p>
            <p>Answer: {answer}</p>
            <label>
                <input name="radiobutton" type="radio" value="Yes" checked = {answer == "Yes"} onChanged={(e) => setAnswer(e.target.value)}/>
                Yes
            </label>
            <label>
                <input name="radiobutton" type="radio" value="No" checked = {answer =="No"} onChanged={(e) => setAnswer(e.target.value)}/>
                No
            </label>
        </div>
    );
}

export default MyDemo