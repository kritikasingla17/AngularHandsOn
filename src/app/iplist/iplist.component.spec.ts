import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IPListComponent } from './iplist.component';

describe('IPListComponent', () => {
  let component: IPListComponent;
  let fixture: ComponentFixture<IPListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPListComponent ],
      imports:[FormsModule]
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


  it('should call addIP on +',()=>{
    spyOn(component, 'addIP');
    let button = fixture.debugElement.nativeElement.querySelector('.add');
    button.click();
    expect(component.addIP).toHaveBeenCalled();

  });


  it('should call deleteIP on -',()=>{
    spyOn(component, 'deleteIP');
    let button = fixture.debugElement.nativeElement.querySelector('.delete');
    button.click();
    expect(component.deleteIP).toHaveBeenCalled();
  });


  it('should call save',()=>{
    spyOn(component, 'save');
    let button = fixture.debugElement.nativeElement.querySelector('.submit');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.save).toHaveBeenCalled();
    })
  });

  it('should call validateIP function and return true',()=>{
    component.IPArray = [{ip:"172.16.254.1"}];
    var result = component.validateIp(0);
    expect(result).toBe(true);
  })

  it('should call validateIP function and return false',()=>{
    component.IPArray = [{ip:"172.16.1"}];
    var result = component.validateIp(0);
    expect(result).toBe(false);
  })
  
});
