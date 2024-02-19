import { useEffect, useState } from "react";
import { useFetchFeaturedLoveTokensQuery } from "../store/api";

import FeaturedLoveToken from "../components/home/FeaturedLoveToken";
import DataLoader from "../utils/DataLoader";

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
      <DataLoader
        isLoading={isLoading}
        error={error}
        data={featuredLoveTokens}
        emptyMessage="There are no featured Love Tokens to be displayed"
        render={() => <FeaturedLoveToken {...currentLoveToken} />}
      />
    </section>
  );
}

export default Home;
