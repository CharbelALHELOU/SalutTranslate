import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Mentor } from "../models/Mentor";
import { Application } from "../models/Application";

@Injectable({ providedIn: "root" })
export class MentorService {
  private url = "https://thawing-journey-90753.herokuapp.com/shop";

  private mentors = new BehaviorSubject(null);
  currentMentors = this.mentors.asObservable();

  private mentor = new BehaviorSubject(null);
  currentMentor = this.mentor.asObservable();

  private categories = new BehaviorSubject(null);
  currentCategories = this.categories.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getAllMentors() {
    return this.http.get<any>(this.url + "/mentors");
  }

  register(app : Application) {
    return this.http.post<any>(this.url + "/application", app);
  }
  
  show(mentorId : string, show : boolean) {
    return this.http.put<any>(this.url + "/show/" + mentorId, {show : show});
  }

  deleteMentor(mentorId : string) {
    return this.http.delete<any>(this.url + "/" + mentorId);
  }
}
