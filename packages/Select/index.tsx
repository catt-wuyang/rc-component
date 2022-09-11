import "./style.scss";
import React, { useState, useEffect } from "react";
import classnames from "classnames";

interface ISelected {
  text: string;
  value: number;
}

interface IProps {
  prefixCls?: string;
  disabled?: boolean;
  options: Array<ISelected>;
  defaultValue?: number | string;
  placeholder?: string;
  onChange?: (value: number | string) => void;
}

const Select: React.FC<IProps> = function (props: IProps) {
  const { prefixCls, disabled, options, defaultValue, placeholder, onChange } =
    props;

  const [isShowOption, setIsShowOption] = useState(false);
  const [selected, setSelected] = useState<ISelected | undefined>(undefined);

  useEffect(() => {
    const selectedData = defaultValue
      ? options.find((item) => item.value == defaultValue)
      : undefined;
    setSelected(selectedData);
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      setIsShowOption(false);
    });
  });

  function onToggleMenu(e) {
    if (disabled) return;
    e.nativeEvent.stopImmediatePropagation();
    const isShow = !isShowOption;
    setIsShowOption(isShow);
  }

  function onSelectMenu(e) {
    const selectedValue = e.target.dataset.value;
    const selectedData = options.find((item) => item.value == selectedValue);
    onChange && onChange(selectedValue);
    setIsShowOption(false);
    setSelected(selectedData);
  }

  const menuCls = classnames("link-select-menu", {
    show: isShowOption,
  });

  const compCls = classnames(`${prefixCls}-select`, "link-select-comps");
  const displayCls = classnames("link-select-display", {
    disabled: disabled,
  });

  return (
    <div className={compCls}>
      <div className={displayCls}>
        <div className="link-select-item" onClick={onToggleMenu}>
          <div className="link-select-name">
            <span>{selected ? selected["text"] : placeholder}</span>
          </div>
        </div>
      </div>

      <ul className={menuCls}>
        {options.map((item, index) => {
          if (item) {
            const selectedItemCls = classnames({
              active: selected && item.value == selected["value"],
            });
            return (
              <li
                className={selectedItemCls}
                key={`select_item_${index}`}
                data-value={item.value}
                onClick={onSelectMenu}
              >
                {item.text}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

Select.defaultProps = {
  prefixCls: "rc",
  placeholder: "请选择",
  disabled: false,
  options: [],
  onChange: () => {},
};

export default Select;
