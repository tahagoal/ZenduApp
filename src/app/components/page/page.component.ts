import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { workflow } from 'src/app/models/workflow';
import { Status } from 'src/app/models/status.enum';
import { jsonData } from 'src/app/models/jsonData.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  flows: workflow[] = [];
  jsonDataResult: workflow[] | undefined;

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get('assets/data/flows.json').subscribe((data: jsonData) => {
      this.jsonDataResult = data.result;
      this.mappingFlows();
    });
  }

  mappingFlows() {
    if(this.jsonDataResult){
      this.flows = this.jsonDataResult.map( (element) => {
        let elementStatus: Status;
        if (element.status == Status.lowRisk) {
          elementStatus = Status.lowRisk
        }
        else if (element.status == Status.needsReview) {
          elementStatus = Status.needsReview
        }
        else {
          elementStatus = Status.unComplete;
        }
        return (new workflow(element.title, element.from, element.to, new Date(element.dueDate), elementStatus))
      })
    }
  }

}