'use strict';

var LessonPage = function () {

    var until = protractor.ExpectedConditions;

    this.finish_lesson = function () {

        var finish_button = element(by.css('vim-gui-button[data-qa-id="btn-finish"] > button'));

        browser.wait(until.presenceOf(finish_button), 5000, 'Element taking too long to appear in the DOM');
        finish_button.click();
    };
};

module.exports = LessonPage;