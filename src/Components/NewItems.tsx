import Banner from "../Shared/Banner";
import NewItemImg from '../assets/Images/newItems.png'

const NewItems = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <Banner src={NewItemImg} Title="Each student an share their discount code for friends" Description="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
        Fbtn="I have a code"/>
    </div>
  )
}

export default NewItems
