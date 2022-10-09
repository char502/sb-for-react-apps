import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort Food',
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1906%3A3469',
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
// Link a specific design to a version of badge
// Default.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1128%3A3451',
//   },
// }

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
}
