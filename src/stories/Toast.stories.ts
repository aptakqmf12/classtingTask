import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../app/_component/toast";
import { ToastStatus } from "../store/toast";

const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    type: {
      control: "select",
      options: [ToastStatus.SUCCESS, ToastStatus.FAIL],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: ToastStatus.SUCCESS,
  },
  tags: ["div"],
};
