import { useEffect, useRef } from "react";

const useInfiniteScroll = (loadMore: () => void, isLoading: boolean) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const bottom =
        scrollRef.current.scrollHeight -
          scrollRef.current.scrollTop -
          scrollRef.current.clientHeight < 
        100;
      if (bottom && !isLoading) {
        loadMore();
      }
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading]);

  return scrollRef;
};

export default useInfiniteScroll;
