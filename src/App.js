import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👋": "Waving Hand",
  "✋": "Raised Hand",
  "👌": "OK Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤙": "Call Me Hand",
  "☝️": "Index Pointing Up",
  "🫵": "Index Pointing at the Viewer",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "🫶": "Heart Hands",
  "🤝": "Handshake"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This Emoji not found in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="header">
        <h1>Hand sign Emoji Interpreter</h1>
        <small className="heading2">know the meaning behind the emojis! </small>
      </nav>

      <input
        type="text"
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      />

      <div className="heading">Emoji Meaning :</div>
      <div className="answer"> {meaning} </div>

      <h2> Emoji Library</h2>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem, 2 rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
