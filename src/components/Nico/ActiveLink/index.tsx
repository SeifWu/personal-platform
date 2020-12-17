import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

export interface ActiveLinkProps {
  activeClassName: string;
  children: React.ReactNode;
  href: string;
  as?: string;
}
const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  // @ts-ignore
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {/* @ts-ignore */}
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;

// use
// <ActiveLink activeClassName="active" href={props.href}>
//   <a className={cls.link}>Title</a>
// </ActiveLink>
