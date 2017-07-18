import { browser, protractor } from 'protractor';
import { AddCompPage } from '../pages/add.page'
import { TablePage } from '../pages/table.page'
import { EditCompPage } from '../pages/edit.page'
import { defineSupportCode } from 'cucumber';
import { config } from '../config/config'
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
  let EC = protractor.ExpectedConditions
  let addCompPage = new AddCompPage()
  let tablePage = new TablePage()
  let editCompPage = new EditCompPage()

  //GIVEN
  Given(/^I'm on computer-database website$/, async () => {
    await tablePage.open()
    await browser.wait(EC.visibilityOf(tablePage.pageTitle), 5000);
    expect(await browser.getTitle()).contain('Computers database')
  })

  //WHEN
  When(/^I click on Add a new computer button$/, async () => {
    await tablePage.addComputer.click()
  })
  When(/^I enter a computer name - "([^"]*)"$/, async (name) => {
    await addCompPage.setName(name)
  })
  When(/^I enter a inroduced date in 'yyyy-MM-dd' format - "([^"]*)"$/, async (inDate) => {
    await addCompPage.setIntroducedDate(inDate)
  })
  When(/^I enter a discontinued date in 'yyyy-MM-dd' format - "([^"]*)"$/, async (disDate) => {
    await addCompPage.setDiscontinuedDate(disDate)
  })
  When(/^I change a computer name - "([^"]*)"$/, async (name) => {
    await addCompPage.compNameField.clear()
    await addCompPage.setName(name)
  })
  When(/^I change a inroduced date in 'yyyy-MM-dd' format - "([^"]*)"$/, async (inDate) => {
    await addCompPage.introducedField.clear()
    await addCompPage.setIntroducedDate(inDate)
  })
  When(/^I change a discontinued date in 'yyyy-MM-dd' format - "([^"]*)"$/, async (disDate) => {
    await addCompPage.discontinuedField.clear()
    await addCompPage.setDiscontinuedDate(disDate)
  })
  When(/^I select a company name - "([^"]*)"$/, async (company) => {
    await addCompPage.selectCompany(company)
  })
  When(/^I click the create this computer button$/, async () => {
    await addCompPage.saveChanges()
  })
  When(/^I click the save this computer button$/, async () => {
    await addCompPage.saveChanges()
  })
  When(/^I click the Cancel button$/, async () => {
    await addCompPage.cancelChanges()
  })
  When(/^I fill all fields name - "([^"]*)", start Date - "([^"]*)", end Date - "([^"]*)" , company - "([^"]*)"$/, async (compName, inDate, disDate, company) => {
    await addCompPage.setName(compName)
    await addCompPage.setIntroducedDate(inDate)
    await addCompPage.setDiscontinuedDate(disDate)
    await addCompPage.selectCompany(company)
  })
  When(/^I select computer - "([^"]*)" from the list$/, async (compName) => {
    await tablePage.selectByCompName(compName)
  })
  When(/^I enter in the filter field a part of computer name "([^"]*)"$/, async (compName) => {
    await tablePage.searchByCompName(compName)
  })
  When(/^I enter in the filter field - (.*)$/, async (compName) => {
    await tablePage.searchByCompName(compName)
  })
  When(/^I click filter by name button$/, async () => {
    await tablePage.clickFilter()
  })
  When(/^I clear filter field$/, async () => {
    await tablePage.searchBox.clear()
  })
  When(/^I leave empty filter field$/, async () => {
    await tablePage.searchBox.clear()
  })
  When(/^I click the Delete this computer button$/, async () => {
    await editCompPage.deleteComp()
  })

  //THEN
  Then(/^I should see page with form for add new computer$/, async () => {
    await browser.wait(EC.visibilityOf(addCompPage.compNameField), 5000)
    expect(await addCompPage.title.getText()).contain('Add a computer')
    expect(await addCompPage.title.getText()).to.have.string('Add a computer')
    expect(await addCompPage.compNameField.isDisplayed()).to.be.true
    expect(await addCompPage.introducedField.isDisplayed()).to.be.true
    expect(await addCompPage.discontinuedField.isDisplayed()).to.be.true
    expect(await addCompPage.companyDropDownList.isDisplayed()).to.be.true
  })
  Then(/^I should see error on name field$/, async () => {
    await browser.wait(EC.visibilityOf(addCompPage.compNameRow), 5000)
    expect(await addCompPage.compNameRow.getAttribute('class')).to.be.equal('clearfix error')
  })
  Then(/^I should see an error on the fields with wrong data$/, async () => {
    await browser.wait(EC.visibilityOf(addCompPage.compNameField), 5000)
    expect(await addCompPage.compNameRow.getAttribute('class')).to.be.equal('clearfix error')
    expect(await addCompPage.introducedRow.getAttribute('class')).to.be.equal('clearfix error')
    expect(await addCompPage.discontinuedRow.getAttribute('class')).to.be.equal('clearfix error')
  })
  Then(/^I should see a message "Done! Computer "..." has been created"$/, async () => {
    await browser.wait(EC.visibilityOf(tablePage.alertMessage), 5000)
    expect(await tablePage.alertMessage.getText()).contain('Done!')
    expect(await tablePage.alertMessage.getText()).contain('has been created')
  })
  Then(/^I should see a message "Done! Computer "..." has been updated"$/, async () => {
    await browser.wait(EC.visibilityOf(tablePage.alertMessage), 5000)
    expect(await tablePage.alertMessage.getText()).contain('Done!')
    expect(await tablePage.alertMessage.getText()).contain('has been updated')
  })
  Then(/^I shouldn't see a message "Done! Computer "..." has been updated"$/, async () => {
    await browser.wait(EC.visibilityOf(tablePage.searchSummary), 5000)
    expect(await tablePage.alertMessage.isPresent()).to.be.false
    
  })
  Then(/^I should see a message "Done! Computer has been deleted"$/, async () => {
    await browser.wait(EC.visibilityOf(tablePage.alertMessage), 5000)
    expect(await tablePage.alertMessage.getText()).contain('Done! Computer has been deleted')
  })
  Then(/^I should see - "([^"]*)" computer in the list$/, async (compName) => {
    await tablePage.searchByCompName(compName)
    await browser.wait(EC.visibilityOf(tablePage.computerNameRow1), 5000)
    expect(await tablePage.computerNameRow1.getText()).contain(compName)
  })
  Then(/^I shouldn't see - "([^"]*)" computer in the list$/, async (compName) => {
    await tablePage.searchByCompName(compName)
    await browser.wait(EC.visibilityOf(tablePage.searchBox), 5000)
    expect(await tablePage.searchSummary.getText()).contain('No computers found')
  })
  Then(/^I should see the message "No computers found"$/, async () => {
    await browser.wait(EC.visibilityOf(tablePage.searchSummary), 5000)
    expect(await tablePage.searchSummary.getText()).contain('No computers found')
  })
  Then(/^I should see this list filetered in according to filter - "([^"]*)"$/, async (compName) => {
    await tablePage.searchByCompName(compName)
    await browser.wait(EC.visibilityOf(tablePage.computerNameRow1), 5000)
    await tablePage.computerNamesAllRows.each(async (elem, index) => {
      expect(await elem.getText().then((text) => text.toLowerCase())).to.include(compName)
    })
  })
  Then(/^I should see this list filetered by - (.*)$/, async (compName) => {
    await tablePage.searchByCompName(compName)
    await browser.wait(EC.visibilityOf(tablePage.computerNameRow1), 5000)
    await tablePage.computerNamesAllRows.each(async (elem, index) => {
      expect(await elem.getText().then((text) => text.toLowerCase())).to.include(compName.toString().toLowerCase())
    })
  })
  Then(/^I should see this computer list without filter$/, async () => {
    await browser.wait(EC.visibilityOf(tablePage.searchSummary), 5000)
    expect(await tablePage.searchSummary.getText()).not.contain('No computers found')
  })
})

