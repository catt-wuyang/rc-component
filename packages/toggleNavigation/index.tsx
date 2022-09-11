import "./style.scss";
import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

interface ToggleItem {
  value: string;
  text: string;
}

interface IProps {
  toggles: Array<ToggleItem>;
  defaultToggleItem?: string;
  onChange?: (current: any) => void;
}

interface IStyle {
  width?: string;
  left?: string;
}

const ToggleNavigation: React.FC<IProps> = (props: IProps) => {
  const { toggles, defaultToggleItem, onChange } = props;

  const defaultCurIndex: number = defaultToggleItem
    ? toggles.findIndex((item) => item.value === defaultToggleItem)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(defaultCurIndex);
  const [slideStyle, setSlideStyle] = useState<IStyle>({});

  const toggleItemRef = useRef<any>(toggles.map(() => React.createRef()));

  useEffect(() => {
    const refWidths = toggleItemRef.current.map((ref) => ref.offsetWidth);
    const refLefts = refWidths.map((width) => width * currentIndex);
    setSlidePos(refWidths[currentIndex], refLefts[currentIndex]);
  }, [currentIndex]);

  function setSlidePos(width: number, left: number) {
    setSlideStyle({
      width: `${width}px`,
      left: `${left}px`,
    });
  }

  function toggleHandle(index: number) {
    setCurrentIndex(index);
    const currentToggle = toggles.find((_, i) => i === index);
    onChange && onChange(currentToggle);
  }

  return (
    <div className="toggle-navigation">
      {toggles.map((item, index) => {
        let itemCls = classnames("toggle-navigation-item", {
          active: index === currentIndex,
        });

        return (
          <span
            ref={(el) => (toggleItemRef.current[index] = el)}
            className={itemCls}
            key={`_toggle_navigation_item_${index}`}
            onClick={() => toggleHandle(index)}
          >
            {item.text}
          </span>
        );
      })}
      <span className="toggle-navigation-slide" style={slideStyle}></span>
    </div>
  );
};

ToggleNavigation.defaultProps = {
  toggles: [],
  onChange: () => {},
};

export default ToggleNavigation;
