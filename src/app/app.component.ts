import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title: 'Post Title',
    isFavorite: true
  };

  onFavoriteChanged(eventAgs: {newValue: boolean}) {
    alert('Changed Emitted:' + eventAgs.newValue);
  }

}
