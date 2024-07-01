import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeInformationComponent } from './degree-information.component';

describe('DegreeInformationComponent', () => {
  let component: DegreeInformationComponent;
  let fixture: ComponentFixture<DegreeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DegreeInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegreeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
