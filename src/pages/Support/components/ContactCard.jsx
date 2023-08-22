import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
    <Stack spacing="6">
      <Text fontWeight="medium" fontSize="sm">
        You will recive response within 24 hours of time of submit
      </Text>

      <HStack
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Surname</FormLabel>
          <Input type="text" placeholder="Enter Your Surname" />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter Your Email" />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter Your Message..."></Textarea>
      </FormControl>
      <Checkbox defaultChecked>
        I agree with
        <Box as="span" color="p.purple">
          Terms & Conditions.
        </Box>
      </Checkbox>

      <Stack>
        <Button>Send a Message</Button>
        <Button colorScheme="gray">Book a Meeting</Button>
      </Stack>
    </Stack>
  </Card>
  )
}

export default ContactCard