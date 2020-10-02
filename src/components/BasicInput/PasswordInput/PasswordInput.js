import React from "react";
import style from "./PasswordInput.module.css";
import "./PasswordInput";

export function PasswordInput({
  forLabel,
  id,
  labelText,
  value,
  name,
  handleChange,
  placeholder,
  labelWidth,
  inputWidth,
  type,
  marginBottom,
}) {
  function show_hide_password(target) {
    const input = document.getElementById("password-input");
    const icon = document.getElementById("iconPasswordView");
    

    if (input.getAttribute("type") == "password") {
      target.classList.add("view");

      icon.setAttribute("src", "https://snipp.ru/demo/495/view.svg");
      input.setAttribute("type", "text");
    } else {
      target.classList.remove("view");
      icon.setAttribute("src", "https://snipp.ru/demo/495/no-view.svg");
      input.setAttribute("type", "password");
    }
    return false;
  }
  return (
    <div
      style={{ marginBottom: marginBottom }}
      className={style.inputPasswordWrapper}
    >
      <label
        htmlFor={forLabel}
        className={style.label}
        style={{ width: labelWidth }}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={style.basicInput}
        value={value}
        name={name}
        placeholder={placeholder}
        style={{ width: inputWidth }}
        onChange={handleChange}
      />
      <span
        href="#"
        className={style.passwordControl}
        onClick={(event) => show_hide_password(event.target)}
      >
        <img
          id="iconPasswordView"
          src={"https://snipp.ru/demo/495/view.svg"}
          alt="icon-hidden"
        />
      </span>
    </div>
  );
}
