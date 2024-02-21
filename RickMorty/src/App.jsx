import PicGallery from './components/PicGalley'
import Header from './components/Header'
import { useEffect, useState } from "react"
import MyButtons from './atoms/MyButtons'
import PlaceGallery from './components/PlaceGallery'

import Search from './components/Search'
import Pages from './atoms/Pages'
import './App.css'

function App() {
  let [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1)
  // const hasResults = characters.length > 0

  const url = 'https://rickandmortyapi.com/api/'
  const endpoint = 'character/'
  const endpointLoc = 'location/'

  const apiUrl = url + endpoint + `?page=${pageNumber}&name=${search}`
  const apiUrlLoc = url + endpointLoc + `?page=${pageNumber}&name=${search}`

  const [characters, setCharacters] = useState([])
  const [places, setPlaces] = useState([])


  useEffect(() => {
    try {
        const fetchData = async () => {
            let response = await fetch(apiUrl)
            let data = await response.json()
            console.log(data)
            setCharacters(data.results)

        }
        fetchData()

    }
    catch (error) {
        console.error('error fetching data')
    }
}, [apiUrl])

 

useEffect(() => {
  try {
      const fetchData = async () => {
          let response = await fetch(apiUrlLoc)
          let data = await response.json()
          console.log(data)
          setPlaces(data.results)

      }
      fetchData()

  }
  catch (error) {
      console.error('error fetching data')
  }
}, [apiUrlLoc])



  return (
    <>
      <div>
        <Header></Header>
      </div>
      
      <div  className="container mx-auto py-10 flex justify-center gap-4">
        <MyButtons></MyButtons>
      </div>
 
 <div>
  <Search setPageNumber={setPageNumber} setSearch={setSearch} characters={characters}></Search>
 </div>

        <div className='container mx-auto p-5'>
          {/* <PicGallery characters={characters}/> */}
          <PlaceGallery places={places} ></PlaceGallery>
        </div>
        <div  className="container mx-auto py-10 flex justify-center gap-4">
              <Pages setPageNumber={setPageNumber}></Pages>
            </div>
      
    </>
  )
}

export default App
