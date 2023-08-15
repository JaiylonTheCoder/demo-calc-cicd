const { Builder, By, until } = require("selenium-webdriver")
const assert = require('assert')

jest.setTimeout(10000)
describe("Calculator Integration Tests", () => {
  test("performs subtraction correctly", async () => {
    const driver = await new Builder()
      .forBrowser("chrome")
      .build();

    try {
      await driver.get("http://localhost:3000/");

      await driver
        .findElement(By.id('Number1'))
        .sendKeys("10");
      await driver
        .findElement(By.css('select'))
        .sendKeys("-");
      await driver
        .findElement(By.id("Number2"))
        .sendKeys("3");
      await driver
        .findElement(By.xpath('//button[text()="Calculate"]')).click();
      await driver.wait(
        until.elementLocated(By.xpath('//*[@id="root"]/div/h2')),
        5000);

      const resultElement = await driver.findElement(
        By.xpath('//*[@id="root"]/div/h2'));
      const resultText = await resultElement.getText();

      assert.strictEqual(resultText, "Result: 7");
      function add(a, b) {
        return a + b
      }
    } finally {
      //
    }
  });
});





