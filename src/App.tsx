import { Header } from '@layout/Header';
import { About } from './components/pannels/About';

function App() {
  return (
    <div className='bg-hero-image-sm w-screen bg-no-repeat bg-left-bottom'>
      <Header />

      <About />
    </div>
  );
}

export default App;
