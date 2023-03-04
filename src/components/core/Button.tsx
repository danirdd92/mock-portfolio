import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type Props = ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  className: clx,
  ...props
}: PropsWithChildren<Props>) => (
  <button
    className='bg-btn-bg px-[32px] py-[8px] text-white rounded-link shadow-link hover:bg-btn-bg-secondary active:shadow-link-active active:bg-btn-bg'
    {...props}>
    {children}
  </button>
);
