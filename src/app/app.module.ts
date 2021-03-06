import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';

import { MyDataServiceService } from './my-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpModule,
    RouterModule.forRoot([
    {
      path: 'member',
      component: MemberComponent
    },
    {
      path: 'product',
      component: ProductComponent
    }
    ])
  ],
  providers: [MyDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
