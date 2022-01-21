import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { CopyBlock, nord } from "react-code-blocks";
import { redux } from "../components/codeBlocks";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useGetUsersRedux } from "../hooks/useGetUsersRedux";

export default function ReduxPage() {
  const { users, loading, error } = useGetUsersRedux();

  if (loading || error) <></>;
  return (
    <Box my="80px" px="16px" maxWidth="800px" mx="auto">
      <Box>
        <Heading align="center" mb={5}>
          This is Redux page
        </Heading>
        <Text align="center" mb={8}>
          Thunk middleware for Redux. It allows writing functions with logic
          inside that can interact with a Redux store's dispatch and getState
          methods.
        </Text>
        <CopyBlock
          language={"jsx"}
          text={redux}
          showLineNumbers={true}
          theme={nord}
          wrapLines={true}
          codeBlock
        />
      </Box>
      <Text my={5} align="center">
        This Data is Fetched by using Redux
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
            {users?.map((user, id) => (
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
