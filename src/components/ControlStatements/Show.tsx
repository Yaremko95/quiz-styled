import React, { Children, isValidElement } from 'react'

type Props = {
  children: React.ReactNode
}

export const When = ({ condition, children }: Props & { condition?: boolean }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return condition ? <>{children}</> : null
}

export const Otherwise = ({ children }: Props) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export const Show = ({ children }: Props) => {
  let hasTruthy = false
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === When) {
            hasTruthy = hasTruthy || child.props.condition
            return child.props.condition ? child : null
          }

          if (child.type === Otherwise && !hasTruthy) {
            return child
          }
        }
        return null
      })}
    </>
  )
}
