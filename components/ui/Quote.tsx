import { quoteBase, themeLibrary, ThemeName } from '@/lib/designSystem'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export type QuoteProps = {
  text: string
  author: string
  role?: string
  theme?: ThemeName
  className?: string
}

export function Quote({ text, author, role, theme = 'lotus', className }: QuoteProps) {
  const { quote, text: textColor, muted } = themeLibrary[theme].classes
  return (
    <figure className={cx(quoteBase, quote.wrapper, className)}>
      <blockquote className="relative pl-10">
        <span
          aria-hidden
          className={cx(
            'pointer-events-none absolute -left-1 -top-4 text-6xl font-serif leading-none opacity-40',
            quote.accent
          )}
        >
          &ldquo;
        </span>
        <p
          className={cx(
            'font-serif text-lg leading-relaxed tracking-tight md:text-xl',
            textColor,
            'before:hidden'
          )}
        >
          {text}
        </p>
      </blockquote>
      <figcaption className="mt-6 pl-10">
        <div className={cx('text-base font-semibold', quote.accent)}>{author}</div>
        {role ? <div className={cx('text-sm', muted)}>{role}</div> : null}
      </figcaption>
    </figure>
  )
}
