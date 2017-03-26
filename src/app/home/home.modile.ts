import { NgModule } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

import { HomeRoutingModule } from './home-routing.module';

import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

import { HeaderComponent } from '../header/header.component';

@NgModule({
    declarations: [
        Home1Component,
        Home2Component
    ],
    imports: [
        HomeRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class HomeModule { }
