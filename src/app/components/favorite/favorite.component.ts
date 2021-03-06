import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

  @Input('isFavorite') isSelected: boolean;
  @Output('onChange') onSelectionChanged = new EventEmitter();
  
  onClick() {
    this.isSelected = !this.isSelected;
    this.onSelectionChanged.emit({newValue: this.isSelected});
  }

}
