'use strict';

// https://github.com/angular/protractor/blob/master/docs/toc.md
var LoginPage = requirePO('LoginPage');
var loginPage = new LoginPage();
var ClassRoomPage = requirePO('ClassRoomPage');
var classRoomPage = new ClassRoomPage();
var startLessonPage, lessonPage;

describe('my app', function() {

    var lesson_types_list = element.all(by.css(':ng-host-c34'));


    it('test1', function() {

        browser.ignoreSynchronization = true;
        loginPage.get();
        classRoomPage = loginPage.login(browser.params.login_conf.username, browser.params.login_conf.password);
        browser.debugger();
        classRoomPage.choose_course('General');
        classRoomPage.choose_level('Advanced');
        startLessonPage = classRoomPage.open_lesson('Talking about history');
        lessonPage  = startLessonPage.continue_lesson();
        classRoomPage = lessonPage.finish_lesson();
        expect(browser.getCurrentUrl()).toMatch("skyeng.ru/");
    });
});
