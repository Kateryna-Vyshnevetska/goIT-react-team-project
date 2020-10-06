import React from "react";
import style from "../../BasicInput/PasswordInput/PasswordInput.module.css";
import "../profilePage.css";

export function PasswordInputRepeat({
  register,
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
    const input = document.getElementById("password-input-repeat");
    const icon = document.getElementById("iconPasswordViewRepeat");

    if (input.getAttribute("type") === "password") {
      target.classList.add("view");

      // icon.setAttribute("src", "../../../images/passwordEyes/open-eye.svg");
      input.setAttribute("type", "text");
    } else {
      target.classList.remove("view");
      // icon.setAttribute("src", "../../../images/passwordEyes/closed-eye.svg");
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
        ref={register}
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
        className="passwordControl"
        onClick={(event) => show_hide_password(event.target)}
      >
        {/* <svg
          id="iconPasswordViewRepeat"
          src={"../../../images/passwordEyes/closed-eye.svg"}
          alt="icon-hidden"
        /> */}
      </span>
    </div>
  );
}
