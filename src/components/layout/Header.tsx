import { Button } from '@core/Button';
import { HeaderLink } from '@core/HeaderLink';

export const Header = () => {
  return (
    <header className='m-[32px] font-alata bg-main-bg'>
      <div className='flex items-center justify-between pb-[10px]'>
        <div className='text-logo text-text-white text-shadow'>NERIA KATZ</div>

        <Button className='block'>Contact</Button>
      </div>

      <div className='flex items-center justify-around pt-[10px] min-h-[61px] mb-[50px]'>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Resume</HeaderLink>
        <HeaderLink>Galery</HeaderLink>
        <HeaderLink>Certificates</HeaderLink>
      </div>
    </header>
  );
};
