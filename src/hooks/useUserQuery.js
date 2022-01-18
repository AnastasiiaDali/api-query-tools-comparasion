import { useQuery } from "react-query";

const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
const spaceId = "3z09v4hcrkbr";

const fetchUsers = () =>
  fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?${accessToken}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const useUserQuery = () =>
  useQuery("users", () => fetchUsers().then((response) => response.json()));
