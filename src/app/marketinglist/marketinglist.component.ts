import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-marketinglist',
  templateUrl: './marketinglist.component.html',
  styleUrls: ['./marketinglist.component.css']
})
export class MarketinglistComponent implements OnInit {

  activejobs:ActiveJobs | any;
  constructor(private router:Router,
              private technologywelcomedata:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.technologywelcomedata.readmarketingdataservice().subscribe(
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
