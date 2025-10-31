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
  const { quote, text: textColor } = themeLibrary[theme].classes
  return (
    <figure className={cx(quoteBase, quote.wrapper, 'relative text-left', className)}>
      <blockquote className="relative pl-12 md:pl-16">
        <span
          aria-hidden
          className={cx(
            'absolute left-4 top-8 h-[calc(100%-4rem)] w-[4px] rounded-full opacity-25 md:left-6 md:w-[6px] md:opacity-30',
            'bg-current',
            quote.accent
          )}
        />
        <span
          aria-hidden
          className={cx(
            'pointer-events-none absolute left-1 top-0 text-6xl font-serif leading-none opacity-25 md:left-2 md:text-8xl',
            quote.accent
          )}
        >
          &ldquo;
        </span>
        <p
          className={cx(
            'font-serif text-xl leading-relaxed tracking-tight md:text-2xl md:leading-[1.8]',
            textColor
          )}
        >
          {text}
        </p>
      </blockquote>
      <figcaption className="mt-8 flex flex-col gap-1">
        <div className={cx('text-lg font-semibold tracking-tight', quote.author)}>{author}</div>
        {role ? (
          <div className={cx('text-xs font-semibold uppercase tracking-[0.35em]', quote.accent)}>{role}</div>
        ) : null}
      </figcaption>
    </figure>
  )
}
