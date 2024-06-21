import { Component, Input, InputSignal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  public _buttonLabel: string = '';
  // The styling is different if the button is defined to be a delete button
  // red background color
  public _isDeleteButton: boolean = false;

  // We want to notify the parent component that, this the user
  // clicked in this component
  public _clickHandler!: () => void;

  @Input()
  set clickHandler(handler: () => void) {
    this._clickHandler = handler;
  }

  @Input()
  set buttonLabel(buttonLabel: string) {
    this._buttonLabel = buttonLabel;
  }

  @Input()
  set isDeleteButton(isDeleteButton: boolean) {
    this._isDeleteButton = isDeleteButton;
  }

  public handleClickEvent(): void {
    // If no handler function is defined simply do not do anything
    if (!this.clickHandler) {
      return;
    }

    this.clickHandler();
  }
}
