import { loveTokenApi } from "../store/loveTokensApi";
import { store } from "../store/store";
import { LoveToken } from "../models/LoveToken";

describe("Testing loveTokenApi", () => {
  it("fetches featured love tokens", async () => {
    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchFeaturedLoveTokens.initiate()
    );

    expect(Array.isArray(data)).toBe(true);
    expect(data!.length).toBeGreaterThan(0);

    data!.forEach((loveToken: LoveToken) => {
      expect(loveToken).toHaveProperty("createdBy");
      expect(loveToken.createdBy).toHaveProperty("userName");
      expect(loveToken.createdBy).toHaveProperty("userId");
      expect(loveToken).toHaveProperty("_id");
      expect(loveToken).toHaveProperty("labels");
      expect(loveToken).toHaveProperty("phrase");
      expect(loveToken).toHaveProperty("creationDate");
      expect(loveToken).toHaveProperty("tokenNumber");
    });
  });
  it("fetches love tokens with categories", async () => {
    const categories = ["Serenity"];

    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchLoveTokens.initiate(categories)
    );

    expect(Array.isArray(data)).toBe(true);
    expect(data!.length).toBeGreaterThan(0);
  });
  it("fetches at least 10 love tokens without categories", async () => {
    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchLoveTokens.initiate([""])
    );

    expect(Array.isArray(data)).toBe(true);
    expect(data!.length).toBeGreaterThan(10);
  });
  it("fetches a love token by token number", async () => {
    const tokenNumber = "7";

    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchLoveTokenByNumber.initiate(tokenNumber)
    );

    expect(data).toBeDefined();
    expect(data).toHaveProperty("_id");
    expect(data).toHaveProperty("labels");
    expect(data).toHaveProperty("phrase");
    expect(data).toHaveProperty("creationDate");
    expect(data).toHaveProperty("createdBy");
    expect(data!.createdBy).toHaveProperty("userName");
    expect(data!.createdBy).toHaveProperty("userId");
    expect(data).toHaveProperty("tokenNumber");
  });
  it("fetches categories", async () => {
    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchCategories.initiate()
    );

    expect(Array.isArray(data)).toBe(true);
    expect(data!.length).toBeGreaterThan(0);

    data!.forEach((category) => {
      expect(category).toHaveProperty("_id");
      expect(category).toHaveProperty("name");
    });
  });
  // TODO test for createLoveToken
  // TODO test for fetchUserLoveToken
  // TODO test for deleteLoveToken
  // TODO test for updateLoveToken (optional, covers 100% loveTokenApi)
});
