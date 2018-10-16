export class Page {

    constructor() {
        this.url = 'http://www.cinepolis.com/';
    }

    open() {
        browser.url(this.url);
    }
    
    maximaze(){
        var windowHandle = browser.windowHandle();
        browser.windowHandleMaximize('{'+windowHandle.value+'}');
    }

}