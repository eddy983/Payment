import * as React from 'react'
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFieldProps {
  id: string
  type?: 'text' | 'number' | 'email' | 'password' | 'date' | 'datetime-local' | 'date'
  placeholder?: string
  autoFocus?: boolean
  required?: boolean
  defaultValue?: string
  registration: Partial<UseFormRegisterReturn>
  className?: string
  prefix?: string
  suffix?: string
  label?: string
  disabled?: boolean
}

export const InputField: React.FunctionComponent<InputFieldProps> = ({
  id,
  type = 'text',
  placeholder,
  autoFocus = false,
  required = false,
  defaultValue,
  registration,
  className,
  prefix,
  suffix,
  label,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm opacity-60">
          {label}
        </label>
      )}

      <div className="relative mt-1 flex w-full items-center space-x-2 rounded-md border-0 border-transparent px-0 transition duration-500 ease-in-out focus:outline-0 md:text-sm">
        {Boolean(prefix) && <span className="bg-purple-4 rounded py-0.5 px-1.5">{prefix}</span>}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
          defaultValue={defaultValue}
          className={clsx(
            'placeholder:text-mauve-7 w-full rounded-md border-0 border-transparent bg-gray-100 p-0 py-4 px-3 text-xs outline-none outline-0 ring-0 focus:border-2 focus:outline-none focus:outline-0 focus:ring-0 md:text-sm ',
            className
          )}
          {...registration}
        />

        {suffix && <span className="bg-purple-4 rounded py-0.5 px-1.5">{suffix}</span>}
      </div>
    </>
  )
}
