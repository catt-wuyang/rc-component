import "./style.scss";
import React from "react";
interface IProps {
    defaultValue?: string;
    placeholder?: string;
    isRequired?: boolean;
    onChange?: (value: string) => void;
}
declare const TextInput: React.FC<IProps>;
export default TextInput;
