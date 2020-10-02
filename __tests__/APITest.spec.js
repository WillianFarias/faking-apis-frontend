const { getUsers } = require("../src/common/usersAPI");

beforeAll(() => {
  require("whatwg-fetch");
});

describe("Users API", () => {
  test("it returns an array of users", async () => {
    const expected = [
      { name: "Jonas", surname: "T." },
      { name: "Chris", surname: "B." },
      { name: "Juliana", surname: "Crain" },
      { name: "Caty", surname: "B." }
    ];

    //Inspecionar o método
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected)
      };
      return Promise.resolve(fetchResponse);
    });

    const json = await getUsers();
    expect(json).toMatchObject(expected);

    //restaurando versao real do fetch
    window.fetch.mockRestore();
  });
});