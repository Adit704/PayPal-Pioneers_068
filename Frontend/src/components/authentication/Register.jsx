import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack, useToast, Select } from '@chakra-ui/react';
import axios from 'axios';
import { Header } from '../Header';

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default role
  });
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Fetch existing users
      const response = await axios.get('https://paypal-pioneers-068.onrender.com/users');
      const existingUser = response.data.find(user => user.email === input.email);
      
      if (existingUser) {
        toast({
          title: 'Registration failed.',
          description: 'User already exists.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Post new user data
      const newUser = {
        name: input.name,
        email: input.email,
        password: input.password,
        role: input.role,
        wishlist: []
      };

      await axios.post('https://paypal-pioneers-068.onrender.com/users', newUser);

      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/login');
      toast({
        title: 'Registration successful.',
        description: 'You can now log in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error registering user:', error);
      toast({
        title: 'Error',
        description: 'Failed to register user.',
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
        height="96vh"
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
            Register
          </Heading>
          <form onSubmit={handleSubmit} bg='white'>
            <VStack spacing={4} bg='white'>
              <FormControl isRequired bg='white'>
                <FormLabel bg='white'>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  style={{border:'1px solid'}}
                />
              </FormControl>
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
              <FormControl isRequired bg='white'>
                <FormLabel bg='white'>Role</FormLabel>
                <Select
                  name="role"
                  value={input.role}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                  style={{border:'1px solid'}}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Select>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Register
              </Button>
            </VStack>
          </form>
          <Text mt={4} textAlign="center" bg='white'>
            Already have an account?{' '}
            <Link to="/login">
              <Text as="u" color="blue.500">
                Login here
              </Text>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Register;
