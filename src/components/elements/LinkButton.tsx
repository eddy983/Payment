import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

const variants = {
  primary: 'text-white',
  white: 'bg-white text-primary-100',
  unstyled: '',
}

const sizes = {
  xs: 'px-4 py-2.5 text-[13px] rounded font-semibold',
  sm: 'px-4 sm:px-10 py-3 text-base rounded-[7px] font-semibold',
  smNoPadding: '',
  base: 'px-16 py-4 text-2xl rounded-[10px] font-semibold',
}

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type LinkButtonProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
  centered?: boolean
} & IconProps

export const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  href = '/',
  className = '',
  variant = 'primary',
  size = 'sm',
  isLoading = false,
  startIcon,
  endIcon,
  children,
  centered = false,
}) => {
  return (
    <>
      <Link href={href}>
        <a
          className={clsx(
            'group flex -skew-x-12 items-center space-x-2 rounded-[4px] transition duration-500 ease-in-out hover:skew-x-0 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.95] disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-60',
            variants[variant],
            sizes[size],
            className,
            !centered && 'justify-between ',
            centered && 'justify-center ',
            variant === 'primary' && 'primary-bg'
          )}
        >
          <span className="block skew-x-12 group-hover:skew-x-0">
            {isLoading && <span>Loading</span>}
            {!isLoading && startIcon}
            {!isLoading && <span>{children}</span>}
            {!isLoading && endIcon}
          </span>
        </a>
      </Link>

      <style jsx>{`
        .primary-bg {
          background: linear-gradient(90deg, #107ee2 0.65%, #032282 104.21%);
        }
      `}</style>
    </>
  )
}
