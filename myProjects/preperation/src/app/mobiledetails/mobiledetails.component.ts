import { Component } from '@angular/core';
import { MobiledataserviceService } from '../mobiledataservice.service';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.css']
})
export class MobiledetailsComponent {

  public mobiledata: any = [];

  constructor(private _mobiledataservice: MobiledataserviceService) { }
  
  ngOnInit() {
    this._mobiledataservice.getMobileData()
      .subscribe({
        next: (data) => this.mobiledata = data,
        error: (err) => console.error('Error: ', err),
        complete: () => console.info('complete')
      });
  };

}
