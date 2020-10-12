import { Component              }   from    '@angular/core';
import { Router                 }   from    '@angular/router';

import { Platform               }   from    '@ionic/angular';
import { SplashScreen           }   from    '@ionic-native/splash-screen/ngx';
import { StatusBar              }   from    '@ionic-native/status-bar/ngx';

@Component({
    selector                    :   'app-root',
    templateUrl                 :   'app.component.html',
    styleUrls                   :   ['app.component.scss']
})
export class AppComponent {

    public routes               :   Array<any>          =   [{
        name                    :   'Donation collector list',
        // icon                :   '../assets/img/Loans-01.svg',
        route                   :   'donors-list',
        // id                  :   'menuPageLoans'
    }, 
    // {
    //     name                :   'menu 2',
        // icon                :   '../assets/img/Apply_loans-01.svg',
        // route               :   'home/apply',
        // id                  :   'menuPageApplyLoans'
    // }, {
    //     name                :   'menu 3',
        // icon                :   '../assets/img/Loan_history-01.svg',
        // route               :   'loan-history',
        // id                  :   'menuPageLoanHistory'
    // }, {
    //     name                :   'menu 4',
        // icon                :   '../assets/img/_ionicons_svg_md-person.svg',
        // route               :   '',
        // id                  :   'menuPageMyProfile'
    // }
];
    constructor(
        private platform        :   Platform,
        private splashScreen    :   SplashScreen,
        private statusBar       :   StatusBar,
        private router          :   Router,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    public navigateTo(route     :   string) {
        if( route               ===     'donors-list'){
        //     route               ===     'home'          || 
        //     route               ===     'home/loans'    || 
        //     route               ===     'loan-history') {
            this.router.navigateByUrl(route);
        }
        // this.router.navigateByUrl('donors-list');
        // console.log('route => ', route);
        // console.log('router => ', this.router);
        // if( route               ===     'home/apply'    || 
        //     route               ===     'home'          || 
        //     route               ===     'home/loans'    || 
        //     route               ===     'loan-history') {
        //     this.router.navigateByUrl(route);
        // } else {
        //     this.utility.openToast('Coming soon...!!', 1000);
        // }
    }
}
