import PicGallery from '../components/PicGalley'
import Search from '../components/Search'
import Pages from '../atoms/Pages'
import { useEffect, useState } from "react"

function Home (){
    let [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1)


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

 
    return(
      <>
       <div>
  <Search setPageNumber={setPageNumber} setSearch={setSearch} characters={characters}></Search>
 </div>
      <div className='container mx-auto p-5'>
        
          <PicGallery characters={characters}/>
        </div>
        <div  className="container mx-auto py-10 flex justify-center gap-4">
              <Pages setPageNumber={setPageNumber}></Pages>
            </div>
      </>
    )
}

export default Home