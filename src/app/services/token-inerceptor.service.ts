import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
// Services
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req : any, next : any) {
    let authService = this.injector.get(AuthService);
    
    let tokenizedReq = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authService.getToken())
    }); 
    return next.handle(tokenizedReq);
  }
}
