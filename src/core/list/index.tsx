import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { overrideClasses, type Spacing } from '../../overrides';

export type ListProps = ComponentProps<'ol'> & {
  /** Whether to show bullets or numbers. The default is a list with neither. */
  variant?: 'bullet' | 'number';
  /** Whether to add extra space between the items. */
  spaced?: boolean;
  /** Overrides the bottom margin with a point on the spacing scale, from `0` to `9`. */
  marginBottom?: Spacing;
};

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * @see https://design-system.service.gov.uk/styles/lists/
 */
export function List({ variant, spaced, marginBottom, className, ...props }: ListProps) {
  const Element = variant === 'number' ? 'ol' : 'ul';
  return (
    <Element
      className={clsx(
        'govuk-list',
        variant && `govuk-list--${variant}`,
        spaced && 'govuk-list--spaced',
        overrideClasses({ marginBottom }),
        className,
      )}
      {...props}
    />
  );
}
