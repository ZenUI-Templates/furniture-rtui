
import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Banner from './Page/Banner'
import BestOffer from './Page/BestOffer'
import Card from './Page/Card'
import Categories from './Page/Categories'
import ExclusiveFurniture from './Page/ExclusiveFurniture'
import Subscribe from './Page/Subscribe'

function App() {


  return (
    <>
      <div className='bg-[#04021B]'>
      <Header/>
       <Banner/>
       <Card/>
       <Categories/>
       <ExclusiveFurniture/>
       <BestOffer/>
       <Subscribe/>
       <Footer/>
      </div>
    </>
  )
}

export default App
