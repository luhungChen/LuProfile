import { Component } from '@angular/core';
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
    data :any[]=[];
    showinfomations:any;
    constructor()
    {
       let data_json = {"company_name":"露天市集國際資訊股份有限公司 (RUTEN)","job_position":"研發工程師","job_content":[{"content":"資料處理"},{"content":"深度學習演算法在推薦系統的相關研究"}]};
       this.data.push(data_json);
       data_json = {"company_name":"大潤發流通事業股份有限公司 (RT-MART)","job_position":"程式設計師","job_content":[{"content":"ETL 建置維運開發"},{"content":"資料庫維運"},{"content":"JAVA WEB API 相關開發維運"}]};
       this.data.push(data_json);
       data_json = {"company_name":"遠傳電信 (FET)","job_position":"專業工程師","job_content":[{"content":"JAVA Spring boot WEB API開發"}]};
       this.data.push(data_json);
       data_json = {"company_name":"中華電信 (CHT)","job_position":"工程師","job_content":[{"content":"依照領域與應用場景，為使用者設計大語言模型最適合的提示語"},{"content":"資料處理"},{"content":"前端技術研究"},{"content":"大語言模型在三大公雲上的應用研究"}]};
       this.data.push(data_json);

    }
    show_info(infoModal:any,info:any)
    {
      var selectModal = new Modal(infoModal,{backdrop:'static'});
      this.showinfomations = info
      selectModal.show();
    }
}
