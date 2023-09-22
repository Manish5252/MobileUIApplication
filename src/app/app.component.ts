import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ms:MobileService){
  }
  title:string = 'FirstApp';
  MobileDetails:any;
  
  ngOnInit(): void {
    this.ms.fetchMobiles().subscribe(
      (data)=>{
        this.MobileDetails=data
      }
    )
    }
  }
