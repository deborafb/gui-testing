describe('countries', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });

  // Remove .only and implement others test cases!
  it.only('add and remove province in United Kingdom', () => {
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('Yes');
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('GB');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('GG-GG');
    cy.get('[id="sylius_country_provinces_0_name"]').type('Gerson');
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('Gege');

    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'Country has been successfully updated.');

    // Click on Delete button
    cy.get('.required > #sylius_country_provinces > div > div > .red').click();
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'Country has been successfully updated.');
  });

  it.only('Test case 2: Create new country with enabled activated', () => {
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Click in create a new country
    cy.get('*[class^="ui right floated buttons"]').click();
    // Select country code
    cy.get('#sylius_country_code').select('Cape Verde');
    // Click in create a new country
    cy.get('*[class^="ui buttons"]').first().click();
    // Assert that country has been created
    cy.contains('Country has been successfully created.').should('exist'); 
});

  it.only('Test case 3: change value of field "enabled"', () => {
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('CV');
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click on the label to disable
    cy.get('label[for="sylius_country_enabled"]').click();
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'Country has been successfully updated.');
  });

  it.only('Test case 4: Add province Canada', () => {
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('Yes');
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('CA');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('ON-ON');
    cy.get('[id="sylius_country_provinces_0_name"]').type('Ontario');
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('On');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'Country has been successfully updated.');
  });

  it.only('Test case 5: Remove province Canada', () => {
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('Yes');
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('CA'); 
    // Click in filter blue button
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click on Delete button
    cy.get('.required > #sylius_country_provinces > div > div > .red').click();
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'Country has been successfully updated.');  
  });

  it.only('Test case 6: Filter disabled country', () => {
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only disabled countries
    cy.get('#criteria_enabled').select('No');
    // Type to search a specific country
    cy.get('#criteria_code_value').type('CV');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click(); 
    // Assert that country has been created
    cy.contains('Cape Verde').should('exist');
  }); 
 
  it.only('Test case 7: add province with invalid code', () => { 
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('All');
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('FR');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('XX');
    cy.get('[id="sylius_country_provinces_0_name"]').type('Gerson');
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('Gege');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'This form contains errors.'); 
  });

  it.only('Test case 8: add province without name', () => { 
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('All');
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('FR');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('XY-XY');
    cy.get('[id="sylius_country_provinces_0_name"]').clear();
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('Man');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'This form contains errors.'); 
  });

  it.only('Test case 9: add two provinces with the same code in a single country', () => { 
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('All'); 
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('FR');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('TY-SW');
    cy.get('[id="sylius_country_provinces_0_name"]').type('Swift');
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('TAY');
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('TY-SW');
    cy.get('[id="sylius_country_provinces_0_name"]').type('Alison');
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('TS');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'This form contains errors.'); 
  });

  it.only('Test case 10: add province with lowercase code characters', () => { 
    // Click in countries in side menu
    cy.clickInFirst('a[href="/admin/countries/"]');
    // Select only enabled countries
    cy.get('[id="criteria_enabled"]').select('All'); 
    // Type to search a specify country
    cy.get('[id="criteria_code_value"]').type('FR');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last country
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click in add province to button
    cy.get('.ui > .ui > .required > #sylius_country_provinces > .ui').click();
    // Filling data of provinces
    cy.get('[id="sylius_country_provinces_0_code"]').type('xx-zz');
    cy.get('[id="sylius_country_provinces_0_name"]').type('Zezo'); 
    cy.get('[id="sylius_country_provinces_0_abbreviation"]').type('ZZ');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    // Assert that country has been updated
    cy.get('body').should('contain', 'This form contains errors.'); 
  });

}); 
