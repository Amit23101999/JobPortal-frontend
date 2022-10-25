import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant_details } from '../applyform/applyform.model';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';
import { job_status } from './view.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,
              private technologyservice:TechnologywelcomedataService,
              private router:Router) { }
 id:any;
 applicant_details:Applicant_details|any;
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.technologyservice.getapplicantonjobcode(this.id).subscribe(
      data=>this.applicant_details=data
    );
  }
  statussubmit(id:number){
    //console.log(this.statusobject.status);
    this.router.navigate(['submitstatus',id]);
    // this.statusobject.applicant_details_id=100;
    // console.log(this.statusobject.applicant_details_id);
    
    // this.technologyservice.getcompanyresponsestatusservice(this.statusobject.status,this.statusobject.applicant_details_id).subscribe(
    //   data=>this.responsestatus=data
    // );
  }
  backhome(){
    this.router.navigate(['companylogin']);
  }

}
