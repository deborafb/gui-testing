const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('countries', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    driver.manage().deleteAllCookies();
    await driver.get('http://localhost:8080/admin');
    // await driver.get('http://150.165.75.99:8080/admin');
    await driver.findElement(By.id('_username')).sendKeys('sylius');
    await driver.findElement(By.id('_password')).sendKeys('sylius');
    await driver.findElement(By.css('.primary')).click();
    // await driver.sleep(1000);
  });


  // Remove .only and implement others test cases!
  it.only('Test case 1: add and remove province in United Kingdom', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('GB');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in filter blue button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces
    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('GG-GG');
    await driver.findElement(By.id('sylius_country_provinces_0_name')).sendKeys('Gerson');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('Gege');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();
    // Assert that country has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Country has been successfully updated.'));

    // Click on Delete button
    await driver.findElement(By.css('.required > #sylius_country_provinces > div > div > .red')).click();
    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();
    // Assert that country has been updated
    const bodyTextAfterRemove = await driver.findElement(By.tagName('body')).getText();
    assert(bodyTextAfterRemove.includes('Country has been successfully updated.'));
  });

  it.only('Test case 2: Create new country with enabled activated', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Click in create a new country
    await driver.findElement(By.css('*[class^="ui right floated buttons"]')).click();

    // Select country code
    let dropdown = await driver.findElement(By.id('sylius_country_code'));
    await dropdown.findElement(By.xpath("//option[. = 'Cape Verde']")).click();

    // Click in create a new country
    const buttons = await driver.findElements(By.css('*[class^="ui buttons"]'));
    await buttons[0].click();

    // Assert that country has been created
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Country has been successfully created.'));

  });

  it.only('Test case 3: Change value of field "enabled"', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('CV');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click on the label to disable
    await driver.findElement(By.css('label[for="sylius_country_enabled"]')).click();

    // Click on Save changes button
    const buttons2 = await driver.findElements(By.css('*[class^="ui buttons"]'));
    await buttons2[0].click();

    // Assert that country has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Country has been successfully updated.'));

  });

  it.only('Test case 4: Add province Canada', async () => {

    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('CA');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in filter blue button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces
    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('ON-ON');
    await driver.findElement(By.id('sylius_country_provinces_0_name')).sendKeys('Ontario');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('On');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();
    // Assert that country has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Country has been successfully updated.'));

  });

  it.only('Test case 5: Remove province Canada', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('CA');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click on Delete button
    await driver.findElement(By.css('.required > #sylius_country_provinces > div > div > .red')).click();

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that country has been updated
    const bodyTextAfterRemove = await driver.findElement(By.tagName('body')).getText();
    assert(bodyTextAfterRemove.includes('Country has been successfully updated.'));

  });

  it.only('Test case 6: Filter disabled country', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only disabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'No']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('CV');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Assert that country has been returned
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Cape Verde'));

  });

  it.only('Test case 7: Add province with invalid code', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('FR');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in add province to button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces

    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('XX');
    await driver.findElement(By.id('sylius_country_provinces_0_name')).sendKeys('Gerson');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('Gege');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that country wasn't updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('This form contains errors.'));
  });

  it.only('Test case 8: Add province without name', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('FR');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in add province to button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces

    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('XY-XY');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('Gege');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that country wasn't updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('This form contains errors.'));
  });

  it.only('Test case 9: Add two provinces with the same code in a single country', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('FR');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in add province button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces

    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('TY-SW');
    await driver.findElement(By.id('sylius_country_provinces_0_name')).sendKeys('Swift');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('TAY');

    // Click in add province button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces
    await driver.findElement(By.id('sylius_country_provinces_1_code')).sendKeys('TY-SW');
    await driver.findElement(By.id('sylius_country_provinces_1_name')).sendKeys('Alison');
    await driver.findElement(By.id('sylius_country_provinces_1_abbreviation')).sendKeys('TS');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that country wasn't updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('HTTP 500'));
  });

  it.only('Test case 10: Add province with lowercase code characters', async () => {
    // Click in countries in side menu
    await driver.findElement(By.linkText('Countries')).click();

    // Select only enabled countries
    let dropdown = await driver.findElement(By.id('criteria_enabled'));
    await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click();

    // Type to search a specify country
    await driver.findElement(By.id('criteria_code_value')).sendKeys('FR');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last country
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click in add province button
    await driver.findElement(By.css('.ui > .ui > .required > #sylius_country_provinces > .ui')).click();

    // Filling data of provinces

    await driver.findElement(By.id('sylius_country_provinces_0_code')).sendKeys('xx-zz');
    await driver.findElement(By.id('sylius_country_provinces_0_name')).sendKeys('Zezo');
    await driver.findElement(By.id('sylius_country_provinces_0_abbreviation')).sendKeys('zz');

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that country wasn't updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('This form contains errors.'));
  });

});

