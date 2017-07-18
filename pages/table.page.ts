import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './base.page'

export class TablePage extends BasePage {
    public EC = protractor.ExpectedConditions;

    //Top menu
    public searchSummary = $$('h1').last()
    public alertMessage = $('.alert-message')
    public searchBox = $('#searchbox')
    public searchSubmit = $('#searchsubmit')
    public addComputer = $('#add')

    //Pagination
    public previousPage = $('prev')
    public currentPage = $('current')
    public nextPage = $('next')

    //Table
    //Headers
    //public computerNameHeader = browser.findElement(By.partialLinkText('Computer name'))
    //public introducedHeader = browser.findElement(By.partialLinkText('Introduced'))
    //public discontinuedHeader = browser.findElement(By.partialLinkText('Discontinued'))
    //public companyHeader = browser.findElement(By.partialLinkText('Company'))
    public emptyTableMsg = $('.well')

    //Rows
    public computerNameRow1 = $$('tbody tr [href*="/computers/"]').first()
    public computerNamesAllRows = $$('tbody tr [href*="/computers/"]')
    public allRows = $$('tbody tr')

    //Methods
    async searchByCompName(text) {
        await browser.wait(this.EC.visibilityOf(this.searchBox), 5000)
        await this.searchBox.clear()
        await this.searchBox.sendKeys(text)
        await this.searchSubmit.click()
    }
    async clickFilter() {
        await browser.wait(this.EC.visibilityOf(this.searchBox), 5000)
        await this.searchSubmit.click()
    }
    async selectByCompName(text) {
        await this.searchByCompName(text)
        await browser.wait(this.EC.visibilityOf(this.computerNameRow1), 5000)
        await this.computerNameRow1.click()
    }
}