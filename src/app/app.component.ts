import { Component } from '@angular/core';
import { Mentor } from './models/Mentor';
import { MentorService } from './services/mentor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MentorPack';
}
