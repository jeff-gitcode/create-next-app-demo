import { createMocks } from "node-mocks-http";
import { GET } from "./route";
import { mockUser } from "./route.mocks";
import fetchMock from "fetch-mock";

describe("/api/user", () => {
  test("returns a list of users", async () => {
    const { req, res } = createMocks({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });
});
