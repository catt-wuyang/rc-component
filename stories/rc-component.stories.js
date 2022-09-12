import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  TOGGLE_NAVS,
  DEFAULT_TOGGLE_NAV,
  MAIN_TYPES,
  SUB_TYPES,
} from "./rc-data";
import ToggleNavigation from "../packages/ToggleNavigation";
import TextInput from "../packages/TextInput";
import Select from "../packages/Select";

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

storiesOf("Input", module)
  .add("default", () => {
    return <TextInput />;
  })
  .add("defaultValue", () => {
    return <TextInput defaultValue="rc components" />;
  })
  .add("placeholder", () => {
    return <TextInput placeholder="必填" />;
  });

storiesOf("Select", module).add("default", () => {
  return (
    <div>
      <Select options={MAIN_TYPES} />
      <Select options={SUB_TYPES} disabled={true} />
    </div>
  );
});
