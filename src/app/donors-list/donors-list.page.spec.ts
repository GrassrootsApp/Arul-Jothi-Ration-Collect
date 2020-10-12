import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonorsListPage } from './donors-list.page';

describe('DonorsListPage', () => {
  let component: DonorsListPage;
  let fixture: ComponentFixture<DonorsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonorsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
