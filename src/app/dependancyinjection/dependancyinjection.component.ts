import { Component } from '@angular/core';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-dependancyinjection',
  templateUrl: './dependancyinjection.component.html',
  styleUrls: ['./dependancyinjection.component.scss']
})
export class DependancyinjectionComponent {

  constructor( private alertservices:AlertService) { }
  Alert()
{
  this.alertservices.callMockAPI();
}

}
