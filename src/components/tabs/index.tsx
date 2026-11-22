import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { Slot } from '../../utils/slot';
import { hasContent } from '../../utils/has-content';

export type RootProps = ComponentProps<'div'>;

/**
 * Tabs can be a helpful way of letting users quickly switch between related information.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
export function Root({ className, ...props }: RootProps) {
  return <div className={clsx('govuk-tabs', className)} data-module="govuk-tabs" {...props} />;
}

export type TitleProps = ComponentProps<'h2'>;

/** The title shown above the list of links to the panels when JavaScript is not available. */
export function Title({ className, children, ...props }: TitleProps) {
  return (
    <h2 className={clsx('govuk-tabs__title', className)} {...props}>
      {hasContent(children) ? children : 'Contents'}
    </h2>
  );
}

export type ListProps = ComponentProps<'ul'>;

/** The list of tabs. */
export function List({ className, ...props }: ListProps) {
  return <ul className={clsx('govuk-tabs__list', className)} {...props} />;
}

export type ListItemProps = ComponentProps<'li'> & {
  /** Whether the tab is selected when the page loads. */
  selected?: boolean;
};

/** An item in the list of tabs. */
export function ListItem({ selected, className, ...props }: ListItemProps) {
  return (
    <li
      className={clsx(
        'govuk-tabs__list-item',
        selected && 'govuk-tabs__list-item--selected',
        className,
      )}
      {...props}
    />
  );
}

export type TabProps = ComponentProps<'a'> & {
  /** Render the only child (such as a router's link or a label) instead of an `a`, with the tab class merged onto it. */
  asChild?: boolean;
};

/** The link to a panel. It becomes a tab once JavaScript runs. */
export function Tab({ className, asChild, children, ...props }: TabProps) {
  const Element = asChild ? Slot : 'a';
  return (
    <Element className={clsx('govuk-tabs__tab', className)} {...props}>
      {children}
    </Element>
  );
}

export type PanelProps = ComponentProps<'div'> & {
  /** Whether the panel is shown when the page loads. Other panels are hidden once JavaScript runs. */
  selected?: boolean;
};

/** The content of a tab. */
export function Panel({ selected, className, ...props }: PanelProps) {
  return (
    <div
      className={clsx('govuk-tabs__panel', !selected && 'govuk-tabs__panel--hidden', className)}
      {...props}
    />
  );
}
