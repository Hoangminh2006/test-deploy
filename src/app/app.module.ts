import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './share/component/layout/layout.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MenuLeftComponent} from './layout/menu-left.component';
import { HomeComponent } from './view/home/home.component';
import { ExploreComponent } from './view/explore/explore.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { ExtentionRightComponent } from './layout/extention-right.component';
import { NavLeftItemComponent } from './sub-layout/nav-left-item/nav-left-item.component';
import { LayoutPostItemComponent } from './sub-layout/layout-post-item/layout-post-item.component';
import { LayoutTrendRightComponent } from './sub-layout/layout-trend-right/layout-trend-right.component';
import { LayoutWhoFollowComponent } from './sub-layout/layout-who-follow/layout-who-follow.component'
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuLeftComponent,
    HomeComponent,
    ExploreComponent,
    LayoutMainComponent,
    ExtentionRightComponent,
    NavLeftItemComponent,
    LayoutPostItemComponent,
    LayoutTrendRightComponent,
    LayoutWhoFollowComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
