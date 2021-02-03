import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  animations: [
    trigger('modal', [
      transition(':enter', [
        style({ transform: 'scale(0.1)' }),
        animate('200ms ease-out'),
      ]),
      transition(':leave', [
        animate('200ms ease-in'),
        style({ transform: 'scale(0.1)' }),
      ]),
    ]),
  ],
})
export class LessonComponent implements OnInit {
  @Input() visibleModal = false;
  @Input() lesson;
  @Output() showModal = new EventEmitter();

  ngOnInit(): void {}

  clickHandler(e) {
    e.stopPropagation();
    this.showModal.emit();
  }
}
