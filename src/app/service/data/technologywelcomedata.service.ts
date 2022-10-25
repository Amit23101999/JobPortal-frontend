import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicant_details } from 'src/app/applyform/applyform.model';
import { Job_Status } from 'src/app/submitstatus/submitstatus.model';


export class ActiveJobs {
  constructor(
       public id: number,
       public role:string,
       public company:string,
       public descrp:string,
       public exp:number,
       public salary:string,
       public dept:number
 ) { }
}
export class ResponeData{
  constructor(public message:any){
  }
}

export class Login{
  constructor(
  public companyName:string,
  public password:string
  ){}
}


@Injectable({
  providedIn: 'root'
})
export class TechnologywelcomedataService {

  constructor(private httpclient:HttpClient) { }
  readtechnologydataservice(){
    return this.httpclient.get<ActiveJobs[]>('http://localhost:8080/jobsbydept/1');
  }
  readmedicaldataservice(){
    return this.httpclient.get<ActiveJobs[]>('http://localhost:8080/jobsbydept/2');
  }
  readhumanresourcedataservice(){
    return this.httpclient.get<ActiveJobs[]>('http://localhost:8080/jobsbydept/3');
  }
  readmarketingdataservice(){
    return this.httpclient.get<ActiveJobs[]>('http://localhost:8080/jobsbydept/4');
  }
  postseekerformdetailservice(applyform:Applicant_details){
    return this.httpclient.post<ResponeData>('http://localhost:8080/apply-for-job',applyform,{responseType:'text'as 'json'});
  }
  postcompanyformdetailservice(companyapplyform:ActiveJobs){
    return this.httpclient.post<ActiveJobs>('http://localhost:8080/create-jobs',companyapplyform);
  }
  getcompanyformdetailservice(company:any){
    return this.httpclient.get<ActiveJobs>(`http://localhost:8080/jobs/${company}`);
  }
  getseekerapplystatusservice(id:any){
    return this.httpclient.get(`http://localhost:8080/get-status-of-job/${id}`,{responseType:'text'as 'json'});
  }
  companydeletejobservice(id:any){
    return this.httpclient.delete(`http://localhost:8080/deletejob/${id}`);
  }
  companyupdatejobservice(id:any,activejobs:ActiveJobs){
    return this.httpclient.put(`http://localhost:8080/updatejobs/${id}`,activejobs);
  }
  companyregisterdetailsservice(companyregisterdetails:Login){
    return this.httpclient.post<Login>('http://localhost:8080/signup',companyregisterdetails);
  }
  refereshPostedjoballdataservice(company:any){
    return this.httpclient.get<ActiveJobs>(`http://localhost:8080/jobs/${company}`);
  }
  getapplicantonjobcode(id:any){
    return this.httpclient.get<Applicant_details>(`http://localhost:8080/get-applicants-on-jobcode/${id}`);
  }
  getcompanyresponsestatusservice(statusobj:Job_Status){
    return this.httpclient.post<Job_Status>('http://localhost:8080/setstatus',statusobj);
  }
}
