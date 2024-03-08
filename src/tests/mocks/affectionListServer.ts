import { HttpResponse, http } from "msw";
import { setupServer } from "msw/lib/node";
import { AffectionListOrder, LoveTokenIdRequest } from "../../models/Types";
import { mockToken, mockAffectionList } from "./mockedData";
import { mockBaseAffectionListUrl } from "./mockedData";

export const handlers = [
  http.post(
    `${mockBaseAffectionListUrl}/affection-list`,
    async ({ request }) => {
      const requestBody = await request.json();
      const { loveTokenId } = requestBody as LoveTokenIdRequest;

      if (!loveTokenId) {
        return HttpResponse.json(
          { message: "Invalid loveTokenId" },
          { status: 400 }
        );
      }

      let usersAffectionList = { ...mockAffectionList };
      const initialLength = usersAffectionList.loveTokens.length;

      usersAffectionList.loveTokens.push({ $oid: loveTokenId! });

      if (usersAffectionList.loveTokens.length !== initialLength + 1) {
        return HttpResponse.json(
          { message: "Failed to add love token to affection list" },
          { status: 500 }
        );
      }

      return HttpResponse.json(
        { message: "Love Token added to your Affection List!" },
        { status: 200 }
      );
    }
  ),
  http.get(
    `${mockBaseAffectionListUrl}/affection-list`,
    async ({ request }) => {
      const authorizationHeader = request.headers.get("Authorization");

      if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const token = authorizationHeader?.replace("Bearer ", "");

      if (token !== mockToken) {
        return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
      }

      return HttpResponse.json(
        {
          message: "Success retrieving affection list",
          affectionList: mockAffectionList,
        },
        { status: 200 }
      );
    }
  ),
  http.delete(
    `${mockBaseAffectionListUrl}/affection-list`,
    async ({ request }) => {
      const requestBody = (await request.json()) as LoveTokenIdRequest;
      const loveTokenId = requestBody.loveTokenId;
      const authorizationHeader = request.headers.get("Authorization");

      if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const token = authorizationHeader?.replace("Bearer ", "");

      if (token !== mockToken) {
        return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
      }

      let mockToDelete = JSON.parse(JSON.stringify(mockAffectionList));
      let loveTokenIndex = mockToDelete.loveTokens.findIndex(
        (loveTokenIdToFind: { $oid: string | null }) =>
          loveTokenId === loveTokenIdToFind.$oid
      );

      if (loveTokenIndex === -1) {
        return HttpResponse.json(
          { message: "Love Token not found" },
          { status: 404 }
        );
      }

      mockToDelete.loveTokens.splice(loveTokenIndex, 1);

      if (
        mockToDelete.loveTokens.length !==
        mockAffectionList.loveTokens.length - 1
      ) {
        return HttpResponse.json(
          {
            message:
              "A problem has happened while deleting your Love Token from Affection List.",
          },
          { status: 500 }
        );
      }
      return HttpResponse.json(
        { message: "Love Token has been deleted from Affection List!" },
        { status: 200 }
      );
    }
  ),
  http.put(
    `${mockBaseAffectionListUrl}/affection-list`,
    async ({ request }) => {
      const affectionListRequest = (await request.json()) as AffectionListOrder;
      let mockToUpdate = JSON.parse(JSON.stringify(mockAffectionList));
      mockToUpdate = affectionListRequest.newOrder;

      return HttpResponse.json(
        { message: "Success!", newOrder: mockToUpdate },
        { status: 200 }
      );
    }
  ),
];

export const affectionListServer = setupServer(...handlers);
