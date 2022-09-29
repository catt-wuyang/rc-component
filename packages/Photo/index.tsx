import "./style.scss";
import React from "react";
import classnames from "classnames";

interface IProps {
  prefixCls?: string;
  url: string;
  width?: number;
  ratio?: number;
  circle?: boolean;
  borderRadius?: number;
}

const Photo: React.FC<IProps> = ({
  prefixCls = "rc",
  url,
  ratio = 1,
  width = 120,
  circle = false,
  borderRadius = 0,
}) => {
  const cls = classnames(`${prefixCls}-photo`, "rc-photo");
  const style = {
    width: `${width}px`,
    height: `${width * ratio}px`,
    borderRadius: circle ? "50%" : `${borderRadius}px`,
  };

  const urlStyle = {
    background: `no-repeat url(${url}) center / cover`,
  };

  return (
    <div className={cls} style={style}>
      <div className="rc-photo-url" style={urlStyle}></div>
    </div>
  );
};

export default Photo;
