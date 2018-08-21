'use strict';

var classRoomPage = requirePO('ClassRoomPage');

var LoginPage = function() {

    var username_input = element(by.name('_username'));
    var password_input = element(by.name('_password'));
    var submit_button = element(by.css('.b-gui-v2-button.b-gui-v2-button_color_lime'));

    this.get = function(){
        browser.get('https://vimbox.skyeng.ru/');
    };

    this.login = function (username,password) {

        var until = protractor.ExpectedConditions;

        browser.wait(until.presenceOf(username_input), 5000, 'Element taking too long to appear in the DOM');
        username_input.isDisplayed();
        username_input.sendKeys(username);
        password_input.sendKeys(password);
        submit_button.click();
        return new classRoomPage;
    };
};

module.exports = LoginPage;