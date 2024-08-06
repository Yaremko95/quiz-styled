import React from 'react'

type Props = {
  condition: boolean
  children: React.ReactNode
}

export function If({ condition, children }: Props) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return condition ? <>{children}</> : null
}
