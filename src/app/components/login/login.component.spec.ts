import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  const formBuilder: FormBuilder = new FormBuilder();

  const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };

  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
    const i = antDesignIcons[key];
    return i;
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[         
        FormsModule, 
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientModule,
        NzIconModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [
        {
          provide: NZ_ICONS,
          useValue: icons
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form with email and password inputs', () => {
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#email')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#password')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should detect form is valid', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate email input as required', () => {
    const email = component.loginForm.controls.email;
  
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
  });

  it('should validate password input as required', () => {
    const password = component.loginForm.controls.password;
  
    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });

  it('should validate email format', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test');
    const errors = email.errors;
  
    expect(email.valid).toBeFalsy();
    expect(errors.required).toBeFalsy();
    expect(errors.email).toBeTruthy();
  });

  it('should validate email format correctly', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test@test.com');
    const errors = email.errors || {};
  
    expect(email.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
    expect(errors.email).toBeFalsy();
  });
  
});
