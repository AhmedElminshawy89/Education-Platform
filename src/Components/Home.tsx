import Banner from "../Shared/Banner"
import home from '../assets/Images/Home.png'
const HomeBanner = () => {
  return (
    <div id="home">
    <Banner src={home} Title="Develop your skills without diligence" Description="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
        Fbtn="Get Started" Secbtn="Discount"
        />
    </div>
  )
}

export default HomeBanner
