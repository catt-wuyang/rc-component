import "./style.scss";
import React from "react";
interface IProps {
    prefixCls?: string;
    url: string;
    width?: number;
    ratio?: number;
    circle?: boolean;
    borderRadius?: number;
}
declare const Photo: React.FC<IProps>;
export default Photo;
