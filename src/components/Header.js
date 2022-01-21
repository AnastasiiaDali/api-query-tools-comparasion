import * as React from "react";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import RocketIcon from "assets/rocket-icon-vector.png";

const pages = [
  { id: "1", name: "Apollo", path: "/graphql-apollo" },
  { id: "2", name: "React Query", path: "/react-query" },
  { id: "3", name: "GrapgQL", path: "/graphgl" },
  { id: "4", name: "Redux RTK", path: "/rtk" },
  { id: "5", name: "Redux", path: "/redux" },
];

const Header = () => {
  return (
    <Box
      px={4}
      position="fixed"
      width="100vw"
      display="flex"
      zIndex={100}
      background="white"
      top={0}
      height="56px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
    >
      <Text
        position="absolute"
        top="10px"
        as={Link}
        to="/"
        left={{ base: "50%", md: "28px" }}
        transform={{ base: "translateX(-50%)", md: "translateX(0)" }}
        fontSize="2xl"
        fontWeight="600"
      >
        Fetch Magic
      </Text>
      <Box display={{ base: "block", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            mt={2}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          >
            Actions
          </MenuButton>
          <MenuList zIndex={100}>
            {pages.map((page) => (
              <MenuItem
                as={Link}
                to={page.path}
                key={page.id}
                style={{
                  textDecoration: "none",
                }}
              >
                {page.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <Box display={{ base: "none", md: "flex" }} m="auto">
        {pages.map((page) => (
          <Button
            key={page.id}
            as={Link}
            to={page.path}
            variant="ghost"
            style={{
              textDecoration: "none",
            }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
      <Avatar
        position="absolute"
        top="4px"
        as={Link}
        to="/"
        right={{ base: "12px", md: "28px" }}
        size="md"
        name="Kola Tioluwani"
        src={RocketIcon}
      />
    </Box>
  );
};
export default Header;
