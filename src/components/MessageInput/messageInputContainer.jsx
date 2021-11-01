import React from "react";
import {useState, useRef, useEffect} from "react";
import {createId} from "../../lib";
import MessageComponent from "./messageInputComponent";

const date = new Date();
const getTime = `${date.getHours()}:${date.getMinutes()}`;

const InputContainer = ({postMessage}) => {
  const [textInput, setTextInput] = useState("");
  const autoFocus = useRef(null);

  useEffect(() => {
    autoFocus.current?.focus();
  }, [textInput]);

  function change(e) {
    setTextInput(e.target.value);
  }

  function onSubmit() {
    if (!textInput) {
      return;
    }
    const id = createId();

    postMessage(prev => [
      ...prev,
      {
        id,
        author: "Daniil Fishchenko",
        message: textInput,
        sent: getTime
      }
    ]);
    setTextInput("");
  }

  return (
    <MessageComponent
      textInput={textInput}
      onSubmit={onSubmit}
      change={change}
      autoFocus={autoFocus}
    />
  );
};

export default InputContainer;
