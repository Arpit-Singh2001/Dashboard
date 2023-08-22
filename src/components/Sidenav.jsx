import {
  Box,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  flexbox,
} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";


const Sidenav = () => {


  const location=useLocation();
  // console.log(location);

  const isActiveLink=(link)=>{
    return location.pathname==link;
  }


  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack justify="space-between" bg="white" boxShadow={{

      base:"none",
      lg:"lg",
    }} w={{
      base:"full",
      lg:"16rem",
    }} h="100vh"
    
 
    
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          @DOSOMECODING
        </Heading>

        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
           <Link to={nav.link}   key={nav.text}>
           
            <HStack
            
              py="3"
              px="4"
              borderRadius="10px"
              bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
              color={isActiveLink(nav.link)  ? "#171717" : "#797E82"}
              _hover={{ bg: "#F3F3F7", color: "#171717", cursor: "pointer" }}
             
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium" color="#797E82">
                {nav.text}
              </Text>
            </HStack>

            </Link>

          ))}
        </Box>
      </Box>

      <Box mx="3" mt="6" mb="6">
      <Link to="/support">
        <HStack
          py="3"
          px="4"
          borderRadius="10px"
          bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
          color={isActiveLink("/support") ? "#171717" : "#797E82"}
          _hover={{ bg: "#F3F3F7", color: "#171717", cursor: "pointer" }}
         
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium" color="#797E82">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
