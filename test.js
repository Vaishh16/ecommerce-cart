const test = require("node:test");
const assert = require("node:assert");

test("Cart total calculation", () => {

    const price = 1000;
    const quantity = 2;

    const total = price * quantity;

    assert.strictEqual(total, 2000);
});