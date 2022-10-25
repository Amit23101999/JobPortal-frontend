import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { TechnologylistComponent } from './technologylist/technologylist.component';
import { MedicallistComponent } from './medicallist/medicallist.component';
import { HumanresourcelistComponent } from './humanresourcelist/humanresourcelist.component';
import { MarketinglistComponent } from './marketinglist/marketinglist.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { StatusformComponent } from './statusform/statusform.component';
import { MenuComponent } from './menu/menu.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { PostJobComponent } from './post-job/post-job.component';
import { AppliedComponent } from './applied/applied.component';
import { WelcomeuserloginComponent } from './welcomeuserlogin/welcomeuserlogin.component';
import { LogoutComponent } from './logout/logout.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { CompanystatusComponent } from './companystatus/companystatus.component';
import { ViewComponent } from './view/view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { SubmitstatusComponent } from './submitstatus/submitstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    TechnologylistComponent,
    MedicallistComponent,
    HumanresourcelistComponent,
    MarketinglistComponent,
    ApplyformComponent,
    StatusformComponent,
    MenuComponent,
    CreateJobComponent,
    PostJobComponent,
    AppliedComponent,
    WelcomeuserloginComponent,
    LogoutComponent,
    CompanyloginComponent,
    CompanystatusComponent,
    ViewComponent,
    CompanyregisterComponent,
    UpdateJobComponent,
    SubmitstatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
