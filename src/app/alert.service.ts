import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  callMockAPI()
  {
    console.warn("The callMockAPI Called")
    alert("Hi this is alert")
  }

}
