import {RouterModule} from "@angular/router";
import {HomeComponent} from '../home/home.component';

export const mangeRoutes = [
	{
		path: 'home',
		loadChildren: '../system/sys.module#SysModule'
	}
];
export default RouterModule.forChild(mangeRoutes);
