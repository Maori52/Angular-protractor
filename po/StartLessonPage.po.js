'use strict';

var lessonPage = requirePO('LessonPage');

var StartLessonPage = function () {

    var until = protractor.ExpectedConditions;

    this.continue_lesson = function () {

        var continue_button = element(by.css('button[data-qa-id="btn-continue-to-lesson"]'));

        browser.wait(until.presenceOf(continue_button), 5000, 'Element taking too long to appear in the DOM');
        continue_button.click();
        return new lessonPage();
    };
};

module.exports = StartLessonPage;