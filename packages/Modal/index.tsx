import "./style.scss";
import React, { useEffect } from "react";
import classnames from "classnames";
import Overlay from "../Overlay";
import Button from "../Button";

interface IProps {
  prefixCls?: string;
  isOpen: boolean;
  mask: boolean;
  type: "confirm" | "alert" | "tips";
  useHeader?: boolean;
  title: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal: React.FC<IProps> = ({
  prefixCls = "rc",
  isOpen = false,
  mask = true,
  useHeader = true,
  title = "modal title",
  onConfirm,
  onCancel,
}) => {
  const cls = classnames(`${prefixCls}-modal`, "rc-modal");

  return (
    <Overlay isOpen={isOpen} mask={mask} onCancel={onCancel}>
      <div className={cls}>
        <div className="rc-modal-container">
          <div className="rc-modal-close" onClick={onCancel}>
            <span className="rc-modal-close-icon"></span>
          </div>

          <div className="rc-modal-content">
            {useHeader ? <div className="rc-modal-header">{title}</div> : null}

            <div className="rc-modal-body">
              <p>content</p>
            </div>

            <div className="rc-modal-footer">
              <Button onClick={onCancel}>取消</Button>
              <Button type="action" onClick={onConfirm}>
                确定
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
