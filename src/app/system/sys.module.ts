import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import sysRoutes  from './sys.route'

@NgModule({
	declarations: [
		MenuComponent
	],
	imports: [
		CommonModule,
		sysRoutes
	],
	providers: []
})
export class SysModule { }