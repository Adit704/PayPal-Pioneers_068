import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  Button,
  ButtonGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from '@chakra-ui/react';
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  const apiUrl = "https://paypal-pioneers-068.onrender.com/Products";

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        const uniqueCategories = [...new Set(response.data.map(item => item.category))];
        setCategories(['All', ...uniqueCategories]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(item => item.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  const sortByPrice = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return order === 'asc' ? a.Price - b.Price : b.Price - a.Price;
    });
    setFilteredProducts(sortedProducts);
  };

  const handleOpenModal = (product = null) => {
    setCurrentProduct(product);
    onOpen();
  };

  const handleCloseModal = () => {
    setCurrentProduct(null);
    onClose();
  };

  const handleSaveProduct = () => {
    if (currentProduct.id) {
      axios.put(`${apiUrl}/${currentProduct.id}`, currentProduct)
        .then(response => {
          setProducts(products.map(product => (product.id === response.data.id ? response.data : product)));
          setFilteredProducts(products.map(product => (product.id === response.data.id ? response.data : product)));
          toast({ title: "Product updated", status: "success", duration: 2000, isClosable: true });
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
      axios.post(apiUrl, currentProduct)
        .then(response => {
          setProducts([...products, response.data]);
          setFilteredProducts([...products, response.data]);
          toast({ title: "Product added", status: "success", duration: 2000, isClosable: true });
        })
        .catch(error => console.error('Error adding product:', error));
    }
    handleCloseModal();
  };

  const handleDeleteProduct = () => {
    axios.delete(`${apiUrl}/${currentProduct.id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== currentProduct.id));
        setFilteredProducts(products.filter(product => product.id !== currentProduct.id));
        toast({ title: "Product deleted", status: "success", duration: 2000, isClosable: true });
      })
      .catch(error => console.error('Error deleting product:', error));
    setIsAlertOpen(false);
  };

  return (
    <>
    <Sidebar/>
    <Header/>
    <div className='grid-container'>
      <main className='main-container'>
        <div className='main-title'>
          {/* <h2>Product List</h2> */}
          <select onChange={(e) => handleCategoryFilter(e.target.value)} >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          <div> 
            <Button onClick={() => sortByPrice('asc')}>Sort by Price (Low to High)</Button>
            <Button onClick={() => sortByPrice('desc')}>Sort by Price (High to Low)</Button>
          </div>

            <Button colorScheme='teal' onClick={() => handleOpenModal()} style={{color:"white", padding:"10px"}}>Add Product</Button>
        </div>
        <div className='main-cards' >
          {filteredProducts.map((product) => (
            <div key={product.id} className='card' >
              <img style={{backgroundColor:"white"}} src={product.img} alt={product.title} className='card-image'/>
              <div className='card-details' >
                <h3 className='card-title' style={{backgroundColor:"white"}}>{product.title}</h3>
                <p className='card-category' style={{backgroundColor:"white"}}>Category: {product.category}</p>
                <p className='card-price' style={{backgroundColor:"white"}}>Price: ${product.Price}</p>
                <p className='card-description' style={{backgroundColor:"white"}}>{product.description}</p>
              </div>
              <Stack spacing={4} direction='row' align='center'>
                <Button colorScheme='teal' size='xs' onClick={() => handleOpenModal(product)}>Update</Button>
                <Button colorScheme='teal' size='xs' onClick={() => {
                  setCurrentProduct(product);
                  setIsAlertOpen(true);
                }}>Delete</Button>
              </Stack>
            </div>
          ))}
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentProduct ? "Update Product" : "Add Product"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input style={{border:"1px solid"}}value={currentProduct?.title || ''} onChange={(e) => setCurrentProduct({ ...currentProduct, title: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input style={{border:"1px solid"}} value={currentProduct?.category || ''} onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input style={{border:"1px solid"}} type="number" value={currentProduct?.Price || ''} onChange={(e) => setCurrentProduct({ ...currentProduct, Price: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input style={{border:"1px solid"}} value={currentProduct?.description || ''} onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input style={{border:"1px solid"}} value={currentProduct?.img || ''} onChange={(e) => setCurrentProduct({ ...currentProduct, img: e.target.value })} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveProduct}>
              Save
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsAlertOpen(false)}
        >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Product</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this product?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsAlertOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteProduct} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
        </>
  );
};