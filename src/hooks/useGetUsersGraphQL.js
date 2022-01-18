import { useState, useEffect } from "react";

const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
const spaceId = "3z09v4hcrkbr";
const query = `
{
    usersCollection {
      items {
        id
        name
        email
      }
    }
  }
`;

export default function useGetUsersGraphQL() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query,
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const { data } = response;
        setUsers(data.usersCollection.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { users };
}
