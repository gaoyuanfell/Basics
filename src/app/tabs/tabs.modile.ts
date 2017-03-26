import { NgModule } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

import { TabsRoutingModule } from './tabs-routing.module';

import { HeaderComponent } from '../header/header.component';

@NgModule({
    declarations: [
    ],
    imports: [
        TabsRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class TabsModule { }
