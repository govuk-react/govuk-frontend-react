import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

export type VisuallyHiddenProps = ComponentProps<'span'>;

/** Hides its content visually while keeping it available to assistive technologies. */
export function VisuallyHidden({ className, ...props }: VisuallyHiddenProps) {
  return <span className={clsx('govuk-visually-hidden', className)} {...props} />;
}
