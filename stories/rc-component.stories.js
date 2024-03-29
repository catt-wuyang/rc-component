import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  TOGGLE_NAVS,
  DEFAULT_TOGGLE_NAV,
  MAIN_TYPES,
  SUB_TYPES,
  PRODUCTS,
  PHOTO_URL,
} from "./rc-data";

import ToggleNavigation from "../packages/ToggleNavigation";
import TextInput from "../packages/TextInput";
import NumberPicker from "../packages/NumberPicker";
import Button from "../packages/Button";
import Select from "../packages/Select";
import Checkbox, { CheckboxGroup } from "../packages/Checkbox";
import Modal from "../packages/Modal";
import Photo from "../packages/Photo";
import ProductSelector from "../packages/ProductSelector";

class ModalTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  changeVisible = () => {
    action("click modal");
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div>
        <span onClick={this.changeVisible}>Click Me!</span>
        <Modal
          isOpen={this.state.visible}
          onConfirm={this.changeVisible}
          onCancel={this.changeVisible}
        >
          <div>Overlay Content</div>
        </Modal>
      </div>
    );
  }
}

storiesOf("ToggleNavigation", module)
  .add("default", () => {
    return (
      <ToggleNavigation toggles={TOGGLE_NAVS} onChange={action("onChange")} />
    );
  })
  .add("defaultValue", () => {
    return (
      <ToggleNavigation
        toggles={TOGGLE_NAVS}
        defaultToggleItem={DEFAULT_TOGGLE_NAV}
        onChange={action("onChange")}
      />
    );
  });

storiesOf("Input", module).add("default", () => {
  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <TextInput />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <TextInput defaultValue="rc components" />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <TextInput placeholder="必填" />
      </div>
    </div>
  );
});

storiesOf("NumberPicker", module).add("default", () => {
  return <NumberPicker onChange={action("change")} />;
});

storiesOf("Button", module).add("default", () => {
  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <Button type="action" onClick={() => alert("hi, action button")}>
          Action Button
        </Button>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Button onClick={() => alert("hi, basic button")}>Basic Button</Button>
      </div>
      <div>
        <Button disabled>Disabled Button</Button>
      </div>
    </div>
  );
});

const CheckboxControl = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e) => {
    console.log(e);
  };

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const toggleEnable = () => {
    setDisabled(!disabled);
  };

  return (
    <div style={{ padding: "24px" }}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        control
        onChange={onChange}
      >
        Control Checkbox
      </Checkbox>
      <div style={{ marginBottom: "12px" }}></div>
      <div>
        <Button
          type="action"
          style={{ marginRight: "12px" }}
          onClick={toggleCheck}
        >
          Check
        </Button>
        <Button type="action" onClick={toggleEnable}>
          Disable
        </Button>
      </div>
    </div>
  );
};

storiesOf("CheckBox", module)
  .add("default", () => {
    return (
      <div>
        <div style={{ marginBottom: "12px" }}>
          <Checkbox>Checkbox</Checkbox>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <Checkbox checked>Checkbox</Checkbox>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <Checkbox disabled>Checkbox</Checkbox>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <Checkbox checked disabled>
            Checkbox
          </Checkbox>
        </div>
        <div style={{ marginBottom: "12px" }}></div>
        <div style={{ marginBottom: "12px" }}>
          <CheckboxGroup options={["A", "B", "C", "D"]} />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <CheckboxGroup
            defaultValue={["B", "D"]}
            options={[
              {
                label: "A",
                value: "A",
              },
              {
                label: "B",
                value: "B",
              },
              {
                label: "C",
                value: "C",
              },
              {
                label: "D",
                value: "D",
              },
            ]}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <CheckboxGroup
            disabled
            options={[
              {
                label: "A",
                value: "A",
              },
              {
                label: "B",
                value: "B",
              },
              {
                label: "C",
                value: "C",
              },
              {
                label: "D",
                value: "D",
              },
            ]}
          />
        </div>
      </div>
    );
  })
  .add("Control", () => {
    return <CheckboxControl />;
  });

storiesOf("Select", module).add("default", () => {
  return (
    <div>
      <Select options={MAIN_TYPES} />
      <Select options={SUB_TYPES} disabled={true} />
    </div>
  );
});

storiesOf("Modal", module).add("default", () => {
  return <ModalTrigger />;
});

storiesOf("Photo", module).add("default", () => {
  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <Photo url={PHOTO_URL} />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <Photo url={PHOTO_URL} width={160} />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <Photo url={PHOTO_URL} circle={true} />
      </div>
    </div>
  );
});

storiesOf("ProductSelector", module).add("default", () => {
  return (
    <ProductSelector
      products={PRODUCTS}
      onChange={action("product-selector")}
    />
  );
});
