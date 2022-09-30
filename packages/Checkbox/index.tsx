import "./style.scss";
import React, { useEffect, useState } from "react";
import classnames from "classnames";

interface CheckboxProps {
  prefixCls?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: (checked: boolean) => void;
}

interface CheckboxOptionType {
  value: string;
  label: string;
  disabled: boolean;
}

type CheckboxValueType = string | number | boolean;

interface CheckboxGroupProps {
  prefixCls?: string;
  options: Array<CheckboxOptionType | string | number>;
  disabled?: boolean;
  name: string;
  value?: [];
  defaultValue?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  prefixCls = "rc",
  checked = false,
  disabled = false,
  children,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    onChange && onChange(isChecked);
  }, [isChecked]);

  const wrapperCls = classnames(`${prefixCls}-checkbox-wrapper`);
  const checkboxCls = classnames(`${prefixCls}-checkbox`, {
    "rc-checkbox-checked": isChecked,
    "rc-checkbox-disabled": disabled,
  });

  return (
    <label className={wrapperCls}>
      <span className={checkboxCls}>
        <input
          type="checkbox"
          className="rc-checkbox-input"
          onChange={!disabled ? onChecked : () => null}
        />
        <span className="rc-checkbox-simulate"></span>
      </span>
      {children && <span className="rc-checkbox-text">{children}</span>}
    </label>
  );

  function onChecked(e) {
    let isChecked = e.target.checked;
    setIsChecked(isChecked);
  }
};

export default Checkbox;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  prefixCls = "rc",
  options = [],
  disabled = false,
  defaultValue,
  onChange,
  ...restProps
}) => {
  const [value, setValue] = useState<CheckboxValueType[]>(
    restProps.value || defaultValue || []
  );

  useEffect(() => {
    if ("value" in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  const cls = classnames(`${prefixCls}-checkbox-group`);

  const getOptions = () => {
    const opts = options.map((option) => {
      if (typeof option === "string" || typeof option === "number") {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
    return opts;
  };

  if (options && options.length) {
    return (
      <div className={cls}>
        {getOptions().map((option) => {
          return (
            <Checkbox
              key={option.value.toString()}
              prefixCls={prefixCls}
              disabled={"disabled" in option ? option.disabled : disabled}
              value={option.value}
              checked={value.indexOf(option.value) !== -1}
            >
              {option.label}
            </Checkbox>
          );
        })}
      </div>
    );
  }

  return null;
};

export { CheckboxGroup };
