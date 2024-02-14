import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../store";
import { fetchFeaturedLoveTokens } from "../../store/loveTokensSlice";
import huggingHands from "../../images/hands-hugging-heart.png";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const featuredLoveTokens = useSelector((state: RootState) => state.loveTokens.featuredLoveTokens);
  const status = useSelector((state: RootState) => state.loveTokens.status);
  const error = useSelector((state: RootState) => state.loveTokens.error);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchFeaturedLoveTokens());
    }
  }, [status, dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % featuredLoveTokens.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, featuredLoveTokens.length]);

  const currentLoveToken = featuredLoveTokens[currentIndex];

  return (
    <section className="flex justify-between items-start p-4">
      {status === 'loading' ? (
        <h2>Loading...</h2>
      ) : status === 'failed' ? (
        <h2>Error loading featured Love Tokens {error ? `: ${error}` : '.'}</h2>
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
