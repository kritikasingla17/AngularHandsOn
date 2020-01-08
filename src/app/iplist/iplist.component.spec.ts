import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPListComponent } from './iplist.component';

describe('IPListComponent', () => {
  let component: IPListComponent;
  let fixture: ComponentFixture<IPListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
