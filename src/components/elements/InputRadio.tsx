import * as React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import clsx from 'clsx'

interface InputRadioProps {
  id: string
  label: string
  value: string
  placeholder?: string
  autoFocus?: boolean
  required?: boolean
  defaultValue?: string
  registration?: Partial<UseFormRegisterReturn>
  className?: string
}

export const InputRadio: React.FunctionComponent<InputRadioProps> = ({
  label,
  value,
  id,
  registration,
  required,
}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        className="radio sr-only"
        required={required}
        {...registration}
      />
      <label
        className={clsx(
          'inline-flex cursor-pointer items-center gap-2.5 transition duration-300 ease-in-out'
        )}
        htmlFor={id}
      >
        <span className="text-xl text-employment-blue-light">{label}</span>
        <span className="radio-inner inline-block h-10 w-10 flex-shrink-0 rounded-[7px]  border-[0.5px] border-[#E0E0E0] bg-white transition duration-200 ease-in-out"></span>
      </label>

      <style jsx>{`
        .radio:checked + label .radio-inner {
          background: #0d7cdc;
          border: 5px #cae2f8 solid;
        }
      `}</style>
    </div>
  )
}
