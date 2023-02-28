import * as React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'bg-purple-9 hover:bg-purple-10 disabled:bg-purple-9 text-white',
  inverse: 'bg-purple-3 hover:bg-purple-4 disabled:bg-purple-3 text-purple-11',
  outline: 'border bg-purple-1 disabled:bg-purple-1 border-mauve-7 text-mauve-11 hover:bg-mauve-3',
  danger: 'bg-[#ff0000] hover:bg-red-10 text-white',
  invoice: 'bg-[#4E00AD] text-white',
  noColor: '',
}

const sizes = {
  xs: 'py-1.5 px-3 text-xs',
  sm: 'py-2 px-4 text-sm',
  base: 'py-3 px-5 text-base',
}

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variants
  size: keyof typeof sizes
  isLoading?: boolean
  centered?: boolean
  disabled?: boolean
  onClick?: () => void
} & IconProps

export const Button: React.FunctionComponent<ButtonProps> = ({
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'sm',
  isLoading = false,
  startIcon,
  endIcon,
  children,
  centered = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'focus:ring-violet-6 focus:ring-offset-violet-1 space-x-2 rounded-lg font-medium transition duration-500 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.95] disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
        !centered && 'flex items-center justify-between '
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading && <span>Loading</span>}
      {!isLoading && startIcon}
      {!isLoading && <span>{children}</span>}
      {!isLoading && endIcon}
    </button>
  )
}
