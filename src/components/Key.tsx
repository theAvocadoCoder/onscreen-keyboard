import "../styles.css";

import { KeyProps } from "../keyboard_keys";
import { KeyboardProps } from "./Keyboard";

export default function Key(
  props: KeyProps & KeyboardProps
) {
  function addText(char: string) {
    props.setter((state) => state + char);
  }

  // function removeText() {
  //   props.setter((state: string) => {
  //     return state?.split("")?.pop().join();
  //   })
  // }

  function handleKeyPress() {
    if (
      !props.isMod &&
      !props.isIcon &&
      props.char
    ) {
      addText(props.char);
    } else if (props.name === "spacebar") {
      addText(" ");
    }
  }

  return (
    <div
      className={`Key ${props.name}${
        props.isMod ? " mod_key" : ""
      }`}
      onClick={handleKeyPress}
    >
      {props.isIcon ? (
        <div className="icon_key">
          {props.name}
        </div>
      ) : props.name === "spacebar" ? (
        <div className="space_key"></div>
      ) : (
        props.char
      )}
    </div>
  );
}
