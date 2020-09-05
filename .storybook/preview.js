import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
addParameters({
  backgrounds: [
    { name: "Default theme", value: "#F4F5F7", default: true },
    { name: "Dark theme", value: "#02A9DB" }
  ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);