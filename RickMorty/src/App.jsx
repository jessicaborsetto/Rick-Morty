import PicGallery from './components/PicGalley'
import Header from './components/Header'
import { useEffect, useState } from "react"

import Search from './components/Search'
import Pages from './atoms/Pages'
import './App.css'

function App() {
  let [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1)
  // const hasResults = characters.length > 0

  const url = 'https://rickandmortyapi.com/api/'
  const endpoint = 'character/'
  const apiUrl = url + endpoint + `?page=${pageNumber}&name=${search}`
  const [characters, setCharacters] = useState([])

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



  return (
    <>
      <div>
        <Header></Header>
      </div>
 
 <div>
  <Search setPageNumber={setPageNumber} setSearch={setSearch} ></Search>
 </div>

        <div className='container mx-auto'>
          <PicGallery characters={characters}/>
        </div>
        <div  className="container mx-auto py-10 flex justify-center gap-4">
              <Pages setPageNumber={setPageNumber}></Pages>
            </div>
      
    </>
  )
}

export default App
