import useDebounce from "@/hooks/useDebounce";
import useInfiniteScroll from "@/hooks/useInfinityScroll";
import { getGithubUsers } from "@/services/github/github-service";
import useSWRInfinite from "swr/infinite";

const getKey = (
  pageIndex: number,
  previousPageData: any,
  searchValue: string
) => {
  if (previousPageData && !previousPageData.items.length) return null;
  return `${searchValue || "a"}&page=${pageIndex + 1}`;
};

const useFetchAndPaginationUser = (searchValue: string) => {
  const debouncedSearchValue = useDebounce<string>(searchValue, 300);

  const {
    data,
    error,
    size,
    setSize,
    isValidating: isLoading,
  } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, debouncedSearchValue),
    (query) => {
      const [name, page] = query.split("&page=");
      return getGithubUsers(name, parseInt(page));
    },
    { revalidateAll: true }
  );

  const users = data ? data.map((page) => page.items).flat() : [];

  const loadMore = () => {
    setSize(size + 1);
  };

  const scrollRef = useInfiniteScroll(loadMore, isLoading);

  return {
    users,
    error,
    isLoading,
    scrollRef,
  };
};

export default useFetchAndPaginationUser;
