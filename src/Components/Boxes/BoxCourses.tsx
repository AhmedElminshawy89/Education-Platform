import { Card, CardBody, Image, Heading, Stack , Text, CardFooter, ButtonGroup, Button } from "@chakra-ui/react"
import primary from '../../assets/Images/Primary-stage.jpg'
import { Link } from "react-router-dom"

const BoxCourses = () => {
  return (
<Card maxW='sm' bg={'white'} color={'#010851'}>
  <CardBody p={2}>
    <Image
      src={primary}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>The perfect Course</Heading>
      <Text>
        This course is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup m={'auto'}>
      <Button as={Link} to={'/Course-details'}  variant='solid' style={{backgroundColor:'#010851', color:'white'}}>
        See Course
      </Button>
      {/* <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button> */}
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default BoxCourses
