import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'content-project';
  label = 'Create';
  show = false;

  toggleContent() {
    this.label = 'Destroy';
    this.show = !this.show;
  }
}
