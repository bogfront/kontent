import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {EntryLayout} from "@/components/Auth";

export default {
    title: 'Example/EntryLayout',
    component: EntryLayout
} as ComponentMeta<typeof EntryLayout>;

const Template: ComponentStory<typeof EntryLayout> = (args) => <EntryLayout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    bg: 'registryBg'
};