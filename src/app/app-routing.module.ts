import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationBasicComponent } from './information-basic/information-basic.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { DegreeInformationComponent } from './degree-information/degree-information.component';

const routes: Routes = [
      {'path':'',component:InformationBasicComponent},
      {'path':'information-basic',component:InformationBasicComponent},
      {'path':'work-experience',component:WorkExperienceComponent},
      {'path':'degree-information',component:DegreeInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
