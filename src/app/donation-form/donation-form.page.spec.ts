import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonationFormPage } from './donation-form.page';

describe('DonationFormPage', () => {
  let component: DonationFormPage;
  let fixture: ComponentFixture<DonationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
