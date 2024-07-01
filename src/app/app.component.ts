import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  @HostListener("mouseup") 
  clicked() {
    console.log(this.tech_isOpen === true)
    if(this.tech_isOpen === true) 
      this.tech_isOpen = false;
    if(this.experi_isOpen===true)
      this.experi_isOpen = false;
  } 
  tech_isOpen = false;
  experi_isOpen = false;
  informationbasic(information_basic:any,work_experience:any,degree:any,technique:any)
  {
    work_experience.className = "nav-item nav-link";
    information_basic.className = "nav-item nav-link active";
    degree.className = "nav-item nav-link";
    technique.className = "nav-item nav-link dropdown-toggle";
  }
  workexperience(information_basic:any,work_experience:any,degree:any,technique:any)
  {
    work_experience.className="nav-item nav-link active"
    information_basic.className="nav-item nav-link";
    degree.className = "nav-item nav-link";
    technique.className = "nav-item nav-link dropdown-toggle";
  }
  degrees(information_basic:any,work_experience:any,degree:any,technique:any)
  {
    work_experience.className="nav-item nav-link"
    information_basic.className="nav-item nav-link";
    degree.className = "nav-item nav-link active";
    technique.className = "nav-item nav-link dropdown-toggle";
  }
  
  technique_toggleDropdown() {
    this.tech_isOpen = !this.tech_isOpen;
    this.experi_isOpen = false;
  }
  
  project_experience_toggleDropdown() {
    this.experi_isOpen = !this.experi_isOpen;
    this.tech_isOpen = false;
  }

  technique_selectItem(item: any,information_basic:any,work_experience:any,degree:any,technique:any,project_experience:any) {
    console.log('Selected item:', item.textContent);
    this.tech_isOpen = false;
    work_experience.className="nav-item nav-link"
    information_basic.className="nav-item nav-link";
    degree.className = "nav-item nav-link";
    technique.className = "nav-link dropdown-toggle active";
    project_experience.className = "nav-link dropdown-toggle";
  }

  project_experience_selectItem(item: any,information_basic:any,work_experience:any,degree:any,technique:any,project_experience:any) {
    console.log('Selected item:', item.textContent);
    this.experi_isOpen = false;
    work_experience.className="nav-item nav-link"
    information_basic.className="nav-item nav-link";
    degree.className = "nav-item nav-link";
    technique.className = "nav-link dropdown-toggle";
    project_experience.className = "nav-link dropdown-toggle active";
  }
}
