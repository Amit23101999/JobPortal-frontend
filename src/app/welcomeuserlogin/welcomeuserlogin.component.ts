import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveJobs } from '../create-job/createjob.model';
import { AuthenticationService } from '../service/authentication.service';
import { TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-welcomeuserlogin',
  templateUrl: './welcomeuserlogin.component.html',
  styleUrls: ['./welcomeuserlogin.component.css']
})
export class WelcomeuserloginComponent implements OnInit {

  activejobs:ActiveJobs|any;
  id:any;
  constructor(private authenticationservice:AuthenticationService,
              private router:Router,
              private activateRoute:ActivatedRoute,
              private technologywelcomedata:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.technologywelcomedata.getseekerapplystatusservice(this.id).subscribe(
      data=>console.log(data)
    );

    
  }
  logoutclick(){
    this.authenticationservice.logout();
    this.router.navigate(['logout']);
  }

}
