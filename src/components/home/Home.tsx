import { useEffect, useState } from "react";
import { useFetchFeaturedLoveTokensQuery } from "../../store/api";

import { getErrorMessage } from "../../utils/apiUtils";
import FeaturedLoveToken from "./FeaturedLoveToken";

function Home() {
  const { data: featuredLoveTokens = [], error, isLoading } = useFetchFeaturedLoveTokensQuery();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % featuredLoveTokens.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, featuredLoveTokens.length]);

  const currentLoveToken = featuredLoveTokens[currentIndex];

  return (
    <section className="flex justify-between items-start p-4">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error loading featured Love Tokens: {getErrorMessage(error)}</h2>
      ) : (
        featuredLoveTokens.length === 0 ? (
          <h2>There are no featured Love Tokens to be displayed</h2>
        ) : (
          <FeaturedLoveToken {...currentLoveToken} />
        )
      )}
    </section>
  );
}

export default Home;
