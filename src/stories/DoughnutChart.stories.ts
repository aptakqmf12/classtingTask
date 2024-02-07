import type { Meta, StoryObj } from "@storybook/react";
import DoughnutChart from "@/app/_component/doughnutChart";

const meta = {
  title: "Example/DoughnutChart",
  component: DoughnutChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    width: {
      // control: { type: "range", min: 100, max: 300, step: 5 },
    },
    correctScore: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    incorrectScore: { control: { type: "range", min: 0, max: 100, step: 1 } },
    useLegend: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof DoughnutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    correctScore: 1,
    incorrectScore: 2,
    useLegend: false,
  },
  tags: ["div"],
};
