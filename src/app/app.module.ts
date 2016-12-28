import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 组件 Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';//首页
import { HomeComponent } from './home/home.component';

//自定义插件
import { CheckboxModule,RadioButtonModule,ToggleButtonModule,DialogModule } from './common';

// 服务 Injectable
import { LoginService } from './login/login.service';//登录

// 拦截器 any
import { Interceptor } from './base/interceptor'

// Injectable
import { Global } from './base/global';

// RouterModule
import appRoutes from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		appRoutes,
		HttpModule,
		FormsModule,

		CheckboxModule,
		RadioButtonModule,
		ToggleButtonModule,
		DialogModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent
	],
	bootstrap: [AppComponent],
	providers: [
		{provide: 'loginService',  useClass: LoginService},
		{provide: 'global',  useClass: Global}
	].concat(Interceptor)
})
export class AppModule { }
