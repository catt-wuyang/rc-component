import "./style.scss";

import React, { Component } from "react";

export interface Props {
  defaultValue?: string;
  onChange?: (current: string) => void;
}

class ToggleNavigation extends Component<Props> {
  static defaultProps: Props = {
    defaultValue: "",
    onChange: () => {},
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="toggle-navigation"></div>;
  }
}

export default ToggleNavigation;
