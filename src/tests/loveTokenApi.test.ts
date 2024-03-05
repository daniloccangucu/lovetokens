import { loveTokenApi } from "../store/loveTokensApi";
import { userApi } from "../store/userApi";
import { store } from "../store/store";
import { LoveToken } from "../models/LoveToken";
import { DeleteLoveTokenResponse } from "../models/Types";
import { Category } from "../models/Category";

describe("Testing loveTokenApi", () => {
  let accessToken = "";
  let createdLoveToken: LoveToken;

  beforeAll(async () => {
    const userData = {
      email: "user@test.com",
      password: "testingonly",
    };
    const loginResponse = await store.dispatch(
      userApi.endpoints.loginUser.initiate(userData)
    );
    if ("data" in loginResponse) {
      accessToken = loginResponse.data.token;
    } else {
      throw new Error("Login failed: " + loginResponse.error);
    }
  });

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

    expect(typeof data!.phrase).toBe("string");
    expect(Array.isArray(data!.labels)).toBe(true);
    expect(data!.createdBy.userName).toBe("Tove Nieminen");
    expect(data!.phrase).toBe(
      "surprise me with a handwritten note expressing your admiration for the little things I do every day."
    );
    expect(data!.labels).toEqual(["Affection"]);
  });
  it("fetches categories", async () => {
    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchCategories.initiate()
    );

    expect(Array.isArray(data)).toBe(true);
    expect(data!.length).toBeGreaterThan(0);

    const expectedCategories = [
      { name: "Affection" },
      { name: "Adventure" },
      { name: "Empowerment" },
      { name: "Inspiration" },
      { name: "Intimacy" },
      { name: "Passion" },
      { name: "Physical Affection" },
      { name: "Serenity" },
      { name: "Warmth" },
    ];

    data!.forEach((category: Category) => {
      expect(category).toHaveProperty("_id");
      expect(category).toHaveProperty("name");
    });

    data!.forEach((category, index) => {
      expect(category.name).toEqual(expectedCategories[index].name);
    });
  });
  it("creates a love token", async () => {
    expect(accessToken).toBeTruthy();

    const newLoveToken = {
      labels: ["Affection"],
      phrase: "when your tests pass",
      createdBy: {
        userName: "TestUser",
        userId: "65e6e4827936fe2178d45e41",
      },
    };

    const response = await store.dispatch(
      loveTokenApi.endpoints.createLoveToken.initiate(newLoveToken)
    );

    if ("error" in response) {
      throw new Error("Failed to create love token: " + response.error);
    }

    const loveTokenResponse = response.data;
    expect(loveTokenResponse).toBeDefined();
    expect(loveTokenResponse.loveToken.labels).toEqual(newLoveToken.labels);
    expect(loveTokenResponse.loveToken.phrase).toEqual(newLoveToken.phrase);
    expect(loveTokenResponse.loveToken.creationDate).toBeDefined();
    expect(loveTokenResponse.loveToken.createdBy).toBeDefined();
    expect(loveTokenResponse.loveToken.tokenNumber).toBeDefined();
    expect(loveTokenResponse.loveToken.createdBy.userName).toEqual(
      newLoveToken.createdBy.userName
    );
    expect(loveTokenResponse.loveToken.createdBy.userId).toEqual(
      newLoveToken.createdBy.userId
    );
    createdLoveToken = loveTokenResponse.loveToken;
  });
  it("fetches love tokens for TestUser", async () => {
    const userId = "65e6e4827936fe2178d45e41"; // test user's id
    const { data } = await store.dispatch(
      loveTokenApi.endpoints.fetchUserLoveToken.initiate({
        userId,
        token: accessToken,
      })
    );

    expect(Array.isArray(data)).toBe(true);
    expect(data!.length).toBeGreaterThan(0);

    data!.forEach((loveToken) => {
      expect(loveToken).toHaveProperty("_id");
      expect(loveToken).toHaveProperty("labels");
      expect(loveToken).toHaveProperty("phrase");
      expect(loveToken).toHaveProperty("creationDate");
      expect(loveToken).toHaveProperty("createdBy");
      expect(loveToken.createdBy).toHaveProperty("userName", "TestUser");
      expect(loveToken.createdBy).toHaveProperty("userId", userId);
      expect(loveToken).toHaveProperty("tokenNumber");
    });
  });
  it("deletes a love token", async () => {
    expect(accessToken).toBeTruthy();

    const tokenNumber = createdLoveToken.tokenNumber;

    const response = (await store.dispatch(
      loveTokenApi.endpoints.deleteLoveToken.initiate({
        tokenNumber,
        jwToken: accessToken,
      })
    )) as DeleteLoveTokenResponse;

    expect(response).toBeDefined();
    expect(response.data.success).toBe(true);
    expect(response.data.message).toBe("Love Token deleted successfully");
  });
});
