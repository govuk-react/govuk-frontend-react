import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

export type ButtonGroupProps = ComponentProps<'div'>;

/** Groups buttons and links so that they are spaced and aligned as a row. */
export function ButtonGroup({ className, ...props }: ButtonGroupProps) {
  return <div className={clsx('govuk-button-group', className)} {...props} />;
}
