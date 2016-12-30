import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import homeRoutes from './home.route'
import { SysModule } from '../system/sys.module'; 

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
        homeRoutes,
        // SysModule
	],
	providers: []
})
export class HomeModule { }