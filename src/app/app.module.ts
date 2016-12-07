import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

//组件
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';//首页
import { HomeComponent } from './home/home.component';

//服务
import { LoginService } from './login/login.service';//登录

//http
import { HttpInterceptor } from './base/httpInterceptor'

import { Global } from './base/global';

import appRoutes from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    appRoutes,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[
     LoginService,
     Global,
     HttpInterceptor
  ]
})
export class AppModule { }
