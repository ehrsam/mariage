import {CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatRadioModule, MatRadioGroup],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginFormComponent {

}
