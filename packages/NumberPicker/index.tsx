import "./style.scss";
import React, { useState } from "react";
import classnames from "classnames";

interface IProps {
  prefixCls?: string;
  disabled?: boolean;
  number: number;
  min?: number;
  max?: number;
  allowInput?: boolean;
  onChange?: (number: number) => void;
}

const NumberPicker: React.FC<IProps> = ({
  prefixCls = "rc",
  disabled = false,
  number = 1,
  min = 0,
  max = 1000,
  onChange,
}) => {
  const [value, setValue] = useState(number);

  const cls = classnames(`${prefixCls}-number-picker`, "rc-number-picker", {
    disabled: disabled,
  });

  return (
    <div className={cls}>
      {renderSubtractionButton()}
      {renderMainNumber()}
      {renderPlusButton()}
    </div>
  );

  function renderMainNumber() {
    const displayNumber = Math.min(number, max);
    return <span className="number-picker-content">{value}</span>;
  }

  function renderSubtractionButton() {
    const clickDisabled = disabled || value <= min || !value;
    return (
      <i
        className="number-picker-button subtract"
        onClick={clickDisabled ? () => false : () => clickHandle(value - 1)}
      ></i>
    );
  }

  function renderPlusButton() {
    const clickDisabled = disabled || !value || value >= max;
    return (
      <i
        className="number-picker-button plus"
        onClick={clickDisabled ? () => false : () => clickHandle(value - 1)}
      ></i>
    );
  }

  function clickHandle(n: number) {
    if (n < min || n > max) return false;
    onChange && onChange(n);
  }
};

export default NumberPicker;
