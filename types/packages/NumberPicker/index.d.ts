import "./style.scss";
import React from "react";
interface IProps {
    prefixCls?: string;
    disabled?: boolean;
    number: number;
    min?: number;
    max?: number;
    allowInput?: boolean;
    onChange?: (number: number) => void;
}
declare const NumberPicker: React.FC<IProps>;
export default NumberPicker;
