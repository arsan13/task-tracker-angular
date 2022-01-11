import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;   // ! denotes required
  @Input() color?: string;  // ? denotes optional


  constructor() { }

  ngOnInit(): void {
  }

}
