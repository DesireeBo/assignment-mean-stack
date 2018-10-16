import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';
// import statements

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  // export class

  constructor(private injector: Injector) { }
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    )
    // use token

    return next.handle(tokenizedReq)
  }

}
// end of class