import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

export type WidthContainerProps = ComponentProps<'div'>;

/** Centres its content and limits it to the width of the page. */
export function WidthContainer({ className, ...props }: WidthContainerProps) {
  return <div className={clsx('govuk-width-container', className)} {...props} />;
}
