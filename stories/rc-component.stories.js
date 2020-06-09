import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ToggleNavigation from "../packages/toggleNavigation";

const TOGGLES = [
  {
    value: "book",
    text: "书",
  },
  {
    value: "movie",
    text: "电影",
  },
  {
    value: "music",
    text: "音乐",
  },
];
storiesOf("ToggleNavigation", module).add("default", () => {
  return <ToggleNavigation toggles={TOGGLES} />;
});
