import "./style.scss";
import React from "react";
interface IProps {
    prefixCls?: string;
    isOpen: boolean;
    mask: boolean;
    type: "confirm" | "alert" | "tips";
    useHeader?: boolean;
    title: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}
declare const Modal: React.FC<IProps>;
export default Modal;
