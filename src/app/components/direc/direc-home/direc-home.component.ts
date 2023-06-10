import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-direc-home',
  templateUrl: './direc-home.component.html',
  styleUrls: ['./direc-home.component.scss']
})
export class DirecHomeComponent {

  form = this.fb.group({
    digonly: ['']
  });

  constructor( public fb: FormBuilder ) {

  }

}
