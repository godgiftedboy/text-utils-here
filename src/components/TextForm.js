import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("uppercase was clicked",text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success")
  };
  const handleCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!","success")
  };
  const [text, setText] = useState("");
  //   text="new text"; //error  //wrong way to change the state
  // setText("new text");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="form-group my-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter text here"
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="textBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-2 ">
          Convert to Uppercase
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-2">
          Convert to Lowercase
        </button>
        <button onClick={handleClearClick} className="btn btn-primary mx-2">
          Clear
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-2">
          Copy text
        </button>
        <button onClick={handleExtraSpace} className="btn btn-primary mx-2">
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{
          color: props.mode === "dark" ? "white" : "black",
        }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} chars</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the above textbox to preview here"}</p>
      </div>
    </>
  );
}
