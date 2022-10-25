import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  postedjob:ActiveJobs|any;
  companyname:any;
  username:any;
  retrivedata:ActiveJobs|any;

  constructor(private router:Router,
              public technologyservice:TechnologywelcomedataService,
              private activaterouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=this.activaterouter.snapshot.params['company'];
    // this.companyname=this.activaterouter.snapshot.params['company'];
    // this.technologyservice.getcompanyformdetailservice(this.companyname).subscribe(
    //   data=>this.postedjob=data
    // );
    this.refereshjobdataall();
    // this.technologyservice.getcompanyformdetailservice(this.companyname).subscribe(
    //   data=>console.log(data)
    // ); 
  }
  refereshjobdataall(){
    this.companyname=this.activaterouter.snapshot.params['company'];
    this.technologyservice.getcompanyformdetailservice(this.companyname).subscribe(
      data=>{
      console.log(data);  
      this.postedjob=data
      });
  }
  // applylink(): void{
  //   this.router.navigate(['appliedform']);
  // }
  // updatejob(id:any){
  //   this.router.navigate(['update',id]);
  // }
  deletejob(id:any){
    this.technologyservice.companydeletejobservice(id).subscribe(
     data=>{
      console.log(data);
      this.refereshjobdataall();
     })
    this.technologyservice.refereshPostedjoballdataservice(this.companyname).subscribe(
      data=>this.postedjob=data
    ); 
   
    }
  view(id:any){
    this.router.navigate(['view',id]);
  }
  backtoprevious():void{
    this.router.navigate(['companylogin',this.username]);
  }

}
