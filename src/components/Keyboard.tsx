import { Dispatch, SetStateAction } from "react";
import "../styles.css";
import {
  first_row,
  second_row,
  third_row,
  num_row
} from "../keyboard_keys";
import Key from "./Key";

export interface KeyboardProps {
  setter: Dispatch<SetStateAction<string>>;
}

export default function Keyboard(
  props: KeyboardProps
) {
  return (
    <div className="Keyboard">
      <div className="num_row keyboard_row">
        {num_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
          />
        ))}
      </div>
      <div className="first_row keyboard_row">
        {first_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
          />
        ))}
      </div>
      <div className="second_row keyboard_row">
        {second_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
          />
        ))}
      </div>
      <div className="third_row keyboard_row">
        {third_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
          />
        ))}
      </div>
      <div className="keyboard_row">
        <div>
          <Key
            char=""
            name="spacebar"
            isMod={true}
            isIcon={false}
            setter={props.setter}
          />
        </div>
      </div>
    </div>
  );
}
