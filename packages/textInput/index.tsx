import "./style.scss";
import React, { useRef } from "react";
import classnames from "classnames";

interface IProps {
  prefixCls?: string;
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
  onChange?: (value: string) => void;
}

const TextInput: React.FC<IProps> = function ({
  prefixCls = "rc",
  placeholder = "input text",
  isRequired = false,
  defaultValue,
  onChange,
}) {
  const inputRef = useRef(null);

  const inputChange = (e) => {
    const value = e.target.value.trim();
    onChange && onChange(value);
  };

  const compCls = classnames(`${prefixCls}-text-input`, "text-input");

  return (
    <div className="text-input-component">
      <input
        type="text"
        className={compCls}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={isRequired}
        onChange={inputChange}
      />
    </div>
  );
};

export default TextInput;
