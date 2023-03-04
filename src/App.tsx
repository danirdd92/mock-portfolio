import { Header } from '@layout/Header';
import { About } from '@pannels';

function App() {
  return (
    <div className='sm:bg-hero-image-sm md:bg-hero-image w-screen sm:h-[844px] md:h-[1024px] bg-no-repeat bg-left-bottom'>
      <Header />

      <About />
    </div>
  );
}

export default App;
