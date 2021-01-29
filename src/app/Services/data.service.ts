import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    EmployeeURL = 'https://localhost:44307/api/Employee/';
    LoginURL = 'https://localhost:44307/api/Login/'

  constructor(public http: HttpClient) { }


  post(url, input) {
    return this.http.post(url, input, {headers: this.headers});  
  }

  get(url) {
    return this.http.get(url);
  }

  listGroupDetails(): Observable<any> {
    return this.get(`${this.EmployeeURL}` + 'ListGroups');
  }

  getUserDetailsUsersTab(): Observable<any> {
    return this.get(`${this.EmployeeURL}` + 'GetLockUnlockReqList');
  }

  loginValidation(input): Observable<any> {
    return this.post(`${this.LoginURL}` + 'Validate', input);
  }

  getDetails(input): Observable<any> {
    return this.post(`${this.EmployeeURL}` + 'GetUserDetails', input);
  }

  createGroup(input): Observable<any> {
    return this.post(`${this.EmployeeURL}` + 'CreateGroup', input);
  }

  deleteGroup(input): Observable<any> {
    return this.post(`${this.EmployeeURL}` + 'DeleteGroup', input);
  }

  lockUnlockRequest(input): Observable<any> {
    return this.post(`${this.LoginURL}` + 'LockUnlockRequest', input);
  }

  lockUnlockApprove(input): Observable<any> {
    return this.post(`${this.LoginURL}` + 'LockUnlockApprove', input);
  }

}

// @Injectable()
// export class AppHttpInterceptor implements HttpInterceptor {
//     constructor() {
//     }
 
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.log(req);
//         return next.handle(req);
//     }
// }
