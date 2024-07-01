import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBasicComponent } from './information-basic.component';

describe('InformationBasicComponent', () => {
  let component: InformationBasicComponent;
  let fixture: ComponentFixture<InformationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
