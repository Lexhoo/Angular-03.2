import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuisine';

  isVital:boolean = true;
  isFirst:boolean = true;
  showMovies:boolean = true;
  displayGuest:boolean = false;
  songList:string[] = ["Naza", "Denza", "Wu-tang", "Drake", "50 Cent"];

}
