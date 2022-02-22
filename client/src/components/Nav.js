import React, { useContext, useState, useEffect } from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  HStack,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
  Icon,
  Select,
  useColorMode,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FaWallet } from "react-icons/fa";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsGithub,
  BsTwitter,
  BsDiscord,
  BsPencilSquare,
} from "react-icons/bs";
import { SiHeadspace } from "react-icons/si";

import Identicon from "react-identicons";
import "./sidebar.css";

const SIDEBAR_SOCIAL_ICONS = 25;
const NAVBAR__ICONS = 20;
const SIDEBAR_OPACITY = 0.96;
const SIDEBAR_COLOR_LIGHT = "white";
const PRIMARY_COLOR_THEME = "#FF4500";
const SECONDARY_COLOR_THEME = "Black";
const NAV_TAG_NAME = "Mobile Delivery Robot";

// import LogoIcon from "./images";
export default function WithSubnavigation(props) {
  const creditImageSizeLarge = "40px";
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Box>
        <Flex
          as="header"
          position="fixed"
          zIndex={"100"}
          w="100%"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"30px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.100", "gray.700")}
          align={"center"}
          borderWidth="1px"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"outline"}
              aria-labe
              l={"Toggle Navigation"}
            />

            {/* Sidebar */}

            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent
                bg={useColorModeValue(SIDEBAR_COLOR_LIGHT)}
                opacity={SIDEBAR_OPACITY}
              >
                <DrawerCloseButton />
                <DrawerHeader bg={useColorModeValue(SIDEBAR_COLOR_LIGHT)}>
                  <HStack>
                    <Box ml={2} mt={1}>
                      <Icon
                        alignContent={useBreakpointValue({
                          base: "left",
                          md: "left",
                        })}
                        color={PRIMARY_COLOR_THEME}
                        as={SiHeadspace}
                        w={6}
                        h={6}
                      />
                    </Box>
                    <Box>
                      {/* <Text>{process.env.REACT_APP_APP_NAME}</Text> */}
                      <Text
                        mt={-1}
                        fontSize={"xs"}
                        color={useColorModeValue(PRIMARY_COLOR_THEME, "white")}
                      >
                        {NAV_TAG_NAME}
                      </Text>
                    </Box>
                  </HStack>
                </DrawerHeader>

                <DrawerBody bg={useColorModeValue(SIDEBAR_COLOR_LIGHT)}>
                  <Stack display={{ md: "none" }}>
                    {NAV_ITEMS.map((navItem) => (
                      <MobileNavItem key={navItem.label} {...navItem} />
                    ))}
                  </Stack>
                </DrawerBody>
                <Center bg={useColorModeValue(SIDEBAR_COLOR_LIGHT)}>
                  <DrawerFooter>
                    <HStack>
                      <Box>
                        <IconButton
                          aria-label="GitHub"
                          icon={<BsGithub size={SIDEBAR_SOCIAL_ICONS} />}
                        />
                      </Box>
                      <Spacer />
                      <Box>
                        <IconButton
                          aria-label="Twitter"
                          icon={<BsTwitter size={SIDEBAR_SOCIAL_ICONS} />}
                        />
                      </Box>
                      <Spacer />
                      <Box>
                        <IconButton
                          aria-label="Discord"
                          icon={<BsDiscord size={SIDEBAR_SOCIAL_ICONS} />}
                        />
                      </Box>
                      <Spacer />
                    </HStack>
                  </DrawerFooter>
                </Center>
              </DrawerContent>
            </Drawer>
          </Flex>

          <Flex flex={{ base: 5 }} justify={{ base: "center", md: "start" }}>
            <HStack>
              <Box>
                <HStack>
                  <Box ml={2} mt={1}>
                    <Icon
                      alignContent={useBreakpointValue({
                        base: "left",
                        md: "left",
                      })}
                      color={PRIMARY_COLOR_THEME}
                      as={SiHeadspace}
                      w={6}
                      h={6}
                    />
                  </Box>

                  <Text
                    textAlign={useBreakpointValue({
                      base: "left",
                      md: "left",
                    })}
                    display={{ base: "flex", md: "flex" }}
                    fontFamily={"heading"}
                    color={useColorModeValue(SECONDARY_COLOR_THEME, "white")}
                    fontSize={{ base: "xl", md: "xl", lg: "xl" }}
                    mt={2}
                  >
                    {/* {process.env.REACT_APP_APP_NAME} */}
                  </Text>
                </HStack>
                <Text
                  ml={2}
                  mt={-1}
                  fontSize={"11px"}
                  color={useColorModeValue(PRIMARY_COLOR_THEME, "white")}
                >
                  {NAV_TAG_NAME}
                </Text>
              </Box>

              <Box>
                <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  <DesktopNav />
                </Flex>
              </Box>
            </HStack>
            <Spacer />

            <Spacer />
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <Button
              fontSize={""}
              fontWeight={400}
              variant={"link"}
              _hover={{
                textDecoration: "none",
                color: "blue.500",
              }}
              onClick={() => console.log("")}
            >
              My Posts
            </Button>

            <Box>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"#"}
              >
                <Box m={2}>
                  <Identicon size={30} string={props.walletAddress} />
                </Box>
              </Button>
            </Box>
          </Stack>

          <Box>
            <Button
              leftIcon={<FaWallet />}
              ml={4}
              display={{ base: "none", md: "inline-flex" }}
              display={{ base: "flex", md: "inline-flex" }}
              fontSize={"mf"}
              fontWeight={600}
              color={"white"}
              bg={PRIMARY_COLOR_THEME}
              _hover={{
                bg: "pink.300",
              }}
            >
              Wallet
            </Button>
          </Box>
          <Flex ml={3}>
            <IconButton
              icon={
                colorMode === "light" ? (
                  <BsFillSunFill size={NAVBAR__ICONS} />
                ) : (
                  <BsFillMoonFill size={NAVBAR__ICONS} />
                )
              }
              alignSelf="flex-end"
              onClick={toggleColorMode}
            />
            <IconButton
              ml={2}
              icon={<BsPencilSquare size={NAVBAR__ICONS} />}
              alignSelf="flex-end"
            />
          </Flex>
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity>
          <MobileNav />
          <Text>Discord</Text>
        </Collapse> */}
      </Box>
    </div>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      <React.Fragment>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} display={{ base: "flex", md: "none" }}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  fontWeight={400}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: "blue.500",
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                ></PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </React.Fragment>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition="3s ease"
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Username",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "My Posts",
    href: "#",
  },
  {
    label: "Awards",
    href: "#",
  },
  {
    label: "Whitepaper",
    href: "#",
  },

  {
    label: "Donate",
    href: "#",
  },
];
