import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { CopyBlock, nord } from "react-code-blocks";
import { graphqlApollo } from "components/codeBlocks";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import useGetUsersApollo from "hooks/useGetUsersApollo";

export default function GraphQLApolloPage() {
  const { data } = useGetUsersApollo();
  return (
    <Box my="80px" px="16px" maxWidth="800px" mx="auto">
      <Box>
        <Heading align="center" mb={5}>
          This is GrapgQL Apollo page
        </Heading>
        <Text align="center" mb={8}>
          The leading open-source GraphQL implementation with 17M downloads per
          month and the only end-to-end cloud management solution for GraphQL.
        </Text>
        <CopyBlock
          language={"jsx"}
          text={graphqlApollo}
          showLineNumbers={true}
          theme={nord}
          wrapLines={true}
          codeBlock
        />
      </Box>
      <Text my={5} align="center">
        This Data is Fetched by using GrapgQL Apollo
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
            {data?.usersCollection?.items?.map((user, id) => (
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
