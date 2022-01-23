import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersLoading, usersReceived, usersError } from "store/usersSlice";

const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
const spaceId = "3z09v4hcrkbr";

export function useGetUsersRedux() {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersLoading(true));

    fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/entries?${accessToken}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => dispatch(usersReceived(response.items)))
      .catch((error) => dispatch(usersError(true)))
      .finally(() => dispatch(usersLoading(false)));
  }, [dispatch]);

  return { users, loading, error };
}
