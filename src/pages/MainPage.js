import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const slidesData = [
  {
    id: "1",
    title: "GraphQL Apollo",
    image: require("../assets/apollographql.png"),
    path: "/graphql-apollo",
  },
  {
    id: "2",
    title: "React Query",
    image: require("../assets/reactquery.png"),
    path: "/react-query",
  },
  {
    id: "3",
    title: "GraphQL",
    image: require("../assets/graphql.png"),
    path: "/graphgl",
  },
  {
    id: "4",
    title: "RTK",
    image: require("../assets/rtk.png"),
    path: "/rtk",
  },
  {
    id: "5",
    title: "Redux",
    image: require("../assets/redux.png"),
    path: "/redux",
  },
];

export default function MainPage() {
  return (
    <Box
      pt="100px"
      px="12px"
      minHeight="calc(100vh - 56px)"
      display="flex"
      flexDirection="column"
      maxWidth="1010px"
      mx="auto"
    >
      <Heading align="center" mb={4}>
        Fetch Magic
      </Heading>
      <Text align="center" mb={5}>
        Fetch Magic was built for learning purpose. In this application I
        practice different fetching tools to have deaper understanding of the
        topic. All solutions were implemented with Custom Hooks. For more
        details please go to the technology you are interested in. Cheers
        &#128540;
      </Text>
      <Box
        display="flex"
        flexWrap="wrap"
        mx="auto"
        justifyContent="center"
        gridGap="32px"
        mb={10}
      >
        {slidesData.map((slide) => {
          return (
            <Box
              boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
              width="300px"
              height="300px"
              key={slide.id}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              gridGap="24px"
              as={Link}
              to={slide.path}
            >
              <Image
                src={slide.image}
                alt="logo"
                boxSize="150px"
                opacity="0.5"
                objectFit="cover"
                transitionDuration="1s"
                _hover={{
                  opacity: "1",
                  transitionDuration: "1s",
                  cursor: "pointer",
                  boxSize: "200px",
                }}
              />
              <Heading as="h2" size="md">
                {slide.title}
              </Heading>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
