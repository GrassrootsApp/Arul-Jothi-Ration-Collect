import { Component, OnInit      }   from    '@angular/core';
import { Router                 }   from    '@angular/router';

@Component({
    selector                    :   'app-donor-view',
    templateUrl                 :   './donor-view.page.html',
    styleUrls                   :   ['./donor-view.page.scss'],
})
export class DonorViewPage implements OnInit {

    constructor(
        private router          :   Router,
    ) { }

    ngOnInit() {
    }

    public navigateToform() {
        this.router.navigateByUrl('donation-form');
    }

}
