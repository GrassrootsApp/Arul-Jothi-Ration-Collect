import { Component, OnInit      }   from    '@angular/core';
import { Router                 }   from    '@angular/router';
import { DialogService          }   from    '../common/dialog.service';

@Component({
    selector                    :   'app-donors-list',
    templateUrl                 :   './donors-list.page.html',
    styleUrls                   :   ['./donors-list.page.scss'],
})
export class DonorsListPage implements OnInit {

    constructor(
        private dialog          :   DialogService,
        private router          :   Router,
    ) { }

    ngOnInit() {
    }

    public addressModalTapped() {
        this.dialog.showAddressModal();
    }

    public navigateToview() {
        this.router.navigateByUrl('donor-view');
    }

}
