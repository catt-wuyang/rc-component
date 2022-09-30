import "./style.scss";
import React from "react";
interface CheckboxProps {
    prefixCls?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string | number | boolean;
    control?: boolean;
    children?: React.ReactNode;
    onChange?: (checked: boolean) => void;
}
interface CheckboxOptionType {
    value: string;
    label: string;
    disabled: boolean;
}
declare type CheckboxValueType = string | number | boolean;
interface CheckboxGroupProps {
    prefixCls?: string;
    options: Array<CheckboxOptionType | string | number>;
    disabled?: boolean;
    name: string;
    value?: [];
    defaultValue?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export { CheckboxGroup };
