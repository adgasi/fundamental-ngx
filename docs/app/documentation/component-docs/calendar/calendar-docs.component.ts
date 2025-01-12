import { Component } from '@angular/core';

import * as calendarRangeSrc from '!raw-loader!./examples/calendar-range-example.component.ts';
import * as calendarSingleSrc from '!raw-loader!./examples/calendar-single-example.component.ts';
import * as calendarMondayStartSrc from '!raw-loader!./examples/calendar-monday-start-example.component.ts';
import * as calendarIntlSrc from '!raw-loader!./examples/calendar-i18n-example.component.ts';
import * as calendarSingleFormSource from '!raw-loader!./examples/calendar-form-single-example.component.ts';
import * as calendarRangeFormSource from '!raw-loader!./examples/calendar-form-range-example.component.ts';
import * as calendarProgrammaticallySource from '!raw-loader!./examples/calendar-programmatically-change-example.component.ts';
import { ExampleFile } from '../../core-helpers/code-example/example-file';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar-docs.component.html'
})
export class CalendarDocsComponent {

    exampleFunctionsHtml = `Example Disable and Block Functions: 

// Disable the weekends
myDisableFunction = function (d: FdDate): boolean {
    let day = d.getDay();
    return day === 6 || day === 0;
}

// Disable any weekday (Monday)
myDisableFunction2 = function(d: FdDate): boolean {
    let day = d.getDay();
    return day === 1;
}

// Disable past selection
myDisableFunction = function(d: FdDate): boolean {
    let today = FdDate.getToday();
    today.setHours(0,0,0,0);
    return d.getTimeStamp() < today.getTimeStamp();
}

// Disable future selection
myDisableFunction = function(d: FdDate): boolean {
    let today = FdDate.getToday();
    today.setHours(0,0,0,0); 
    return d.getTimeStamp() > today.getTimeStamp()
}

// Disable days before a particular day
myDisableFunction = function(d: FdDate): boolean {
    let day = new FdDate(2018, 9, 15);
    return d.getTimeStamp() < day.getTimeStamp();
}

// Disable days after a particular day
myDisableFunction = function(d: FdDate): boolean {
    let day = new FdDate(2018, 9, 5);
    return d.getTimeStamp() > day.getTimeStamp()
}

// Disable days within a range
myDisableFunction = function(d: FdDate): boolean {
    let firstDay = new FdDate(2018, 7, 5);
    let lastDay = new FdDate(2018, 7, 20);
    return d.getTimeStamp() > firstDay.getTimeStamp() && d.getTimeStamp() < lastDay.getTimeStamp()
}`;

    calendarSingleSource: ExampleFile[] = [
        {
            language: 'typescript',
            code: calendarSingleSrc
        },
        {
            language: 'typescript',
            code: this.exampleFunctionsHtml,
            name: 'Example Block/Disable Functions'
        }
    ];

    calendarRangeSource: ExampleFile[] = [{
        language: 'typescript',
        code: calendarRangeSrc
    }];

    calendarMondayStartSource: ExampleFile[] = [{
        language: 'typescript',
        code: calendarMondayStartSrc
    }];

    calendari18n: ExampleFile[] = [{
        language: 'typescript',
        code: calendarIntlSrc
    }];

    calendarSingleFormSource: ExampleFile[] = [{
        language: 'typescript',
        code: calendarSingleFormSource
    }];

    calendarRangeFormSource: ExampleFile[] = [{
        language: 'typescript',
        code: calendarRangeFormSource
    }];

    calendarProgrammaticallySource: ExampleFile[] = [{
        language: 'typescript',
        code: calendarProgrammaticallySource
    }];

}
