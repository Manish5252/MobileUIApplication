import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }

  url="https://localhost:7105/api/MobileDetails"

  fetchMobiles(){
   return this.http.get(this.url)
  }
}
  