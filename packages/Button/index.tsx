import "./style.scss";
import React, { Children } from "react";
import classnames from "classnames";

interface IProps {
  prefixCls?: string;
  type?: "action" | "basic";
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: any;
}

const Button: React.FC<IProps> = ({
  prefixCls = "rc",
  disabled = false,
  type = "basic",
  style,
  children,
  onClick,
}) => {
  const cls = classnames(
    `${prefixCls}-button`,
    "rc-button",
    {
      disabled: disabled,
    },
    type
  );
  return (
    <button className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
