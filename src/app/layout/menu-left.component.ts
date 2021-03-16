import { Component, Injector, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-menu-left',
    templateUrl: './menu-left.component.html',
    styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

    ngOnInit() { }
    constructor() { }
    ngAfterViewInit(): void {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $('.box').css('position', 'fixed');
            }
        });
        $('header').css('height',$(window).height())
    }
}

