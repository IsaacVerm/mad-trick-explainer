import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianListComponent } from './magician-list.component';

describe('MagicianListComponent', () => {
  let component: MagicianListComponent;
  let fixture: ComponentFixture<MagicianListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicianListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
