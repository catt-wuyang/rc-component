import "./style.scss";
import React, { useRef } from "react";
import classnames from "classnames";

interface ToggleItem {
  value: string;
  text: string;
}

export interface Props {
  toggles: Array<ToggleItem>;
  defaultValue?: string;
  onChange?: (current: ToggleItem) => void;
}

export interface State {
  current: ToggleItem;
  currentIndex: number;
}

class ToggleNavigation extends React.Component<Props, State> {
  static defaultProps: Props = {
    toggles: [],
    defaultValue: "",
    onChange: () => {},
  };

  private curRefs;

  constructor(props) {
    super(props);
    this.curRefs = Array.from(this.props.toggles, (item) => React.createRef());

    const _defaultValue = props.defaultValue
      ? props.defaultValue
      : props.toggles[0].value;
    const current = props.toggles.find((item) => item.value === _defaultValue);
    const currentIndex = props.toggles.findIndex(
      (item) => item.value === _defaultValue
    );

    this.state = {
      current,
      currentIndex,
    };
  }

  toggle = (value, index) => {};

  render() {
    const { toggles } = this.props;
    const { currentIndex } = this.state;
    const curEl = this.curRefs[currentIndex].current;

    return (
      <div className="toggle-navigation">
        {toggles.map((item, index) => {
          let itemCls = classnames("toggle-navigation-item", {
            active: item.value === this.state.current.value,
          });
          return (
            <span
              ref={(el) => (this.curRefs[index] = el)}
              className={itemCls}
              key={`_toggle_navigation_item_${index}`}
            >
              {item.text}
            </span>
          );
        })}
        <span className="toggle-navigation-slide"></span>
      </div>
    );
  }
}

export default ToggleNavigation;
