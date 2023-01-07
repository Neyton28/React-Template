---
to: <%= path %>/<%= component_name %>.js
---
import React from 'react'
import { Flex } from '@/ui'
<% if (propTypes) { %>
import PropTypes from 'prop-types'
<% } %>
const <%= component_name %> = (<% if (propTypes) { %>{ }<% } %>) => {

  return (
    <Flex><%= component_name %></Flex>
  )
}

<% if (propTypes) { %><%= component_name %>.propTypes = {}<% } %>

export default <%= component_name %>
