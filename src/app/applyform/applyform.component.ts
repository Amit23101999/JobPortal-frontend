import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponeData, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';
import {FormGroup,FormControl} from '@angular/forms'
import { Applicant_details } from './applyform.model';

@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.css']
})

export class ApplyformComponent implements OnInit {

  applicantdeatils=new Applicant_details();
 // welcomemessage:ResponeData | any;
 anymessage:any;
 jobCode:number;
 
  constructor(private router:Router,
              private technologywelcomedata:TechnologywelcomedataService,
              private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.jobCode   = this.activateroute.snapshot.params['jobCode'];
    this.applicantdeatils.jobCode =  this.jobCode ;
    //console.log("#######################" + this.jobCode);
  }
  // submitform():void{
  //   this.router.navigate(['statusform']);
  // }
  formsubmit(){
    //console.log(this.applicantdeatils);
    let response=this.technologywelcomedata.postseekerformdetailservice(this.applicantdeatils);
    response.subscribe(
      data=>this.anymessage=data
    );
     //this.router.navigate(['statusform',this.anymessage]);
  }
  back(){
    this.router.navigate(['technologylist']);
  }
}
