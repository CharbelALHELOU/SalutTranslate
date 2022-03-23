import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: LandingComponent },
  { path: "home", component: LandingComponent },
  /*{ path: "about", component: AboutComponent },*/
  { path: "**", component: LandingComponent },
  {
    component: LandingComponent,
    path: "",
    data: {
      title: 'MentorPack',
      metatags: {
        description: 'MentorPack is a global mentorship platform that provides young aspiring individuals with experienced mentors in the professional world.',
        keywords: 'MentorPack, Mentor, Mentors, mentor, mentors, salut, pack, mentor pack, mentorship, mentoring, business, consulting'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
