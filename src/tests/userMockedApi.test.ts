import { userServer } from "./mocks/userServer";
import { userApi } from "../store/userApi";
import { store } from "../store/store";
import { mockToken, mockUsers } from "./mocks/mockedData";

beforeAll(() => {
  userServer.listen();
});

afterAll(() => {
  userServer.close();
});

describe("Testing userMockedApi", () => {
  let accessToken = mockToken;
  let userId = "";
  const userData = {
    email: "user@test.com",
    password: "$2b$10$wVcZuG.PuBVgGH/BPZmUJe57BrPdZon3XESQOr250yIiuw9USD30y",
  };

  it("logs in the test user", async () => {
    const response = await store.dispatch(
      userApi.endpoints.loginUser.initiate(userData)
    );

    if ("error" in response) {
      console.error("Error registering user:", response.error);
      throw new Error("Failed to register user");
    }

    expect(response.data).toBeDefined();
    expect(response.data.user).toEqual(mockUsers[0]);
    expect(response.data.token).toBeDefined();
  });
  it("fails to create a new user with existing email", async () => {
    const response: any = await store.dispatch(
      userApi.endpoints.registerUser.initiate(userData)
    );

    expect(response.error).toBeDefined();
    expect(response.error.status).toEqual(404);
    expect(response.error.data.message).toBeDefined();
    expect(response.error.data.message).toEqual("User already registered");
  });
  it("checks user authentication", async () => {
    expect(accessToken).toBeTruthy();

    const response = await store.dispatch(
      userApi.endpoints.checkAuth.initiate(accessToken)
    );

    expect(response.data).toBeDefined();
    expect(response.data.message).toBe("Success!");
    expect(response.data.userId).toBe("65e86845abbaa8adc1af497d");

    userId = response.data.userId;
  });
  it("deletes the test user", async () => {
    expect(accessToken).toBeTruthy();
    expect(userId).toBeTruthy();

    const jwToken = accessToken;

    const response = await store.dispatch(
      userApi.endpoints.deleteUser.initiate({ userId, jwToken })
    );

    if ("error" in response) {
      console.error("Error deleting test user:", response.error);
      throw new Error("Failed to delete test user");
    }

    expect(response.data).toBeDefined();
    expect(response.data.message).toBeDefined();
    expect(response.data.message).toBe("User has been deleted!");
  });
});
