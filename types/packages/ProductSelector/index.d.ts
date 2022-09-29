import "./style.scss";
import React from "react";
import { IProduct } from "./props";
interface IProps {
    prefixCls?: string;
    products?: Array<IProduct>;
    onChange?: (data: any) => void;
}
declare const ProductSelector: React.FC<IProps>;
export default ProductSelector;
