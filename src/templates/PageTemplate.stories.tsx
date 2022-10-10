import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
} as ComponentMeta<typeof PageTemplate>

// Just to make the story a bit more understandable for the users
const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + Footer
    </DummyComponent>
  ),
}
