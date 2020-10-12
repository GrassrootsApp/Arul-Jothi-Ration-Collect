import { Injectable             }   from    '@angular/core';
import { ModalController        }   from    '@ionic/angular'; 

import { AddressModalPage       }   from    '../common/modals/address-modal/address-modal.page'

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        private modalController :   ModalController,
    ) { }

    public async showAddressModal() {
        const Modal             =   await this.modalController.create({
            component           :   AddressModalPage,
            cssClass            :   'my-custom-modal-css1',
        });
        await Modal.present();
        return await Modal.onDidDismiss();
    }
}
