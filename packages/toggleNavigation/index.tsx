import "./style.scss";

import React from "react";
import classnames from "classnames";

interface ToggleItem {
  value: string;
  text: string;
}

export interface IProps {
  toggles: Array<ToggleItem>;
  defaultValue?: string;
  onChange?: (current: any) => void;
}

export interface IState {
  current: any;
  currentIndex: number;
  slideWidth?: number;
  slideLeft?: number;
}

class ToggleNavigation extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    toggles: [],
    defaultValue: "",
  };

  private curRefs;

  constructor(props) {
    super(props);
    this.curRefs = Array.from(this.props.toggles, () => React.createRef());

    const _defaultValue = props.defaultValue
      ? props.defaultValue.value
      : props.toggles[0].value;

    const current = props.toggles.find((item) => item.value === _defaultValue);
    const currentIndex = props.toggles.findIndex(
      (item) => item.value === _defaultValue
    );

    this.state = {
      current: current,
      currentIndex,
    };
  }

  componentDidMount() {
    // when to use ref * https://stackoverflow.com/questions/55248483/react-ref-current-is-null?answertab=active#tab-top
    this.setSlidePos();
  }

  setSlidePos = () => {
    const { currentIndex } = this.state;
    const curEl = this.curRefs[currentIndex];
    this.setState({
      slideWidth: curEl.offsetWidth,
      slideLeft: curEl.offsetLeft,
    });
  };

  toggleHandle = (value: string, index: number) => {
    const { toggles, onChange } = this.props;
    const _current = toggles.find((item) => item.value === value);
    this.setState(
      {
        current: _current,
        currentIndex: index,
      },
      this.setSlidePos
    );
    onChange && onChange(_current);
  };

  render() {
    const { toggles } = this.props;
    const { current, slideWidth, slideLeft } = this.state;

    if (!toggles || !toggles.length) {
      return null;
    }

    return (
      <div className="toggle-navigation">
        {toggles.map((item, index) => {
          let itemCls = classnames("toggle-navigation-item", {
            active: item.value === current.value,
          });
          return (
            <span
              ref={(el) => (this.curRefs[index] = el)}
              className={itemCls}
              key={`_toggle_navigation_item_${index}`}
              onClick={this.toggleHandle.bind(this, item.value, index)}
            >
              {item.text}
            </span>
          );
        })}
        <span
          className="toggle-navigation-slide"
          style={{ width: slideWidth, left: `${slideLeft}px` }}
        ></span>
      </div>
    );
  }
}

export default ToggleNavigation;
