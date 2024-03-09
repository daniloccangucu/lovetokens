export {};

test(`Kindly uncomment all the following coding if testing
      with process.env.REACT_APP_LOVE_TOKEN_TEST_API_URL`, () => {
  expect(true).toBe(true);
});

// import { userApi } from "../store/userApi";
// import { store } from "../store/store";
// import { affectionListApi } from "../store/affectionListApi";
// import { LoveToken } from "../models/LoveToken";

// describe("Affection List API", () => {
//   let jwToken = "";
//   let userId = "";

//   beforeAll(async () => {
//     const userData = {
//       username: "affectiontester",
//       email: "affectiontester@example.com",
//       password: "affectiontesterpassword",
//     };

//     const response = await store.dispatch(
//       userApi.endpoints.registerUser.initiate(userData)
//     );

//     if ("error" in response) {
//       console.error("Error creating test user:", response.error);
//       throw new Error("Failed to create test user");
//     }

//     jwToken = response.data.token;

//     const authResponse = await store.dispatch(
//       userApi.endpoints.checkAuth.initiate(jwToken)
//     );

//     if ("error" in authResponse) {
//       console.error("Error checking user authentication:", authResponse.error);
//       throw new Error("Failed to check user authentication");
//     }

//     userId = authResponse.data.userId;
//   });

//   afterAll(async () => {
//     const response = await store.dispatch(
//       userApi.endpoints.deleteUser.initiate({ userId, jwToken })
//     );

//     if ("error" in response) {
//       console.error("Error deleting test user:", response.error);
//       throw new Error("Failed to delete test user");
//     }
//   });

//   it("adds 3 love tokens to the affection list", async () => {
//     const loveTokenIds = [
//       "65cb83313ef6388c7b785974",
//       "65cb82953ef6388c7b785968",
//       "65cb832c3ef6388c7b78596e",
//     ];

//     for (const loveTokenId of loveTokenIds) {
//       const response = await store.dispatch(
//         affectionListApi.endpoints.addLoveTokenToList.initiate({
//           loveTokenId,
//           jwToken,
//         })
//       );

//       if ("error" in response) {
//         console.error(
//           `Error adding love token ${loveTokenId} to affection list:`,
//           response.error
//         );
//         throw new Error(
//           `Failed to add love token ${loveTokenId} to affection list`
//         );
//       }

//       expect(response.data).toBeDefined();
//       expect(response.data.success).toBe(true);
//     }

//     const updatedList = await store.dispatch(
//       affectionListApi.endpoints.getAffectionList.initiate(jwToken)
//     );
//     if ("error" in updatedList) {
//       console.error(
//         "Error fetching the updated affection list:",
//         updatedList.error
//       );
//       throw new Error("Failed to fetch the updated affection list");
//     }

//     expect(updatedList.data.affectionList).toBeDefined();
//     expect(Array.isArray(updatedList.data.affectionList)).toBe(true);
//     expect(updatedList.data.affectionList.length).toBe(3);
//     expect(updatedList.data.affectionList[0]._id).toEqual(
//       "65cb83313ef6388c7b785974"
//     );
//     expect(updatedList.data.affectionList[1]._id).toEqual(
//       "65cb82953ef6388c7b785968"
//     );
//     expect(updatedList.data.affectionList[2]._id).toEqual(
//       "65cb832c3ef6388c7b78596e"
//     );
//   });
//   it("fetches the user's affection list", async () => {
//     const response = await store.dispatch(
//       affectionListApi.endpoints.getAffectionList.initiate(jwToken)
//     );

//     if ("error" in response) {
//       console.error("Error fetching the affection list:", response.error);
//       throw new Error("Failed to fetch the affection list");
//     }

//     expect(response.data).toBeDefined();
//     expect(response.data.success).toBe(true);
//     expect(response.data.affectionList).toBeDefined();
//     expect(Array.isArray(response.data.affectionList)).toBe(true);
//     expect(response.data.affectionList.length).toBe(3);
//     const expectedLoveToken = {
//       labels: ["Warmth"],
//       phrase:
//         "express gratitude for the devotion we share, cherishing each moment as a precious gift.",
//     };
//     expect(response.data.affectionList[0]).toMatchObject(expectedLoveToken);
//   });
//   it("removes one love token from the affection list", async () => {
//     const response = await store.dispatch(
//       affectionListApi.endpoints.removeLoveTokenFromList.initiate({
//         loveTokenId: "65cb83313ef6388c7b785974",
//         jwToken,
//       })
//     );

//     if ("error" in response) {
//       console.error(
//         "Error removing love token from affection list:",
//         response.error
//       );
//       throw new Error("Failed to remove love token from affection list");
//     }

//     expect(response.data).toBeDefined();
//     expect(response.data.success).toBe(true);
//     expect(response.data.affectionList).toBeDefined();
//     expect(Array.isArray(response.data.affectionList)).toBe(true);
//     expect(response.data.affectionList.length).toBe(2);
//   });
//   it("updates the affection list order", async () => {
//     const currentResponse = await store.dispatch(
//       affectionListApi.endpoints.getAffectionList.initiate(jwToken)
//     );

//     if ("error" in currentResponse) {
//       console.error(
//         "Error fetching the affection list:",
//         currentResponse.error
//       );
//       throw new Error("Failed to fetch the affection list");
//     }

//     const affectionListIds = currentResponse.data.affectionList.map(
//       (loveToken: LoveToken) => loveToken._id
//     );

//     const newOrder = affectionListIds.reverse();

//     const response = await store.dispatch(
//       affectionListApi.endpoints.updateAffectionListOrder.initiate({
//         newOrder,
//         jwToken,
//       })
//     );

//     if ("error" in response) {
//       console.error("Error updating affection list order:", response.error);
//       throw new Error("Failed to update affection list order");
//     }

//     expect(response.data).toBeDefined();
//     expect(response.data.success).toBe(true);

//     const updatedList = response.data.loveTokens;

//     expect(Array.isArray(updatedList)).toBe(true);
//     expect(updatedList.length).toBe(3);
//     expect(updatedList[0]).toEqual(newOrder[0]);
//     expect(updatedList[1]).toEqual(newOrder[1]);
//     expect(updatedList[2]).toEqual(newOrder[2]);
//   });
// });
