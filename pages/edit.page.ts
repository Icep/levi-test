import { browser, element, By, $, $$, protractor } from 'protractor'
import { AddCompPage } from './add.page'

export class EditCompPage extends AddCompPage {
    public EC = protractor.ExpectedConditions

    public deleteBtn = $('.danger')

    async deleteComp(){
        await browser.wait(this.EC.visibilityOf(this.deleteBtn), 5000);
        await this.deleteBtn.click()
    }
}
