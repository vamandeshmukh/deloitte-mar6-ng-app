import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EmpComponent } from './components/emp/emp.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

// @Injectable()

@NgModule( {
  declarations: [
    AppComponent,
    EmpComponent,
    DeleteComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // include this for ngModel 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}  )
export class AppModule { 

}
