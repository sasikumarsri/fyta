import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [UserComponent, HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class UserModule { }
