import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedComponent } from './applied/applied.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HumanresourcelistComponent } from './humanresourcelist/humanresourcelist.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MarketinglistComponent } from './marketinglist/marketinglist.component';
import { MedicallistComponent } from './medicallist/medicallist.component';
import { MenuComponent } from './menu/menu.component';
import { PostJobComponent } from './post-job/post-job.component';
import { RouteGuardService } from './service/route-guard.service';
import { StatusformComponent } from './statusform/statusform.component';
import { SubmitstatusComponent } from './submitstatus/submitstatus.component';
import { TechnologylistComponent } from './technologylist/technologylist.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { ViewComponent } from './view/view.component';
import { WelcomeuserloginComponent } from './welcomeuserlogin/welcomeuserlogin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'jobsseekerlogin',component:LoginComponent},
  {path:'companylogin',component:CompanyloginComponent},
  {path:'companylogin/:username',component:MenuComponent},
  {path:'companyregister',component:CompanyregisterComponent},
  {path:'technologylist',component:TechnologylistComponent},
  {path:'medicallist',component:MedicallistComponent},
  {path:'humanresourcelist',component:HumanresourcelistComponent},
  {path:'marketinglist',component:MarketinglistComponent},
  {path:'applyform/:jobCode',component:ApplyformComponent},
  {path:'statusform',component:StatusformComponent},
  {path:'createjob',component:CreateJobComponent},
  // {path:'postjob',component:PostJobComponent},
  {path:'postjob/:company',component:PostJobComponent},
  {path:'appliedform',component:AppliedComponent},
 // {path:'update/:companyName',component:UpdateJobComponent},
  {path:'update/:id',component:UpdateJobComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'submitstatus/:id',component:SubmitstatusComponent},
  // {path:'welcomeuserlogin/:id',component:WelcomeuserloginComponent,canActivate: [RouteGuardService]},
  {path:'logout',component:LogoutComponent},
  {path:'**',component:ErrorComponent}//default component set

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
