import React from "react";
// import ContactLinks from "./ContactLinks";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  const data = new Date();
  return (
    <Box
      as="footer"
      flexWrap="wrap"
      height="64px"
      background="white"
      mx="auto"
      alignItems="center"
      display="flex"
      justifyContent="center"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      px={3}
    >
      {/* <ContactLinks /> */}
      <Text align="center">
        &copy; Copyright {data.getFullYear()}, Anastasiia Dalakishvili. All
        Rights Reserved
      </Text>
    </Box>
  );
};

export default Footer;
