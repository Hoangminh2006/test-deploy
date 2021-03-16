import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-layout-trend-right',
  templateUrl: './layout-trend-right.component.html',
  styleUrls: ['./layout-trend-right.component.css']
})
export class LayoutTrendRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $(".item-trend").slice(0, 5).show();
      console.log("hello");
      $("#contentpost").focus(function () {
        console.log("hello4");
        $(".status-header ").css('height', '170px');
        $(".extend-bottom-input").css('display', 'block');
      })
      $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
          $('.box').css('position','fixed');
          $('.box').css('z-index','1000');
          $('div .trend').css('position','fixed');
          $('div .trend').css('z-index','800');

        }
        else {
          $('.box').css('position','unset');
          $('div .trend').css('position','unset');
        }
      });
    });
  }
  loadmore() {
    console.log("hello2");
    $(".item-trend:hidden").slice(0, 5).show();
    if ($(".item-trend:hidden").length == 0) {
      console.log("hết dữ liệu");
    }
  }
}
