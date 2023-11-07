"use client"

import { useState, ChangeEvent } from "react"
import Arrow from "../Arrow";
import "./style.css";

export default function EmailInput() {
  const emailInputContainer: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    height: "40px",
    background: "rgba(0, 0, 0, 0.32)",
    borderRadius: "20px",
  };

  const arrowContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "48px",
    height: "100%",
    right: "-4px",
    borderRadius: "20px"
  };

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    width: "100%",
    paddingLeft: "16px"
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: inputValue }),
    })
      .then((response) => {
        if (response.status == 201){
          setInputValue("");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const [inputValue, setInputValue] = useState("");
  const [isInputClicked, setInputClicked] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);

  const arrowContainerBackground = isButtonHovered ?
   "linear-gradient(90deg, #AD00FF 0%, rgba(0, 163, 255, 0.65) 155.65%)" :
   "linear-gradient(90deg, #AD00FF 0%, rgba(0, 0, 255, 0.4) 155.65%)"

  return (
    <div style={emailInputContainer} className={`container ${isInputClicked || inputValue.length != 0  ? 'container-clicked' : ''}`}>
    <button 
      style={{...arrowContainerStyle, background: arrowContainerBackground}}
      onMouseEnter={()=>{setButtonHovered(true)}}
      onMouseLeave={()=>{setButtonHovered(false)}}
      onClick={handleButtonClick}
    >
      <Arrow width={16} height={16}/>
    </button>
    <input
      type="text"
      placeholder="Seu Email"
      value={inputValue}
      onChange={handleInputChange}
      onClick={()=>{setInputClicked(true)}}
      onBlur={()=>{setInputClicked(false)}}
      style={inputStyle}
    />
  </div>
  )
}