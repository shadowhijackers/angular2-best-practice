import {Injectable} from '@angular/core';
import {SighInService} from './auth/sigh-in.service';
import {SighUpService} from './auth/sigh-up.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private signInService: SighInService,
    private signUpService: SighUpService,
  ) {
  }

}
