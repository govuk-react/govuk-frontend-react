import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

export type GridRowProps = ComponentProps<'div'>;

/**
 * Organise the layout of the page into blocks.
 *
 * @see https://design-system.service.gov.uk/styles/layout/
 */
export function GridRow({ className, ...props }: GridRowProps) {
  return <div className={clsx('govuk-grid-row', className)} {...props} />;
}

type ColumnWidth =
  'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters';

export type GridColumnProps = ComponentProps<'div'> & {
  /** The width of the column as a fraction of the row. Add `-from-desktop` for a width that only applies from desktop screens. */
  width: ColumnWidth | `${ColumnWidth}-from-desktop`;
};

/** A column of a grid row. */
export function GridColumn({ width, className, ...props }: GridColumnProps) {
  return <div className={clsx(`govuk-grid-column-${width}`, className)} {...props} />;
}
