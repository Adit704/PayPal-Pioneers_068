import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Header } from '../Header';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch admin credentials from API
      const response = await axios.get('https://paypal-pioneers-068.onrender.com/users');
      const adminCredentials = response.data.find(user => user.email === input.email);

      if (!adminCredentials) {
        // If admin credentials not found for the entered email
        toast({
          title: 'Login failed.',
          description: 'Wrong email or password.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Compare input with admin credentials
      if (input.email === adminCredentials.email && input.password === adminCredentials.password) {
        // Assuming login logic sets isAuthenticated in local storage
        localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true }));
        navigate('/dashboard'); // Redirect to home or another route upon successful login
      } else {
        toast({
          title: 'Login failed.',
          description: 'Wrong email or password.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error fetching admin credentials:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch admin credentials.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <Header/>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height='96vh'
      bg="gray.100"
      p={4}
      backgroundImage='https://cdn.dribbble.com/users/1319343/screenshots/14584578/media/e6517d247bf8d46e0a9b722b8894023d.gif'
      backgroundPosition='center'
      backgroundSize='cover'
      overflowX='hidden'
      overflowY='hidden'
      padding='100px'
>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="md"
        width="100%"
        maxWidth="400px"
        border='1px solid'
        zIndex='10'
        box-shadow= 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'
     
      >
        <Heading as="h1" size="lg" mb={6} textAlign="center"
        >
          Login
        </Heading>
        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={input.email}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                style={{border:'1px solid'}}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                style={{border:'1px solid'}}/>
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Don't have an account?{' '}
          <Link to="/register">
            <Text as="u" color="blue.500">
              Register here
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
                </>
  );
};

export default Login;
