const sayHello = require("./index");

test("Should return correct greeting", () => {
    expect(sayHello("GitHub Actions")).toBe("Hello, GitHub Actions!");
});
