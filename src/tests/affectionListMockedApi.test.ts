import { store } from "../store/store";
import { affectionListApi } from "../store/affectionListApi";
import { affectionListServer } from "./mocks/affectionListServer";
import { mockAffectionList, mockToken } from "./mocks/mockedData";
import { AffectionListGetResponse, AffectionListOrder } from "../models/Types";

beforeAll(() => {
  affectionListServer.listen();
});

afterAll(() => {
  affectionListServer.close();
});

describe("Affection List API", () => {
  it("adds 3 love tokens to the affection list", async () => {
    const loveTokenIds = [
      "65cb83313ef6388c7b785974",
      "65cb82953ef6388c7b785968",
      "65cb832c3ef6388c7b78596e",
    ];

    for (const loveTokenId of loveTokenIds) {
      const response = await store.dispatch(
        affectionListApi.endpoints.addLoveTokenToList.initiate({
          loveTokenId,
          mockToken,
        })
      );

      if ("error" in response) {
        console.error(
          `Error adding love token ${loveTokenId} to affection list:`,
          response.error
        );
        throw new Error(
          `Failed to add love token ${loveTokenId} to affection list`
        );
      }

      expect(response.data).toBeDefined();
      expect(response.data.message).toBe(
        "Love Token added to your Affection List!"
      );
    }
  });
  it("fetches the user's affection list", async () => {
    const response = await store.dispatch(
      affectionListApi.endpoints.getAffectionList.initiate(mockToken)
    );

    if ("error" in response) {
      console.error("Error fetching the affection list:", response.error);
      throw new Error("Failed to fetch the affection list");
    }

    expect(response.data).toBeDefined();
    expect(response.data.affectionList).toBeDefined();
    expect(response.data.affectionList).toMatchObject(mockAffectionList);
  });
  it("removes one love token from the affection list", async () => {
    const response = await store.dispatch(
      affectionListApi.endpoints.removeLoveTokenFromList.initiate({
        loveTokenId: "65cb83333ef6388c7b785979",
        jwToken: mockToken,
      })
    );

    if ("error" in response) {
      console.error(
        "Error removing love token from affection list:",
        response.error
      );
      throw new Error("Failed to remove love token from affection list");
    }

    expect(response.data).toBeDefined();
    expect(response.data.message).toBe(
      "Love Token has been deleted from Affection List!"
    );
  });
  it("updates the affection list order", async () => {
    const getAffectionListResponse = await store.dispatch(
      affectionListApi.endpoints.getAffectionList.initiate(mockToken)
    );

    if ("error" in getAffectionListResponse) {
      console.error(
        "Error fetching the affection list:",
        getAffectionListResponse.error
      );
      throw new Error("Failed to fetch the affection list");
    }

    expect(getAffectionListResponse.data).toBeDefined();

    let affectionListFromGet =
      getAffectionListResponse.data as AffectionListGetResponse;

    const affectionListOrder =
      affectionListFromGet.affectionList.loveTokens.map(
        (loveToken) => loveToken.$oid
      );

    const newAffectionListOrder = [...affectionListOrder.reverse()];

    const putAffectionListResponse = await store.dispatch(
      affectionListApi.endpoints.updateAffectionListOrder.initiate({
        newOrder: newAffectionListOrder,
        mockToken,
      })
    );

    if ("error" in putAffectionListResponse) {
      console.error(
        "Error updating the affection list:",
        getAffectionListResponse.error
      );
      throw new Error("Failed to update the affection list");
    }

    const affectionListOrderFromServer =
      putAffectionListResponse.data as AffectionListOrder;

    expect(affectionListOrderFromServer).toBeDefined();
    expect(affectionListOrderFromServer.newOrder).toBeDefined();
    expect(Array.isArray(affectionListOrderFromServer.newOrder)).toBe(true);
    expect(affectionListOrderFromServer.newOrder.length).toBe(7);

    const reversedOldOrder = affectionListFromGet.affectionList.loveTokens
      .map((token) => token.$oid)
      .reverse();

    if (
      affectionListOrderFromServer.newOrder.length !== reversedOldOrder.length
    ) {
      throw new Error("Arrays have different lengths");
    }

    for (let i = 0; i < affectionListOrderFromServer.newOrder.length; i++) {
      if (affectionListOrderFromServer.newOrder[i] !== reversedOldOrder[i]) {
        throw new Error("Arrays do not match element-wise");
      }
    }

    expect(true).toBe(true);
  });
});
