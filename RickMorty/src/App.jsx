import PicGallery from './components/PicGalley'
import Header from './components/Header'
import MySide from './components/MySide'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>



      <div className=' grid grid-cols-6'>
        <div className='col-start-1 col-end-1'>
          <MySide />

        </div>
        <div className='col-start-2 col-end-7'>
          <PicGallery ></PicGallery>
        </div>

      </div>
    </>
  )
}

export default App
