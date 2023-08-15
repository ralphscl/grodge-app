// Components
import Logo from './components/Logo';
import Search from './components/Search';
// Asset
import grodgeLogoBlack from './assets/grodge-text-black-transparent.png';
// CSS
import './App.css'

function App() {

  return (
    <div className='px-16 py-2 flex gap-10'>
      <Logo image={<img src={grodgeLogoBlack} alt="grodge-sale-logo" width={150} />} />

      <Search />
      
      <div className="w-4/12 text-end">
        p
      </div>
    </div>
  )
}

export default App
