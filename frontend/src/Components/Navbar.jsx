import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  InputGroup,
  useBreakpointValue,
  InputLeftElement,
  Input,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";



// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink to="/">Logo</NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to="/whicky">Whicky</NavLink>
              <NavLink to="/beer">Beer</NavLink>
              <NavLink to="/rum">Rum </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={"2rem"}>
          <InputGroup
              w={"370px"}
              mt={2}
              
              display={useBreakpointValue({ base: "none", md: "solid" })}
            >
              <InputLeftElement
                py={"20px"}
                pointerEvents="none"
                children={
                  <AiOutlineSearch color="gray.300" fontSize={"20px"} />
                }
              />
              <Input
                py={"20px"}
                type="tel"
                placeholder="Search Product"
                focusBorderColor="gray.400"
                variant={"filled"}
              />
            </InputGroup>
            <NavLink to="/wishlist">
              <Text fontSize={"35px"}>
                <AiOutlineHeart />
              </Text>
            </NavLink>

            <NavLink to="/cart">
              <Text fontSize={"30px"}>
                <AiOutlineShoppingCart />
              </Text>
            </NavLink>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
            <NavLink to="/whicky">Whicky</NavLink>
              <NavLink to="/beer">Beer</NavLink>
              <NavLink to="/rum">Rum </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

  
    </>
  );
}



export default Navbar;
