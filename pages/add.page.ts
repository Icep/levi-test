import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './base.page'



export class AddCompPage extends BasePage {
    public EC = protractor.ExpectedConditions;

    //Fields
    public title = $$('h1').last()
    public compNameRow = element(By.cssContainingText('.clearfix', 'Computer name'))
    public compNameField = $('#name')
    public introducedRow = element(By.cssContainingText('.clearfix', 'Introduced date'))
    public introducedField = $('#introduced')
    public discontinuedRow = element(By.cssContainingText('.clearfix', 'Discontinued date'))
    public discontinuedField = $('#discontinued')
    public companyDropDownList = $('#company')

    //Buttons
    public addBtn = $('.primary[type="submit"]')
    public cancelBtn = $('.btn[href="/computers"]')

    //Methods
    async setName(name) {
        await browser.wait(this.EC.visibilityOf(this.compNameField), 5000)
        await this.compNameField.sendKeys(name)
    }
    async setIntroducedDate(date) {
        await browser.wait(this.EC.visibilityOf(this.introducedField), 5000)
        await this.introducedField.sendKeys(date)
    }
    async setDiscontinuedDate(date) {
        await browser.wait(this.EC.visibilityOf(this.discontinuedField), 5000)
        await this.discontinuedField.sendKeys(date)
    }
    async selectCompany(companyName) {
        await browser.wait(this.EC.visibilityOf(this.companyDropDownList), 5000)
        await element(By.cssContainingText('option', companyName)).click()
    }
    async saveChanges() {
        await browser.wait(this.EC.visibilityOf(this.addBtn), 5000)
        await this.addBtn.click()
    }
    async cancelChanges() {
        await browser.wait(this.EC.visibilityOf(this.cancelBtn), 5000)
        await this.cancelBtn.click()
    }
    async createComp(compNumber) {
        for (var i = 0; i < compNumber; i++) {
            await this.setName('Counter Test Computer' + i)
            await this.saveChanges()
        }
    }
    async changeName(name) {
        await browser.wait(this.EC.visibilityOf(this.compNameField), 5000)
        await this.compNameField.clear()
        await this.setName(name)
    }
    async changeIntroducedDate(date) {
        await browser.wait(this.EC.visibilityOf(this.introducedField), 5000)
        await this.introducedField.clear()
        await this.setIntroducedDate(date)
    }
    async changeDiscontinuedDate(date) {
        await browser.wait(this.EC.visibilityOf(this.discontinuedField), 5000)
        await this.discontinuedField.clear()
        await this.setDiscontinuedDate(date)
    }
}