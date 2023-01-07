---
to: <%= storyPath %>
---
import React from 'react'
import { <%= component_name %> } from '@/ui'

export default {
  title: 'Ui/<%= component_name %>',
  component: <%= component_name %>,
  parameters: {
    layout: 'centered',
  },
}

const Template = (props) => <<%= component_name %> {...props} />

export const Primary = Template.bind({})

Primary.args = {}
