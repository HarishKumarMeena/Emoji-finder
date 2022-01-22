import React, { useState } from "react";
import "./styles.css";

const emojDictionary = {
  "😊": "smilling",
  "😡": "sad",
  "❤": "love",
  "📷": "camera"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojiWeKnow = Object.keys(emojDictionary);

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning;

    if (userInput in emojDictionary)
      meaning = "Meaning: " + emojDictionary[userInput];
    else meaning = "Sorry we didn't have this in our database";

    setMeaning(meaning);
  }

  function emojiCLickHandler(emoji) {
    var meaning = "Meaning " + emojDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Finder</h1>
      <input onChange={emojiInputHandler} />
      <div id="input-meaning">{meaning} </div>
      <h3> Emojis we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onMouseOver={() => emojiCLickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
