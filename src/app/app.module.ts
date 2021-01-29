import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindUserComponent } from './Dialogs/find-user/find-user.component';
import { LoginComponent } from './Component/Main/login/login.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { ErrorPageComponent } from './Component/Main/error-page/error-page.component';
import { GridComponent } from './Component/Common/grid/grid.component';
import { CreateUserComponent } from './Dialogs/create-user/create-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './Container/user-info/user-info.component';
import { ManageUserComponent } from './Container/manage-user/manage-user.component';
import { ManageUserGroupComponent } from './Container/manage-user-group/manage-user-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { DisplayUserInfoComponent } from './Component/Common/display-user-info/display-user-info.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './Services/data.service';
import { CreateGroupComponent } from './Dialogs/create-group/create-group.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UnlockAccountComponent } from './Dialogs/unlock-account/unlock-account.component';
import { ConfirmationBoxComponent } from './Component/Common/confirmation-box/confirmation-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FindUserComponent,
    LoginComponent,
    HomeComponent,
    ErrorPageComponent,
    GridComponent,
    CreateUserComponent,
    UserInfoComponent,
    ManageUserComponent,
    ManageUserGroupComponent,
    DisplayUserInfoComponent,
    CreateGroupComponent,
    UnlockAccountComponent,
    ConfirmationBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    GridModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonToggleModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
