test(`Kindly uncomment all the following coding if testing
      with process.env.REACT_APP_LOVE_TOKEN_TEST_API_URL`, () => {
  expect(true).toBe(true);
});

// import { userApi } from "../store/userApi";
// import { store } from "../store/store";

// describe("Testing userApi", () => {
//   let accessToken = "";
//   let userId = "";
//   const userData = {
//     username: "testuser",
//     email: "testuser@example.com",
//     password: "testpassword",
//   };

//   it("creates a new test user", async () => {
//     const response = await store.dispatch(
//       userApi.endpoints.registerUser.initiate(userData)
//     );

//     if ("error" in response) {
//       console.error("Error registering user:", response.error);
//       throw new Error("Failed to register user");
//     }

//     expect(response.data).toBeDefined();
//     expect(response.data.message).toBe("User registered successfully");
//     expect(response.data.token).toBeDefined();
//   });
//   it("fails to create a new user with existing email", async () => {
//     const response: any = await store.dispatch(
//       userApi.endpoints.registerUser.initiate(userData)
//     );

//     expect(response.error).toBeDefined();
//   });
//   it("logs in test user", async () => {
//     const response = await store.dispatch(
//       userApi.endpoints.loginUser.initiate(userData)
//     );

//     if ("error" in response) {
//       console.error("Error login test user:", response.error);
//       throw new Error("Failed to login test user");
//     }

//     expect(response.data).toBeDefined();
//     expect(response.data.message).toBe("Login successful");
//     expect(response.data.token).toBeDefined();

//     accessToken = response.data.token;
//   });
//   it("checks user authentication", async () => {
//     expect(accessToken).toBeTruthy();

//     const response = await store.dispatch(
//       userApi.endpoints.checkAuth.initiate(accessToken)
//     );

//     expect(response.data).toBeDefined();
//     expect(response.data.role).toBe("user");
//     expect(response.data.userName).toBe("testuser");

//     userId = response.data.userId;
//   });
//   it("deletes the test user", async () => {
//     expect(accessToken).toBeTruthy();
//     expect(userId).toBeTruthy();

//     const jwToken = accessToken;

//     const response = await store.dispatch(
//       userApi.endpoints.deleteUser.initiate({ userId, jwToken })
//     );

//     if ("error" in response) {
//       console.error("Error deleting test user:", response.error);
//       throw new Error("Failed to delete test user");
//     }

//     expect(response.data).toBeDefined();
//     expect(response.data.success).toBe(true);
//     expect(response.data.message).toBe("User deleted successfully");
//   });
// });
