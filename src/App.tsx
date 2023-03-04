import "./styles.css";
import Keyboard from "./components/Keyboard";
import { useState } from "react";

export default function App() {
  const [typedText, setTypedText] = useState("");
  return (
    <div className="App">
      <Keyboard setter={setTypedText} />
      <div className="text_area">{typedText}</div>
    </div>
  );
}
