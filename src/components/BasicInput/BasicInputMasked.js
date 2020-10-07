import React from "react";
import style from "./basicInput.module.css";
import InputMask from "react-input-mask";
export function BasicInputMasked({
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
  mask,
  maskChar,
}) {
  return (
    <div style={{ marginBottom: marginBottom }}>
      <label
        htmlFor={forLabel}
        className={style.label}
        style={{ width: labelWidth }}
      >
        {labelText}
      </label>
      <InputMask
        inputRef={register}
        type={type}
        id={id}
        className={style.basicInput}
        value={value}
        name={name}
        placeholder={placeholder}
        style={{ width: inputWidth }}
        onChange={handleChange}
        mask={mask}
        maskChar={maskChar}
      />
    </div>
  );
}
