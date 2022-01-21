import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { CopyBlock, nord } from "react-code-blocks";
import { graphql } from "components/codeBlocks";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import useGetUsersGraphQL from "hooks/useGetUsersGraphQL";

export default function GraphQLPage() {
  const { users } = useGetUsersGraphQL();

  return (
    <Box my="80px" px="16px" maxWidth="800px" mx="auto">
      <Box>
        <Heading align="center" mb={5}>
          This is GraphQL page
        </Heading>
        <Text align="center" mb={8}>
          GraphQL is an open-source data query and manipulation language for
          APIs, and a runtime for fulfilling queries with existing data. GraphQL
          was developed internally by Facebook in 2012 before being publicly
          released in 2015.
        </Text>
        <CopyBlock
          language={"jsx"}
          text={graphql}
          showLineNumbers={true}
          theme={nord}
          wrapLines={true}
          codeBlock
        />
      </Box>
      <Text my={5} align="center">
        This Data is Fetched by using GraphQL
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
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
