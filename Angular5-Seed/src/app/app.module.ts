import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import { ProductComponent } from "./products/product.component";
import { ProductDetail } from "./details/detail.component";

@NgModule({
    //All Modules com here
    imports:[
        BrowserModule,
        RouterModule.forRoot([
            {path:'home',component:ProductComponent},
            {path:'detail/:id',component:ProductDetail},
            {path:'',redirectTo:'home',pathMatch:'full'},
        ])
    ],
    //All component and pipe declare here
    declarations:[
        AppComponent,
        ProductComponent,
        ProductDetail
    ],
    //One main component come here
    bootstrap:[
        AppComponent
    ],
    //All service come here
    providers:[]
})

export class AppModule{

}