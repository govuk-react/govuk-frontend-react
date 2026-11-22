import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { overrideClasses, type Spacing } from '../../overrides';

export type BodyProps = ComponentProps<'p'> & {
  /** The size of the text. */
  size?: 'l' | 'm' | 's';
  /** Overrides the bottom margin with a point on the spacing scale, from `0` to `9`. */
  marginBottom?: Spacing;
};

/**
 * Use paragraphs for your core content.
 *
 * @see https://design-system.service.gov.uk/styles/paragraphs/
 */
export function Body({ size, marginBottom, className, ...props }: BodyProps) {
  return (
    <p
      className={clsx(
        size ? `govuk-body-${size}` : 'govuk-body',
        overrideClasses({ marginBottom }),
        className,
      )}
      {...props}
    />
  );
}
