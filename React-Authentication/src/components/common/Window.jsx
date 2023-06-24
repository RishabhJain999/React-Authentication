/* eslint-disable react/prop-types */
import classnames from 'classnames'

export const Window = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={classnames(className, 'p-3 pb-12 pt-12 bg-blue-800')}
    >
      {children}
    </div>
  )
}
