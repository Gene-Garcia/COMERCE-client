/*
 * This function is responsible parsing the url to get the
 * query variables.
 *
 * This allows a compnent to easily get query parameters like
 *  const query = useQuery();
 *  const token = query.get("name");
 *
 */

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default useQuery;
