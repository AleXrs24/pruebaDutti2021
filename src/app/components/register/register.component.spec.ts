
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let form: FormBuilder;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[         
        FormsModule, 
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
        
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form with email and password inputs', () => {
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#first_name')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#last_name')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#username')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#email')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#password')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should detect form is valid', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should validate input fields as required', () => {
    const first_name = component.registerForm.controls.first_name;
    const last_name = component.registerForm.controls.last_name;
    const username = component.registerForm.controls.username;
    const email = component.registerForm.controls.email;
    const password = component.registerForm.controls.password;
  
    expect(first_name.valid).toBeFalsy();
    expect(last_name.valid).toBeFalsy();
    expect(username.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
    expect(first_name.errors.required).toBeTruthy();
    expect(last_name.errors.required).toBeTruthy();
    expect(username.errors.required).toBeTruthy();
    expect(email.errors.required).toBeTruthy();
    expect(password.errors.required).toBeTruthy();
  });

  it('should validate email format', () => {
    const email = component.registerForm.controls.email;
    email.setValue('test');
    const errors = email.errors;
  
    expect(email.valid).toBeFalsy();
    expect(errors.required).toBeFalsy();
    expect(errors.email).toBeTruthy();
  });

  it('should validate email format correctly', () => {
    const email = component.registerForm.controls.email;
    email.setValue('test@test.com');
    const errors = email.errors || {};
  
    expect(email.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
    expect(errors.email).toBeFalsy();
  });

  it('should validate password format', () => {
    const password = component.registerForm.controls.password;
    password.setValue('123');
    const errors = password.errors;
  
    expect(password.valid).toBeFalsy();
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeTruthy();
  });

  it('should validate password format correctly', () => {
    const password = component.registerForm.controls.password;
    password.setValue('123456');
    const errors = password.errors || {};
  
    expect(password.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeFalsy();
  });

  it('should validate min length on input fields', () => {
    const first_name = component.registerForm.controls.first_name;
    first_name.setValue('al');
    const last_name = component.registerForm.controls.last_name;
    last_name.setValue('re');
    const username = component.registerForm.controls.username;
    username.setValue('al');
    const email = component.registerForm.controls.email;
    email.setValue('alexa');
  
    expect(first_name.valid).toBeFalsy();
    expect(last_name.valid).toBeFalsy();
    expect(username.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(first_name.errors.minlength).toBeTruthy();
    expect(last_name.errors.minlength).toBeTruthy();
    expect(username.errors.minlength).toBeTruthy();
    expect(email.errors.minlength).toBeTruthy();
  });
});
