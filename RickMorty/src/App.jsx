import PicGallery from './components/PicGalley'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>



      
        <div className='container mx-auto'>
          <PicGallery ></PicGallery>
        </div>

      
    </>
  )
}

export default App
