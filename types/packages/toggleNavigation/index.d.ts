import "./style.scss";
import React from "react";
interface ToggleItem {
    value: string;
    text: string;
}
interface IProps {
    prefixCls?: string;
    toggles: Array<ToggleItem>;
    defaultToggleItem?: string;
    onChange?: (current: any) => void;
}
declare const ToggleNavigation: React.FC<IProps>;
export default ToggleNavigation;
