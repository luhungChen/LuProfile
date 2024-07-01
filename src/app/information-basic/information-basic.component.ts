import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-information-basic',
  templateUrl: './information-basic.component.html',
  styleUrl: './information-basic.component.css'
})
export class InformationBasicComponent 
{
   str :string = "";
   showinfomations:any;
   data :any[]=[];
   constructor(private http:HttpClient){
       let body={};
      // this.http.get<any>('https://pokeapi.co/api/v2/ability/?limit=20&offset=20', { observe: 'response' }).subscribe(res => {
        //   this.str =JSON.stringify(res);
      //});
       let data_json = {"Name":"陳盧宏","age":"31","Gender":"男生","Hobby":[{"content":"打桌球"},{"content":"慢跑"}],"Cer":[{"content":"OCWCD: Oracle Certified Professional Java Programmer"},{"content":"OCPJP: Oracle Certified Professional, Java EE 6 Web Component Developer"},{"content":"DP-100: Microsoft Certified: Azure Data Scientist Associate"}]};
       this.data.push(data_json);
   }
   show_info(infoModal:any,info:any)
    {
      var selectModal = new Modal(infoModal,{backdrop:'static'});
      this.showinfomations = info
      selectModal.show();
    }
}
