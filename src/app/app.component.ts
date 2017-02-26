import { Component } from '@angular/core';
import {FooterComponent} from "./common/footer/footer.component";
import {HeaderComponent} from "./common/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
