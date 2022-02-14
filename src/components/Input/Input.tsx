import React from "react";
import "./style.css";

interface Props {
  value?: number;
  onChange: (e: any) => void;
  className?: string;
}

const Input = ({ value, onChange, className }: Props) => (
  <input
    className={className}
    type="number"
    min={0}
    value={value}
    onChange={onChange}
  />
);

export default Input;
