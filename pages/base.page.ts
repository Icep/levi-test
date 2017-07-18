import { browser, element, By, $, $$, protractor } from 'protractor'
import { config } from '../config/config'

export class BasePage {
    async open(){
        browser.get(config.baseUrl)
    }

    public pageTitle = $('.fill')

}