import "./style.scss";
import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import { Portal } from "react-portal";

interface IProps {
  prefixCls?: string;
  isOpen?: boolean;
  mask?: boolean;
  onCancel?: () => void;
  visibleChange?: () => void;
}

const Overlay: React.FC<IProps> = ({
  prefixCls = "rc",
  isOpen = false,
  mask = true,
  children,
  onCancel,
}) => {
  const cls = classnames(`${prefixCls}-overlay`, "rc-overlay");

  if (!isOpen) return null;

  return (
    <Portal>
      {mask ? <div className="rc-overlay-mask" onClick={onCancel}></div> : null}
      <div className={cls}>{children}</div>
    </Portal>
  );

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
};

export default Overlay;
