import Link from 'next/link'
import { cardBase, themeLibrary, ThemeName } from '@/lib/designSystem'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export type CardProps = {
  theme?: ThemeName
  eyebrow?: string
  title?: string
  description?: string
  href?: string
  className?: string
  children?: React.ReactNode
  leadingVisual?: React.ReactNode
}

export function Card({
  theme = 'lotus',
  eyebrow,
  title,
  description,
  href,
  className,
  children,
  leadingVisual
}: CardProps) {
  const styles = themeLibrary[theme].classes.card
  const wrapperClass = cx(cardBase, styles.wrapper, className)

  const content = (
    <>
      {eyebrow ? (
        <span className={cx('text-sm font-medium uppercase tracking-[0.2em]', styles.eyebrow)}>
          {eyebrow}
        </span>
      ) : null}
      {leadingVisual ? <div>{leadingVisual}</div> : null}
      {title || description ? (
        <div className="space-y-2">
          {title ? <h3 className={cx('text-xl font-semibold', styles.title)}>{title}</h3> : null}
          {description ? (
            <p className={cx('text-base leading-7', styles.body)}>{description}</p>
          ) : null}
        </div>
      ) : null}
      {children ? <div className="mt-auto pt-2">{children}</div> : null}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {content}
      </Link>
    )
  }

  return <div className={wrapperClass}>{content}</div>
}
