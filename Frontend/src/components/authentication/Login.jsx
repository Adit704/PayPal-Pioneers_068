import { useState } from 'react';
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
      const user = response.data.find(user => user.email === input.email);

      if (!user || user.password !== input.password) {
        // If user credentials not found or password does not match
        toast({
          title: 'Login failed.',
          description: 'Wrong email or password.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Navigate based on user role
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error fetching user credentials:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch user credentials.',
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
          // boxShadow='rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'
        >
          <Heading as="h1" size="lg" mb={6} textAlign="center" bg='white'>
            Login
          </Heading>
          <form onSubmit={handleLogin}>
            <VStack spacing={4} bg='white'>
              <FormControl isRequired bg='white'>
                <FormLabel bg='white'>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  style={{border:'1px solid'}}
                />
              </FormControl>
              <FormControl isRequired bg='white'>
                <FormLabel bg='white'>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  style={{border:'1px solid'}}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Login
              </Button>
            </VStack>
          </form>
          <Text mt={4} textAlign="center" bg='white'>
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
