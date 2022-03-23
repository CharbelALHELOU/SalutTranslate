import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/User";

@Injectable({ providedIn: "root" })
export class AuthService {
  private url: string = "https://thawing-journey-90753.herokuapp.com/user";

  private authStatus = new BehaviorSubject(false);
  currentAuthStatus = this.authStatus.asObservable();
  private userData = new BehaviorSubject(null);
  currentUserData = this.userData.asObservable();;

  private users = new BehaviorSubject(null);
  currentUsers = this.users.asObservable();

  constructor(private http: HttpClient, private router: Router) {}


  registerUser(user: any) {
    return this.http.post<any>(this.url + "/register", user);
  }

  loginUser(user : User) {
    return this.http.post<any>(this.url + "/login", user);
  }

  delete(userId : string){
    return this.http.delete<any>(this.url + "/"+ userId);
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  editMentors(selection : string[], userId : string) {
    console.log(selection);
    return this.http.put<any>(this.url + '/' + userId ,{ mentors : selection})
  }

  getToken() {
    return localStorage.getItem("token");
  }

  upload(form : FormData, id : string){
    return this.http.post<any>(this.url + "/upload/" + id, form);
  }

  assign(userId : string, mentor : string){
    return this.http.post<any>(this.url + "/assign", {userId : userId, mentor : mentor});
  }


  getAllUsers() {
    return this.http.get<any>(this.url + "/all");
  }
}
