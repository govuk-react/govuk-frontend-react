import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';
import { hasContent } from '../../utils/has-content';
import { VisuallyHidden } from '../../utilities/visually-hidden';

export type RootProps = ComponentProps<'nav'> & {
  /** Whether to use the inverse colours, for a dark background. */
  inverse?: boolean;
};

/**
 * The Language navigation component helps users choose and switch between languages when using a service.
 *
 * @see https://design-system.service.gov.uk/components/language-navigation/
 */
export function Root({
  inverse,
  className,
  'aria-label': ariaLabel = 'Language',
  ...props
}: RootProps) {
  return (
    <nav
      className={clsx(
        'govuk-language-navigation',
        inverse && 'govuk-language-navigation--inverse',
        className,
      )}
      aria-label={ariaLabel}
      {...props}
    />
  );
}

export type ListProps = ComponentProps<'ul'>;

/** The list of languages. */
export function List({ className, ...props }: ListProps) {
  return <ul className={clsx('govuk-language-navigation__list', className)} {...props} />;
}

export type ListItemProps = ComponentProps<'li'>;

/** A language in the list. */
export function ListItem({ className, ...props }: ListItemProps) {
  return <li className={clsx('govuk-language-navigation__list-item', className)} {...props} />;
}

export type TextProps = ComponentProps<'span'>;

/** The language of the current page. */
export function Text({ className, ...props }: TextProps) {
  return (
    <span
      className={clsx('govuk-language-navigation__text', className)}
      aria-current="true"
      {...props}
    />
  );
}

export type LinkProps = ComponentProps<'a'>;

/** A link to the page in another language. */
export function Link({ lang, hrefLang, className, children, ...props }: LinkProps) {
  return (
    <a
      className={clsx('govuk-language-navigation__link', className)}
      rel="alternate"
      lang={lang}
      hrefLang={hrefLang ?? lang}
      {...props}
    >
      {children}
    </a>
  );
}

export type ListItemCompositeProps = Omit<LinkProps, 'href'> & {
  /** Link to the current page in this language. */
  href?: string;
  /** Whether this is the language of the current page. Defaults to `true` when `href` is not provided. */
  current?: boolean;
  /** Visually hidden text after a language link to indicate what the link will do. Write it in the language of the link (for example, "Change the language to English"). */
  languageDescription?: ReactNode;
};

/** A link to the page in another language, or the current language when `current` or there's no `href`. */
export function ListItemComposite({
  href,
  current,
  languageDescription,
  hrefLang,
  children,
  ...props
}: ListItemCompositeProps) {
  return (
    <ListItem>
      {current || !href ? (
        <Text lang={props.lang} dir={props.dir} className={props.className}>
          {children}
        </Text>
      ) : (
        <Link href={href} hrefLang={hrefLang} {...props}>
          {children}
          {hasContent(languageDescription) && (
            <VisuallyHidden> {languageDescription}</VisuallyHidden>
          )}
        </Link>
      )}
    </ListItem>
  );
}

export type CompositeProps = Omit<RootProps, 'children'> &
  (
    | { children?: ReactNode; items?: never }
    | {
        children?: never;
        /** Prefer children, which memoise and re-render better. */
        items: ListItemCompositeProps[];
      }
  );

/**
 * The Language navigation component helps users choose and switch between languages when using a service.
 *
 * Children are `ListItemComposite`s.
 *
 * @see https://design-system.service.gov.uk/components/language-navigation/
 */
export function Composite({ items, children, ...props }: CompositeProps) {
  return (
    <Root {...props}>
      <List>
        {items ? items.map((item, index) => <ListItemComposite key={index} {...item} />) : children}
      </List>
    </Root>
  );
}
