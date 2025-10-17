import Link, { LinkProps } from 'next/link'
import {
  buttonBase,
  buttonSizes,
  ButtonVariant,
  themeLibrary,
  ThemeName
} from '@/lib/designSystem'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type BaseButtonProps = {
  variant?: ButtonVariant
  theme?: ThemeName
  className?: string
  size?: keyof typeof buttonSizes
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  isLoading?: boolean
  children: React.ReactNode
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = BaseButtonProps & NativeButtonProps

function renderContent({
  isLoading,
  leadingIcon,
  trailingIcon,
  children
}: Pick<BaseButtonProps, 'isLoading' | 'leadingIcon' | 'trailingIcon' | 'children'>) {
  return (
    <>
      {isLoading ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
          <span className="sr-only">Loading</span>
        </>
      ) : (
        <>
          {leadingIcon ? <span className="inline-flex items-center">{leadingIcon}</span> : null}
          <span>{children}</span>
          {trailingIcon ? <span className="inline-flex items-center">{trailingIcon}</span> : null}
        </>
      )}
    </>
  )
}

export function Button({
  variant = 'primary',
  theme = 'lotus',
  className,
  size = 'md',
  leadingIcon,
  trailingIcon,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const themeStyles = themeLibrary[theme].classes.button[variant]
  const sizeClasses = buttonSizes[size]
  return (
    <button
      className={cx(buttonBase, themeStyles, sizeClasses, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {renderContent({ isLoading, leadingIcon, trailingIcon, children })}
    </button>
  )
}

type ButtonLinkProps = BaseButtonProps &
  LinkProps & {
    className?: string
    children: React.ReactNode
  }

export function ButtonLink({
  variant = 'primary',
  theme = 'lotus',
  className,
  size = 'md',
  leadingIcon,
  trailingIcon,
  isLoading,
  children,
  ...props
}: ButtonLinkProps) {
  const themeStyles = themeLibrary[theme].classes.button[variant]
  const sizeClasses = buttonSizes[size]
  return (
    <Link
      className={cx(
        buttonBase,
        themeStyles,
        sizeClasses,
        isLoading ? 'pointer-events-none opacity-70' : '',
        className
      )}
      aria-disabled={isLoading ? 'true' : undefined}
      {...props}
    >
      {renderContent({ isLoading, leadingIcon, trailingIcon, children })}
    </Link>
  )
}
