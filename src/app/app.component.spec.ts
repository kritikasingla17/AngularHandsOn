import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserTypeComponent } from './user-type/user-type.component';
import { IPListComponent } from './iplist/iplist.component';
import { FormsModule } from '@angular/forms';

//Define the routes
const appRoutes: Routes = [
  {path: '', component: UserTypeComponent},
  {path: 'list', component: IPListComponent}
]

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserTypeComponent,
        IPListComponent
      ],
      imports:[
        FormsModule,
        RouterModule.forRoot(appRoutes)
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });
});
