import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"
import primary from '../../assets/Images/Primary-stage.jpg'
import { Link } from "react-router-dom"
const GridBoxCourse = () => {
  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mb={'15px'}
  bg={'white'}
  color={'#010851'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={primary}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect course</Heading>

      <Text p={2}>
        This course is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </CardBody>

    <CardFooter>
    <Button as={Link} to={'/Course-details'} variant='solid' style={{backgroundColor:'#010851', color:'white'}}>
        See Course
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default GridBoxCourse
