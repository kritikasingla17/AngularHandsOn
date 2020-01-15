import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserTypeComponent } from './user-type.component';

describe('UserTypeComponent', () => {
  let component: UserTypeComponent;
  let fixture: ComponentFixture<UserTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call submit func on button click',()=>{
    spyOn(component, 'userType_submit');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.userType_submit).toHaveBeenCalled();
  })
});
