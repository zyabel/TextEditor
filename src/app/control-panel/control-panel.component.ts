import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Output() formatAction: EventEmitter<{}> = new EventEmitter;

  onClick(type: string): void {
    this.formatAction.emit(type);
  } 
}
