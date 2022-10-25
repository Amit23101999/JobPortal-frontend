import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-humanresourcelist',
  templateUrl: './humanresourcelist.component.html',
  styleUrls: ['./humanresourcelist.component.css']
})
export class HumanresourcelistComponent implements OnInit {

  activejobs:ActiveJobs | any;
  constructor(private router:Router,
              private technologywelcomedata:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.technologywelcomedata.readhumanresourcedataservice().subscribe(
      data => this.activejobs=data
    );
  }
  applylink(id:any):void{
    this.router.navigate(['applyform',id]);
  }
  back(){
    this.router.navigate(['jobsseekerlogin']);
  }

}
