import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianDetailsComponent } from './magician-details.component';

describe('MagicianDetailsComponent', () => {
  let component: MagicianDetailsComponent;
  let fixture: ComponentFixture<MagicianDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicianDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
