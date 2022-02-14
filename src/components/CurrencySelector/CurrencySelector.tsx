import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";
import "./style.css";

interface Props {
  onChange: (value: string) => void;
  value: string;
  className?: string;
  options: string[];
}

const CurrencySelector = ({ onChange, value, className, options }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={className}>
      <Dropdown
        open={showDropdown}
        toggle={() => {
          setShowDropdown(!showDropdown);
        }}
        dropup
      >
        <DropdownToggle>{value}</DropdownToggle>
        <DropdownMenu>
          {Object.values(options).map((ticker) => (
            <DropdownItem key={ticker} onClick={() => onChange(ticker)}>
              {ticker}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CurrencySelector;
