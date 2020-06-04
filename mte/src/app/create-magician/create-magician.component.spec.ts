import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMagicianComponent } from './create-magician.component';

describe('CreateMagicianComponent', () => {
  let component: CreateMagicianComponent;
  let fixture: ComponentFixture<CreateMagicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMagicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMagicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
