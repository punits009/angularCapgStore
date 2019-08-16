import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Showcomponent } from './ShowFeature/show.component';
//import {SignUpComponent} from "./Registration/app.signup"
import { ComponentRef } from '@angular/core/src/render3';
import { ProductService } from './Services/productService';
const routes: Routes=[
   
    {path:'home',component:Showcomponent},

    {path:'**',redirectTo:'home', pathMatch:'full'},
   // {path:'registration', component: SignUpComponent}
  
]


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        Showcomponent,
  //      SignUpComponent
		],
    providers: [ ProductService],
    bootstrap: [AppComponent]
})

export class AppModule { 

}