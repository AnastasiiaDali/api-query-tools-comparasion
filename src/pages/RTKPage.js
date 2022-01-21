import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { CopyBlock, nord } from "react-code-blocks";
import { rtk } from "../components/codeBlocks";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useGetUsersQuery } from "../hooks/useGetUsersRTK";

export default function RTKPage() {
  const { data } = useGetUsersQuery();

  return (
    <Box my="80px" px="16px" maxWidth="800px" mx="auto">
      <Box>
        <Heading align="center" mb={5}>
          This is RTK page
        </Heading>
        <Text align="center" mb={8}>
          RTK Query is a powerful data fetching and caching tool. It is designed
          to simplify common cases for loading data in a web application,
          eliminating the need to hand-write data fetching & caching logic
          yourself. RTK Query is an optional addon included in the Redux Toolkit
          package, and its functionality is built on top of the other APIs in
          Redux Toolkit.
        </Text>
        <CopyBlock
          language={"jsx"}
          text={rtk}
          showLineNumbers={true}
          theme={nord}
          wrapLines={true}
          codeBlock
        />
      </Box>
      <Text my={5} align="center">
        This Data is Fetched by using RTK
      </Text>
      <Box style={{ height: "300px", overflow: "scroll" }}>
        <Table colorScheme="blackAlpha" variant="striped">
          <Thead>
            <Tr>
              <Th>Friend Name</Th>
              <Th>Email Me</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.items?.map((user, id) => (
              <Tr key={id}>
                <Td>{user.fields.name}</Td>
                <Td>{user.fields.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
