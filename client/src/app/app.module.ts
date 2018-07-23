import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IsAdminResolver } from './resolvers/admin.resolver';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HttpInterCeptor } from './interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    LoadingBarHttpClientModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "m2m", resolve: [IsAdminResolver], loadChildren: "./admin/admin.module#AdminModule" },
      { path: "m2mlogin", loadChildren: "./login/login.module#LoginModule" },
      { path: "", loadChildren: "./client/client.module#ClientModule" }
    ], {
        initialNavigation: "enabled",
        preloadingStrategy: NoPreloading
      })
  ],
  providers: [IsAdminResolver, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterCeptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
