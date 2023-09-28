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
  MobileDetails=null;
 formHeader="Add Mobiles"
 id=null;
 mobileName:string;
 price:number;
 ram:number;
 storage:number;
 showForm=false;

  
  ngOnInit(): void {
    this.getMobiles()
    }

    getMobiles(){
      this.ms.fetchMobiles().subscribe(
        (data)=>{
          this.MobileDetails=data
        }
      )
    }

    deleteMobile(id:any){
      this.ms.deleteMobile(id).subscribe(
        (res)=>{
          this.getMobiles()
        }
      )
    }

    openForm(data=null){
      this.showForm=true;
      if(data){
        this.id=data.id;
        this.mobileName=data.mobileName;
        this.price=data.price;
        this.ram=data.ram;
        this.storage=data.storage;
        this.formHeader="Edit"
      }
      else{
        this.id=null;
        this.formHeader="Add Mobiles"
      }
    }

    closeForm(){
      this.showForm=false;
      this.clearForm()
    }

    clearForm(){
      this.id=null;
      this.mobileName=null;
      this.price=null;
      this.ram=null;
      this.storage=null;
    }

    saveMobile(){
      this.showForm=false;
      let body={
        id:this.id?this.id:0,
        mobileName:this.mobileName,
        price:this.price,
        ram:this.ram,
        storage:this.storage
      }

      if(this.id){
        body['id']=this.id;
        this.ms.putMobile(body).subscribe(
          (res)=>{
            this.getMobiles()
          },
        )
      }
      
      else{
        this.ms.postMobile(body).subscribe(
          (res)=>{
            this.getMobiles()
          },
        )
      }
    }
  }
