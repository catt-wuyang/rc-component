import "./style.scss";
import React, { useState, useEffect } from "react";
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
  min = 1,
  max = 1000,
  onChange,
}) => {
  const defaultNumber = Math.min(number, max);
  const [value, setValue] = useState(defaultNumber);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

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
    return <span className="number-picker-content">{value}</span>;
  }

  function renderSubtractionButton() {
    const disabledStatus = disabled || value <= min;
    const classes = classnames("number-picker-button", "subtract", {
      disabled: disabledStatus,
    });
    return (
      <i
        className={classes}
        onClick={disabledStatus ? () => {} : () => setValue(value - 1)}
      ></i>
    );
  }

  function renderPlusButton() {
    const disabledStatus = disabled || value >= max;
    const classes = classnames("number-picker-button", "plus", {
      disabled: disabledStatus,
    });
    return (
      <i
        className={classes}
        onClick={disabledStatus ? () => {} : () => setValue(value + 1)}
      ></i>
    );
  }
};

export default NumberPicker;
