import React from 'react'

interface TextareaFieldProps {
  label?: string
  rows?: number,
  id: string
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ label, id, rows = 4 }) => {
  return (
    <div>
      {!!label && (
        <label className="mb-2 block text-sm text-[#373737]" id={id}>
          {label}
        </label>
      )}
      <textarea className="block w-full resize-none appearance-none rounded-[4px] border border-[#bfbfbf] bg-transparent py-3 px-2 text-sm shadow-sm focus:border-primary-100 focus:outline-none" rows={rows}></textarea>
    </div>
  )
}
