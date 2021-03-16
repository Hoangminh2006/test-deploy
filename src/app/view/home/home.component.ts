import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
       $('.center-header').addClass('fix-top-home');
       //  $('.center-header').css('position','fixed');
      }
      else {
         $('.center-header').removeClass('fix-top-home');
        //$('.center-header').css('position','unset');
      }
    });
  }
}
