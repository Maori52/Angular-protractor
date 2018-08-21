'use strict';

var startLessonPage = requirePO('StartLessonPage');

var ClassRoomPage = function(){

    var until = protractor.ExpectedConditions;

    this.choose_course = function (course_name) {

        var course = element(by.xpath('//div[@data-qa-id="programs-item"]//div[contains(text(),"' + course_name + '") and @_ngcontent-c32]'));

        browser.wait(until.presenceOf(course), 5000, 'Element taking too long to appear in the DOM');
        course.click();
    };

    this.choose_level = function (level_name) {

        var level = element(by.xpath('//ul[@_ngcontent-c31]//li[contains(text(),"' + level_name + '")]'));

        level.click();
    };

    this.open_lesson = function (lesson_name) {

        var lesson = element(by.xpath('//span[@data-qa-id="lesson-title" and contains(text(),"' + lesson_name + '")]'));

        browser.wait(until.presenceOf(lesson), 5000, 'Element taking too long to appear in the DOM');
        element(by.xpath('//span[@_ngcontent-c27 and contains(text(),"Talking about history")]/ancestor::tr')).click();
        element(by.xpath('//span[@_ngcontent-c27 and contains(text(),"Talking about history")]/ancestor::tr/td[contains(@class,"buttons-block")]//button')).click();
        return new startLessonPage;

    };
};

module.exports = ClassRoomPage;