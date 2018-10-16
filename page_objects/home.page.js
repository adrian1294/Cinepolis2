import { Page } from './page';

class homePage extends Page {
    get city () {return browser.element('#cmbCiudades');}
    get complejo() {return browser.element('#cmbComplejos');}
}

export default new homePage();