import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import mdx from '@mdx-js/mdx'

interface ExampleProps {
  className: string
}

const Example: FC<ExampleProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`docs-example border ${className} ${
        className && className.includes('p-') ? '' : 'p-3'
      }`}
      {...rest}
    >
      {children}
    </div>
  )
}

Example.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Example.displayName = 'Example'

export default Example
