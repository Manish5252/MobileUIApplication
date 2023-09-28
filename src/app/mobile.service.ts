import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }

  url="https://localhost:7105/api/MobileDetails"

  fetchMobiles(){
    
   return this.http.get(this.url);
  }
  deleteMobile(id:any){
    return this.http.delete(this.url+"/"+id)
   }

   postMobile(body){
   return this.http.post(this.url,body)
   }

   putMobile(body){
    return this.http.put(this.url+'/'+body.id,body)
   }
  }
  