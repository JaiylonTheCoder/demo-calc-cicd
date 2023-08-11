const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
jest.setTimeout(10000)
describe("Calculator Integration Tests", () => {
  test("performs addition correctly", async () => {
    const driver = await new Builder()
      .forBrowser("chrome")
      .build();

    try {
      await driver.get("http://localhost:3000/");

      await driver.findElement(By.id('Number1')).sendKeys("5");
      await driver.findElement(By.id('operatorSelect')).sendKeys("+");
      await driver.findElement(By.id("Number2")).sendKeys("7");
      await driver.findElement(By.xpath('//button[text()="Calculate"]')).click();

      await driver.wait(
        until.elementLocated(By.xpath('//*[@data-testid="result"]')),
        5000
      );

      const resultElement = await driver.findElement(
        By.xpath('//*[@data-testid="result"]')
      );
      const resultText = await resultElement.getText();

      assert.strictEqual(resultText, "Result: 12");
    } finally {
      await driver.quit();
    }
  });
});
