import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

export type FormGroupProps = ComponentProps<'div'> & {
  /** Whether to show the error state. */
  error?: boolean;
};

/** Groups a form control with its label, hint and error message. */
export function FormGroup({ className, error, ...props }: FormGroupProps) {
  return (
    <div
      className={clsx('govuk-form-group', error && 'govuk-form-group--error', className)}
      {...props}
    />
  );
}
