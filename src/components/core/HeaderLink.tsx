import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type Props = ComponentPropsWithoutRef<'a'>;

export const HeaderLink = ({
  children,
  className: clx,
  ...props
}: PropsWithChildren<Props>) => (
  <a
    {...props}
    className={`cursor-pointer text-navlink min-h-[41px] px-[10px]  text-text-white hover:drop-shadow-navlink active:drop-shadow-navlink active:border active:border-accent-purple align-middle leading-10
      ${clx}`}>
    {children}
  </a>
);
