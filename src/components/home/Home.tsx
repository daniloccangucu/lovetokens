import { useEffect, useState } from "react";
import { useFetchFeaturedLoveTokensQuery } from "../../store/api";

import huggingHands from "../../images/hands-hugging-heart.png";
import { getErrorMessage } from "../../utils/apiUtils";

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
          <div key={currentIndex} className="flex flex-col items-center section-container--max-height">
            <div className="px-4 text-6xl">
              <p className="text--persian-pink">“I feel loved when you</p>
              <p>
                {currentLoveToken.phrase}
                <span className="text--persian-pink">”</span>
              </p>
              <p className="italic text-base mt-4">
                Love token created by {currentLoveToken.createdBy.userName}
              </p>
            </div>
            <div>
              <img className="object-contain h-50 w-60" src={huggingHands} alt="Illustration of hands hugging a heart" />
            </div>
          </div>

        )
      )}
    </section>
  );
}

export default Home;
