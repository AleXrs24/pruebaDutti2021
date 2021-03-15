import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

const credentialsMock = {
  email: 'test@test.com',
  password: 'password'
};

const fakeCredentialsMock = {
  email: 'test@test.com',
  password: 'drowssap'
};

const newUserCredentialsMock = {
  email: 'johndoe@test.com',
  password: 'qwerty1234'
};

describe('AuthService', () => {
  let service: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate user credentials', async () => {
    const result = await service.logInWithCredentialsTest(credentialsMock);
    expect(result).toEqual(true);
  });

  it('should be authenticated after register', async () => {
    const result = await service.signInWithCredentialsTest(newUserCredentialsMock);
    expect(result).toEqual(true);
  });

  it('should deny access with incorrect user credentials', async () => {
    const result = await service.logInWithCredentialsTest(fakeCredentialsMock);
    expect(result).toEqual(false);
  });
});
