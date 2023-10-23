import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAttrDirComponent } from './cust-attr-dir.component';

describe('CustAttrDirComponent', () => {
  let component: CustAttrDirComponent;
  let fixture: ComponentFixture<CustAttrDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAttrDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAttrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
