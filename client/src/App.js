import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Flex,
  VStack,
  Button,
  Text,
  Spacer,
  HStack,
  Spinner,
  Link,
  useColorMode,
  Icon,
  IconButton,
  Center,
  Image,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import BackToTop from "react-back-to-top-button";
import StickyBox from "react-sticky-box/dist/esnext";
import Nav from "./components/Nav";
import VideoFeed from "./components/VideoFeed";
import ButtonControl from "./components/ButtonControl";
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications'

function App() {
  return (
    <div className="App">
      <Box>
        <Nav />
      </Box>

      <Box bg={useColorModeValue("#DAE0E6")} p={10} width={"100%"}>
        {/* Feed Sort */}

        <Flex>
          {/* Empty Space Left */}
          <Box
            flex="1"
            ml={4}
            bg={useColorModeValue("white")}
            display={{ base: "none", md: "flex" }}
          ></Box>

          {/* Center */}
          <VStack flex="4">
            <Box
              boxShadow="md"
              p="1"
              alignItems="left"
              borderRadius="md"
              borderWidth="1px"
              width="100%"
              mt={35}
              bg={useColorModeValue("white", "gray.800")}
            >
              {"Feed Sort"}
            </Box>

            <Box w={"200%"}>
              <VideoFeed />
            </Box>

            <Box>
              <BackToTop
                showOnScrollUp
                showAt={1000}
                speed={1500}
                easing="easeInOutQuint"
              >
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"md"}
                  fontWeight={600}
                  color={"white"}
                  bg={"green.500"}
                  href={"#"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Back to Top
                </Button>
              </BackToTop>
            </Box>
          </VStack>
          {/* Right */}
          <Box
            bg={useColorModeValue("#DAE0E6")}
            m={4}
            flex="1"
            display={{ base: "none", md: "flex" }}
          >
            <StickyBox offsetTop={20} offsetBottom={20}>
              {/* About sidebar */}
              <Box
                borderRadius="lg"
                borderWidth="1px"
                boxShadow="md"
                bg={useColorModeValue("white")}
                marginTop = "18px"
              > 
                {"Controls"}
                <ButtonControl />
              </Box>
            </StickyBox>
          </Box>
          {/*Empty Space  */}
          <Box
            bg={useColorModeValue("#DAE0E6")}
            flex="1"
            display={{ base: "none", md: "flex" }}
          ></Box>
        </Flex>
      </Box>
      <Sidebar>
        <Notifications/>
      </Sidebar>
    </div>
  );
}

export default App;
