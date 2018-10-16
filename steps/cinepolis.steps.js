import homePage from '../page_objects/home.page';
import moviePage from '../page_objects/movie.page';
// import searchPage from '../page_objects/search.page';

module.exports = function(){
    this.Given(/^A client is on the home page$/, function () {
        homePage.open('false');
        homePage.maximaze('true');
      });

      this.When(/^The solicitated information is entered$/, function () {
          homePage.city.selectByVisibleText('San Pedro');
          homePage.complejo.selectByVisibleText('Cinépolis San Pedro');
          browser.pause(3000);
      });

    this.When(/^the search is submitted$/, function () {

      });

    this.Then(/^Enter to the function of Venom$/, function(){
        moviePage.venom.click();
        browser.pause(2000);
    });

    this.When(/^confirm that the function schedule is correct$/, function(){

    });
}