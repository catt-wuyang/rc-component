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
    text: "乐",
  },
];

const DEFAULT_TOGGLE = {
  value: "movie",
  text: "电影",
};

storiesOf("ToggleNavigation", module)
  .add("default", () => {
    return <ToggleNavigation toggles={TOGGLES} onChange={action("onChange")} />;
  })
  .add("defaultValue", () => {
    return <ToggleNavigation toggles={TOGGLES} defaultValue={DEFAULT_TOGGLE} />;
  });
