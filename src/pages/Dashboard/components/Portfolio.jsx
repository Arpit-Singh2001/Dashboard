import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { MdUpload } from "react-icons/md";

const Portfolio = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6" justify={"space-between"} 
   
    align={{
      base:"flex-start",
      xl:"center",
    }}

    flexDir={{
      base:"column",
      xl:"row"
    }}

    spacing={{
      base:2,
      xl:16,
      md:6,
    }}
    
    
    >
      <HStack 
      spacing={{
        base:0,
        xs:16,
      }}
       align={{
        base:"flex-start",
        xl:"center",
      }}
  
      flexDir={{
        base:"column",
        xl:"row"
      }}
      
      >
        <Stack>
          <HStack color="535066">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="535066">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack spacing={2} 
           align={{
            base:"flex-start",
            sm:"center",
          }}
      
          flexDir={{
            base:"column",
            sm:"row"
          }}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
        
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={BiSolidDownload} />}>Deposit</Button>
        <Button rightIcon={<Icon as={MdUpload} />}>Widthwral</Button>
      </HStack>

    </HStack>
  );
};

export default Portfolio;
