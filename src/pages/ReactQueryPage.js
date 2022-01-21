import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useGetUsersReactQuery } from "../hooks/useGetUsersReactQuery";
import { CopyBlock, nord } from "react-code-blocks";
import { reactQuery } from "../components/codeBlocks";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
export default function ReactQueryPage() {
  const { data } = useGetUsersReactQuery();

  return (
    <Box my="80px" px="16px" maxWidth="800px" mx="auto">
      <Box>
        <Heading align="center" mb={5}>
          This is React Query page
        </Heading>
        <Text align="center" mb={8}>
          Performant and powerful data synchronization for React Fetch, cache
          and update data in your React and React Native applications all
          without touching any "global state".
        </Text>
        <CopyBlock
          language={"jsx"}
          text={reactQuery}
          showLineNumbers={true}
          theme={nord}
          wrapLines={true}
          codeBlock
        />
      </Box>
      <Text my={5} align="center">
        This Data is Fetched by using React Query
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
