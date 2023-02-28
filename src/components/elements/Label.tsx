import React from 'react'

interface LabelProps {
  children: React.ReactNode
  id: string
}

export const Label: React.FC<LabelProps> = ({ children, id }) => {
  return (
    <label className="block text-sm text-[#373737] mb-2" id={id}>
      {children}
    </label>
  )
}
