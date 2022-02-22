import React from "react";
import {
  Box,
  HStack,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

function ButtonControl() {
  return (
    <div>
      <Box
        boxShadow="md"
        p="1"
        alignItems="left"
        borderRadius="md"
        borderWidth="1px"
        width="100%"
        mt={5}
        bg={useColorModeValue("white", "gray.800")}
      >
        <Center>
          <HStack>
            <Button>Up</Button>
          </HStack>
        </Center>

        <Center>
          <HStack>
            <Button>Left</Button>
            <Button>Right</Button>
          </HStack>
        </Center>

        <Center>
          <HStack>
            <Button>Down</Button>
          </HStack>
        </Center>
      </Box>
    </div>
  );
}

export default ButtonControl;
