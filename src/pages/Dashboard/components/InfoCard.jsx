import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"


const InfoCard = ({imgUrl,text,tagtext,inverted}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat"
    bgColor={inverted ? "p.purple" : "white"}
    >
        <Tag  borderRadius="full"
         color={inverted ? "p.purple" : "white" }
         bg={inverted ? "white" :"p.purple"}
        
        
        >{tagtext}</Tag>

        <Text mt="4" fontWeight="medium" textStyle="h5" 
        color={inverted ? "white" : "black.80" }
        >{text}</Text>
    </CustomCard>
  )
}

export default InfoCard