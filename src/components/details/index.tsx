import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

export type RootProps = ComponentProps<'details'>;

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * @see https://design-system.service.gov.uk/components/details/
 */
export function Root({ className, ...props }: RootProps) {
  return <details className={clsx('govuk-details', className)} {...props} />;
}

export type SummaryProps = ComponentProps<'summary'>;

/** The summary that the user selects to show and hide the content. */
export function Summary({ className, ...props }: SummaryProps) {
  return <summary className={clsx('govuk-details__summary', className)} {...props} />;
}

export type SummaryTextProps = ComponentProps<'span'>;

/** The text of the summary. */
export function SummaryText({ className, ...props }: SummaryTextProps) {
  return <span className={clsx('govuk-details__summary-text', className)} {...props} />;
}

export type TextProps = ComponentProps<'div'>;

/** The content that the summary shows and hides. */
export function Text({ className, ...props }: TextProps) {
  return <div className={clsx('govuk-details__text', className)} {...props} />;
}

export type CompositeProps = RootProps & {
  /** The summary element (the visible part of the details element). */
  summary: ReactNode;
};

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * @see https://design-system.service.gov.uk/components/details/
 */
export function Composite({ summary, children, ...props }: CompositeProps) {
  return (
    <Root {...props}>
      <Summary>
        <SummaryText>{summary}</SummaryText>
      </Summary>
      <Text>{children}</Text>
    </Root>
  );
}
