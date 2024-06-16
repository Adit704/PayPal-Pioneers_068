import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack, useToast } from '@chakra-ui/react';
import { Header } from '../Header';

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    localStorage.setItem('user', JSON.stringify(input));
    navigate('/login');
    toast({
      title: 'Registration successful.',
      description: 'You can now log in.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
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
      padding='100px'>
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
        <Heading as="h1" size="lg" mb={6} textAlign="center">
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                style={{border:'1px solid'}}/>
            </FormControl>
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
                style={{border:'1px solid'}} />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Register
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
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
