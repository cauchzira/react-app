import React from "react";
import "./styles.scss";
import {useState} from "react";

export function MessageInput({postMessage}) {
  const [textInput, setTextInput] = useState("");

  function change(e) {
    setTextInput(e.target.value);
  }

  function onSubmit() {
    const date = new Date();
    const getTime = `${date.getHours()}:${date.getMinutes()}`;
    postMessage(prev => [
      ...prev,
      {
        id: 4,
        author: "Daniil Fishchenko",
        message: textInput,
        sent: `${getTime}`
      }
    ]);
    setTextInput("");
  }

  return (
    <div className="user__message">
      <button className="attachmend">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7283 21.4369L10.8661 21.3285L20.5678 11.181C23.0102 8.62643 22.7619 4.70603 20.0118 2.40202C17.2617 0.0979979 13.0106 0.364303 10.5682 2.9189L1.24014 12.6756C0.965052 12.9633 0.994352 13.426 1.30386 13.6817C1.58323 13.9125 1.99179 13.8902 2.24009 13.6304L11.6369 3.80188C12.5888 2.84193 13.8546 2.26829 15.2603 2.19135C16.666 2.11441 17.9955 2.546 19.062 3.39547C21.2375 5.19296 21.4327 8.27567 19.497 10.2646L9.76145 20.4475C8.57418 21.6893 6.51966 21.8017 5.18384 20.698C4.53501 20.1619 4.16181 19.409 4.11087 18.6048C4.05994 17.8006 4.33553 17.0122 4.9122 16.409L14.6499 6.25962C14.8874 6.01126 15.1694 5.89495 15.4938 5.8772C15.8182 5.85944 16.151 5.97572 16.4182 6.19646C16.9144 6.60642 16.9611 7.34359 16.5222 7.83834L7.29585 17.4886C7.02076 17.7763 7.05006 18.239 7.35957 18.4947C7.63895 18.7255 8.0475 18.7032 8.29581 18.4434L17.6248 8.68584C18.6085 7.6569 18.5088 6.08204 17.3638 5.13599C16.8294 4.6945 16.1276 4.46393 15.4067 4.50338C14.6859 4.54284 14.018 4.84839 13.5431 5.34511L3.8075 15.528C2.07748 17.3375 2.2515 20.0852 4.19798 21.6935C6.10418 23.2367 8.99195 23.1459 10.7283 21.4369Z"
            fill="#6870FF"
          />
        </svg>
      </button>
      <input
        placeholder="Write your message..."
        className="user__message-input"
        value={textInput}
        onChange={change}
      ></input>
      <button onClick={onSubmit} className="user__message-send">
        <svg
          className="btn-send-pic"
          width="27"
          height="22"
          viewBox="0 0 27 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 21C9.16055 21 8.75781 20.6909 8.46827 19.9116L6 11.9909L25 1"
            fill="#C8DAEA"
          />
          <path
            d="M10 21C10.5455 21 10.7864 20.6861 11.0909 20.3136L14 16.7537L10.3713 14"
            fill="#A9C9DD"
          />
          <path
            d="M10.5774 14.5186L20.5835 21.7003C21.7254 22.3124 22.5493 21.9954 22.8338 20.6706L26.9068 2.02473C27.3237 0.400607 26.2695 -0.336278 25.1771 0.145532L1.26055 9.10454C-0.371951 9.74072 -0.362226 10.6255 0.96302 11.0197L7.10054 12.8808L21.3095 4.17227C21.9803 3.77709 22.5961 3.98936 22.0908 4.42514"
            fill="url(#paint0_linear_207:528)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_207:528"
              x1="17.82"
              y1="9.614"
              x2="21.5105"
              y2="18.2693"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        Send
      </button>
    </div>
  );
}
