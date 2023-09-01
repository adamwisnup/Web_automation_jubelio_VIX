const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function login_test() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://app.jubelio.com/login");

    await driver
      .findElement(By.name("email"))
      .sendKeys("qa.rakamin.jubelio@gmail.com", Key.RETURN);

    await driver
      .findElement(By.name("password"))
      .sendKeys("Jubelio123!", Key.RETURN);

    await driver.findElement(By.className("btn")).click();

    // Adding a delay for demonstration purposes
    await driver.sleep(5000);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await driver.quit();
  }
}

login_test();
