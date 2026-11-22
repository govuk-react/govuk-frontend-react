import type { ComponentProps, ElementType } from 'react';
import { clsx } from 'clsx';

export type MainWrapperProps = ComponentProps<'main'> & {
  /** The element or component to render. Defaults to `main`. */
  as?: ElementType;
  /** Use `"l"` for more padding at the top, when the page has no breadcrumbs, back link or phase banner above the content. */
  size?: 'l';
  /** Adds spacing when the main wrapper is the only thing in the width container. */
  autoSpacing?: boolean;
};

/** The main content of the page, with padding above and below it. */
export function MainWrapper({
  as: Element = 'main',
  size,
  autoSpacing,
  id = 'main-content',
  className,
  ...props
}: MainWrapperProps) {
  return (
    <Element
      className={clsx(
        'govuk-main-wrapper',
        size && `govuk-main-wrapper--${size}`,
        autoSpacing && 'govuk-main-wrapper--auto-spacing',
        className,
      )}
      id={id}
      {...props}
    />
  );
}
