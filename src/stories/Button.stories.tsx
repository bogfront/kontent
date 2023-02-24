import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from "@/components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 'Primary',
  size: "large" ,
  type: "primary",
  shape: "round",
};
