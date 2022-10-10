import { rest } from 'msw'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BASE_URL } from '../../../../api'
import { restaurants } from '../../../../stub/restaurants'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A311',
    },
  },
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favourite picks',
}
Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
}
Loading.parameters = {
  msw: {
    // ctx.delay('infinite') just tells msw to never resolve this request
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}

// ===========================================================================
// ===========================================================================
// Third option for data fetching:
// Mocking Requests
// Add a mocking layer
// ===========================================================================
// ===========================================================================

// ===========================================================================
// ===========================================================================
// Using the conditional logic pattern
// There is a storybook env variable to help check whether code is being run in
// storybook or not
// see /src/api/conditional-logic" - can check if running a mocked env (storybook)
// or running the app
// (downside - will have to mock each one of your api's)
// ===========================================================================

// ===========================================================================
// ===========================================================================
// Using the container pattern (downside - may require a lot of prop drilling)
// May also reuire the refactoring of a lot of components
// ===========================================================================

// import { restaurants } from '../../../../stub/restaurants'

// import { RestaurantsSectionComponent as RestaurantsSection } from './RestaurantsSection.container'

// ===========================================================================
// ===========================================================================
// Using the container pattern (downside - may require a lot of prop drilling)
// ===========================================================================

// export default {
//   title: 'Pages/HomePage/Components/RestaurantsSection',
//   component: RestaurantsSection,
//   parameters: {
//     design: {
//       type: 'figspec',
//       url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A311',
//     },
//   },
// } as ComponentMeta<typeof RestaurantsSection>

// const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
//   <RestaurantsSection {...args} />
// )

// // ============================================
// // pass 'restaurants' (mock data) down as props
// // ============================================
// export const Default = Template.bind({})
// Default.args = {
//   title: 'Our favourite picks',
//   restaurants,
// }

// export const Loading = Template.bind({})
// Loading.args = {
//   title: 'Our favourite picks',
//   isLoading: true,
// }
