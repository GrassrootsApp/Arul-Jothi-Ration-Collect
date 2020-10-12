import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonorViewPage } from './donor-view.page';

describe('DonorViewPage', () => {
  let component: DonorViewPage;
  let fixture: ComponentFixture<DonorViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonorViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
