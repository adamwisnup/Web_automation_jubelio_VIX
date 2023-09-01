const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

async function stock_inventory_test() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://app.jubelio.com/login");

    await driver
      .findElement(By.name("email"))
      .sendKeys("qa.rakamin.jubelio@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Jubelio123!");

    await driver.findElement(By.className("btn")).click();

    await driver.wait(
      until.elementLocated(By.css("a.metismenu-link.has-active-child")),
      10000 // Menunggu paling lama 10 detik
    );

    await driver
      .findElement(By.css("a.metismenu-link.has-active-child"))
      .click();

    await driver.sleep(5000);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await driver.quit();
  }
}

stock_inventory_test();
