import "./style.scss";
import React from "react";
import classnames from "classnames";

interface IProps {
  prefixCls?: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
}

interface IGroupProps extends IProps {
  name: string;
  value: [];
  defaultValue?: [];
  options: {
    value: string;
    label: string;
    disabled: boolean;
  }[];
}

const Checkbox: React.FC<IProps> = ({ prefixCls = "rc" }) => {
  const cls = classnames(`${prefixCls}-checkbox`);

  return <div className={cls}>create checkbox</div>;
};

export default Checkbox;
