import gif from '../assets/download.gif'
import logo from '../assets/Rick_and_Morty.svg.png'
import Buttons from '../atoms/Buttons'

function Header() {
    return (
        <div>
            <div className='relative mb-10'>
                <img src={gif} alt="" className=' w-full h-[30rem] object-cover drop-shadow-2xl' />
                <img src={logo} alt="" className='w-[20rem] absolute bottom-5 right-5' />
            </div>

            <Buttons></Buttons>
        </div>





    )
}
export default Header