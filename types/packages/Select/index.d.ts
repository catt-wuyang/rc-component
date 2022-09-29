import "./style.scss";
import React from "react";
interface ISelected {
    text: string;
    value: number;
}
interface IProps {
    prefixCls?: string;
    disabled?: boolean;
    options: ISelected[];
    defaultValue?: number | string;
    placeholder?: string;
    onChange?: (value: number | string) => void;
}
declare const Select: React.FC<IProps>;
export default Select;
