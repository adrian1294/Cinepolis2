import { Page } from './page';

class moviePage extends Page {
    get venom() {return browser.element('//*[@id="27870-cinepolis-san-pedro-venom"]');}
    get time() {return browser.element('/html/body/form/div[3]/div[3]/section/article/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/div/div[1]/time[1]/a');}
}

export default new moviePage();