import { Component, Input } from '@angular/core';
import { Status } from 'src/app/models/status.enum';
import { workflow } from 'src/app/models/workflow';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  singleWorkflow: workflow | undefined;
  StatusType: Status | undefined;

  constructor(){
    console.log(this.singleWorkflow)
  }

}
