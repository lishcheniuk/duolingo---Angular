import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss'],
})
export class SelectTypeComponent {
  @Input() answerOptions;
  @Input() answerValue;
  @Output() writeAnswer = new EventEmitter();

  constructor() {}

  clickHandler(value) {
    this.writeAnswer.emit(value);
  }
}
