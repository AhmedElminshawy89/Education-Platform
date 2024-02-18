import { ChangeEvent, FormEvent, ReactElement, useState } from "react"
import { RegestrationProps, UserData } from "../Interface"
import { Box, Button, FormControl, FormHelperText, Heading, Input, Link, Stack } from "@chakra-ui/react";

const Login = ({handleToggle}:RegestrationProps):ReactElement => {

  const [user,setUser] = useState<UserData>({
    identifier:'',
    password:''
  })
  const [isEmail,setIsEmail] = useState(false);
  const [isPassword,setIsPassword] = useState(false);

  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=> {
    const {name,value} = event.target;
    setUser((prevUser)=>({...prevUser,[name]:value}))
  }

  const handleSubmit =(event:FormEvent)=>{
    event.preventDefault();


    if (!user.identifier || !user.password) {
      setIsEmail(!user.identifier);
      setIsPassword(!user.password);
      return;
    }

    setIsEmail(false);
    setIsPassword(false);

    console.log(user);
    
  } 

  return (
    <Box p={4} >
      <Heading mb={8} textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email">
            <Input
              type="email"
              placeholder="Enter your email"
              border={isEmail?'2px solid red':""}
              name="identifier"
              value={user.identifier}
              onChange={onChangeHandler}
              className='inpt'
            />
            {isEmail && (
              <FormHelperText color={'red'}>Enter Email Please</FormHelperText>
            )}
          </FormControl>
          <FormControl id="password">
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
              className='inpt'
              border={isPassword?'2px solid red':""}
            />
            {isPassword && (
              <FormHelperText color={'red'}>Enter Password Please</FormHelperText>
            )}
          </FormControl>

          <Button type="submit" className='button' backgroundColor={isEmail||isPassword?'red':""} size="lg" color={'black'}>
            Login
          </Button>
        </Stack>
      </form>
      <Link  onClick={handleToggle}  cursor={"pointer"} fontSize={'16px'} fontWeight={600}>
        Don't have an account? Sign up
      </Link>
    </Box>
  )
}

export default Login
