import React from "react";
import NumberFormat from "react-number-format";

export default function NumberInput({
  name = "",
  onChange = () => {},
  value = undefined,
  disabled = false,
  className = "",
  onKeyDown = () => {},
  decimal = false,
  autoFocus = false
}) {
  const classes = ["form-control"];
  if (className) classes.push(className);
  return (
    <NumberFormat
      name={name}
      className={classes.join(" ")}
      thousandSeparator={"."}
      decimalSeparator={","}
      disabled={disabled}
      value={value}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      onChange={e =>
        onChange({
          target: {
            name: e.target.name,
            value: decimal
              ? e.target.value || null
              : e.target.value
              ? parseInt(e.target.value.replace(/\./g, ""))
              : null
          }
        })
      }
    />
  );
}
