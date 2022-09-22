import "./style.scss";
import React from "react";
interface IProps {
    prefixCls?: string;
    isOpen?: boolean;
    mask?: boolean;
    onCancel?: () => void;
    visibleChange?: () => void;
}
declare const Overlay: React.FC<IProps>;
export default Overlay;
