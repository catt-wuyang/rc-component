import "./style.scss";
import React from "react";
interface IProps {
    prefixCls?: string;
    type?: "action" | "basic";
    disabled?: boolean;
    onClick?: () => void;
}
declare const Button: React.FC<IProps>;
export default Button;
