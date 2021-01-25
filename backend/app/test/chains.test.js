const request = require('supertest');
const app = require('../../server.jest');
require("../routes/chains.routes")(app);

jest.mock("./save_json", () => ({
  save: jest.fn(),
}));

jest.mock("./usStates.json", () => [
  {
    state: "MI",
    capital: "Lansing",
    governor: "Gretchen Whitmer",
  },
  {
    state: "GA",
    capital: "Atlanta",
    governor: "Brian Kemp",
  },
]);

describe("testing-server-chains-routes", () => {
  it("GET /api/chains - success", async () => {
    const response = await request(app).get("/api/chains");
    expect(response.statusCode).toEqual(200);
  });
});