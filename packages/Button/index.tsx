import "./style.scss";
import React, { Children } from "react";
import classnames from "classnames";

interface IProps {
  prefixCls?: string;
  type?: "action" | "basic";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  prefixCls = "rc",
  disabled = false,
  type = "basic",
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
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
