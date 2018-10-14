import { browser, element, by} from 'protractor';

export class HomePage{

    getAQuote = element(by.css('#get-quote'));

    openBrowser(url : string){

        browser.get(url);
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.driver.manage().deleteAllCookies();
    }

    getTitle(){
        browser.getTitle().then((title) => {
            console.log("The title is  : "+title)
            browser.sleep(5000);
          });
    }
}