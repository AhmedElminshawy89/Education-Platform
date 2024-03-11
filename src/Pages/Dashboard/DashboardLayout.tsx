/* eslint-disable react-hooks/rules-of-hooks */
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import img from "../../assets/Images/me.jpg";
import { motion } from "framer-motion";
import { BiBookAdd, BiCategory } from "react-icons/bi";
import { TbActivityHeartbeat, TbSubtask } from "react-icons/tb";
import { SiCoursera, SiHomebridge } from "react-icons/si";
import { PiStudent } from "react-icons/pi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}

interface NavItemProps extends FlexProps {
  to: string;
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", to: "home", icon: SiHomebridge },
  {
    name: "Courses",
    to: "courses",
    icon: SiCoursera,
  },
  {
    name: "Add Course",
    to: "addcourse",
    icon: BiBookAdd,
  },
  { name: "Category", to: "category", icon: BiCategory },
  { name: "Subcategory", to: "Subcategory", icon: TbSubtask  },
  { name: "Students", to: "student", icon: PiStudent },
  { name: "Actions", to: "actions", icon: TbActivityHeartbeat },
  { name: "Setting", to: "Setting", icon: FiSettings },
  { name: "Log Out", to: "/", icon: FiLogOut },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation();
  const handleLinkClick = () => {
    onClose();
  };
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "white")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.200")}
      w={"15rem"}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        alignItems="start"
        m="3 "
        justifyContent={{ base: "space-between", md: "center" }}
      >
        <Flex
          alignItems="center"
          m="3"
          justifyContent="center"
          flexDirection={"column"}
        >
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            className="flex items-center"
            mb={10}
          >
            <img src={logo} className="w-7 h-7 mr-2" />
            EDP
          </Text>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          to={link.to}
          onClick={() => {
            handleLinkClick();
          }}
          fontWeight={600}
          fontSize={"17px"}
          className={`${
            location.pathname === `/dashboard/${link.to}`
              ? useColorModeValue(
                  "bg-black text-white  transition-all duration-500",
                  "bg-black text-white s transition-all duration-500"
                )
              : "text-black  hover:text-black hover:shadow-xl"
          }`}
          padding={"9px 10px"}
          margin={"10px"}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
const AnimatedBox = motion(Box);

const NavItem = ({ to, icon, children, ...rest }: NavItemProps) => {
  return (
    <AnimatedBox
      as={Link}
      to={to}
      style={{ textDecoration: "none" }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className={
        location.pathname === `/dashboard/${to}`
          ? "bg-black text-white shadow-xl"
          : "text-black"
      }
    >
      <Flex
        align="center"
        p="1"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="20" as={icon} />}
        {children}
      </Flex>
    </AnimatedBox>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        className="flex items-center"
      >
        <img src={logo} className="w-7 h-7 mr-2" />
        EDP
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={img} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Ahmed Elsaied</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "white")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              {/* <MenuItem>Profile</MenuItem> */}
              <MenuItem as={NavLink} to={'Setting'}>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
