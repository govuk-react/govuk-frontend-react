import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { Slot } from '../../utils/slot';

export type LinkProps = ComponentProps<'a'> & {
  /** The colours of the link: `inverse` for a dark background, `muted` for a less prominent link, `text-colour` to match the surrounding text. */
  variant?: 'inverse' | 'muted' | 'text-colour';
  /** Whether to remove the underline until the user hovers over the link. */
  noUnderline?: boolean;
  /** Whether the link keeps its colour once the user has visited it. */
  noVisitedState?: boolean;
  /** Render the only child (such as a router's link) instead of an `a`, with the link classes merged onto it. */
  asChild?: boolean;
};

/**
 * Use links to navigate between pages.
 *
 * @see https://design-system.service.gov.uk/styles/links/
 */
export function Link({
  variant,
  noUnderline,
  noVisitedState,
  asChild,
  className,
  children,
  ...props
}: LinkProps) {
  const Element = asChild ? Slot : 'a';
  return (
    <Element
      className={clsx(
        'govuk-link',
        variant && `govuk-link--${variant}`,
        noUnderline && 'govuk-link--no-underline',
        noVisitedState && 'govuk-link--no-visited-state',
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
