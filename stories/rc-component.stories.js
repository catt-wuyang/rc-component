import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ToggleNavigation from "../packages/toggleNavigation";

const TOGGLES = [
  {
    value: "book",
    text: "书",
  },
  {
    value: "movie",
    text: "影",
  },
  {
    value: "music",
    text: "音",
  },
];

const DEFAULT_TOGGLE = "movie";

storiesOf("ToggleNavigation", module)
  .add("default", () => {
    return <ToggleNavigation toggles={TOGGLES} onChange={action("onChange")} />;
  })
  .add("defaultValue", () => {
    return (
      <ToggleNavigation
        toggles={TOGGLES}
        defaultToggleItem={DEFAULT_TOGGLE}
        onChange={action("onChange")}
      />
    );
  });
