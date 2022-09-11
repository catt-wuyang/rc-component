import "./style.scss";
import React, { useRef } from "react";

interface IProps {
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
  onChange?: (value: string) => void;
}

const TextInput: React.FC<IProps> = function (props: IProps) {
  const { defaultValue, placeholder, isRequired, onChange } = props;

  const inputRef = useRef(null);

  const inputChange = (e) => {
    const value = e.target.value.trim();
    onChange && onChange(value);
  };

  return (
    <div className="text-input-component">
      <input
        type="text"
        className="text-input"
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={isRequired}
        onChange={inputChange}
      />
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: "请输入",
  isRequired: false,
};

export default TextInput;
