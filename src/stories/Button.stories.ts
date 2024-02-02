import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "../app/_component/button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    size: { control: "select", options: ["xs", "s", "m", "l", "xl"] },
    bg: { control: "color" },
    color: { control: "color" },
    disabled: { control: "boolean" },
    onClick: () => {},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "m",
    children: "버튼",
    color: "#fff",
    bg: "#000",
    disabled: false,
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
