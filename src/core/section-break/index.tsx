import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

export type SectionBreakProps = ComponentProps<'hr'> & {
  /** The amount of space above and below the break. */
  size?: 'xl' | 'l' | 'm';
  /** Whether to show a line. */
  visible?: boolean;
};

/**
 * Break up sections of content.
 *
 * @see https://design-system.service.gov.uk/styles/section-break/
 */
export function SectionBreak({ size, visible, className, ...props }: SectionBreakProps) {
  return (
    <hr
      className={clsx(
        'govuk-section-break',
        size && `govuk-section-break--${size}`,
        visible && 'govuk-section-break--visible',
        className,
      )}
      {...props}
    />
  );
}
