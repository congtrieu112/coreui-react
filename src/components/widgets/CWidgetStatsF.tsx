import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CCardFooter } from '../card/CCardFooter'

export interface CWidgetStatsFProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Footer node for your component. [docs]
   */
  footer?: string | ReactNode
  /**
   * Icon node for your component. [docs]
   */
  icon?: string | ReactNode
  /**
   * Set padding of your component. [docs]
   */
  padding?: boolean
  /**
   * Title node for your component. [docs]
   */
  title?: string | ReactNode
  /**
   * Value node for your component. [docs]
   */
  value?: string | number | ReactNode
}

export const CWidgetStatsF = forwardRef<HTMLDivElement, CWidgetStatsFProps>(
  ({ className, color, footer, icon, padding = true, title, value, ...rest }, ref) => {
    const _className = classNames(className)

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardBody className={`d-flex align-items-center ${padding === false && 'p-0'}`}>
          <div className={`me-3 text-white bg-${color} ${padding ? 'p-3' : 'p-4'}`}>{icon}</div>
          <div>
            <div className={`fs-6 fw-semibold text-${color}`}>{value}</div>
            <div className="text-medium-emphasis text-uppercase fw-semibold small">{title}</div>
          </div>
        </CCardBody>
        {footer && <CCardFooter>{footer}</CCardFooter>}
      </CCard>
    )
  },
)

CWidgetStatsF.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  padding: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
}

CWidgetStatsF.displayName = 'CWidgetStatsF'
