import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Input} from "@/components/Input";

export default {
    title: 'Example/InputEmail',
    component: Input,

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});

Email.args = {
    type: 'email',
    label: 'Email',
    onChange: (e) => console.log(e)
};
