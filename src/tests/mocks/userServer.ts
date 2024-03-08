import { HttpResponse, http } from "msw";
import { setupServer } from "msw/lib/node";
import { UserLogin, UserRegister } from "../../models/Types";
import { mockToken, mockUsers } from "./mockedData";
import { mockBaseUserUrl } from "./mockedData";

export const handlers = [
  http.post(`${mockBaseUserUrl}/login`, async ({ request }) => {
    const { email, password } = (await request.json()) as UserLogin;

    const user = mockUsers.find(
      (user) => user.password === password && user.email === email
    );

    if (user) {
      return HttpResponse.json(
        {
          user,
          token: mockToken,
        },
        { status: 200 }
      );
    }

    return HttpResponse.json(null, { status: 404 });
  }),
  http.post(`${mockBaseUserUrl}/register`, async ({ request }) => {
    const userResponse = (await request.json()) as UserRegister;

    const user = mockUsers.find((user) => user.email === userResponse.email);

    if (user) {
      return HttpResponse.json(
        { message: "User already registered" },
        { status: 404 }
      );
    }

    return HttpResponse.json({ message: "Success!" }, { status: 200 });
  }),
  http.get(`${mockBaseUserUrl}/check-auth`, async ({ request }) => {
    const authorizationHeader = request.headers.get("Authorization");

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authorizationHeader?.replace("Bearer ", "");

    if (token !== mockToken) {
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    return HttpResponse.json(
      { message: "Success!", userId: mockUsers[0]._id.$oid },
      { status: 200 }
    );
  }),
  http.delete(
    `${mockBaseUserUrl}/user/:userId`,
    async ({ request, params }) => {
      const { userId } = params;

      const authorizationHeader = request.headers.get("Authorization");

      if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const token = authorizationHeader?.replace("Bearer ", "");

      if (token !== mockToken) {
        return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
      }

      let mockToDelete = [...mockUsers];
      let userIndex = mockToDelete.findIndex(
        (user) => user._id.$oid === userId
      );

      if (userIndex === -1) {
        return HttpResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      mockToDelete.splice(userIndex, 1);

      if (mockToDelete.length !== mockUsers.length - 1) {
        return HttpResponse.json(
          { message: "A problem has happened while deleting your account." },
          { status: 500 }
        );
      }
      return HttpResponse.json(
        { message: "User has been deleted!" },
        { status: 200 }
      );
    }
  ),
];

export const userServer = setupServer(...handlers);
