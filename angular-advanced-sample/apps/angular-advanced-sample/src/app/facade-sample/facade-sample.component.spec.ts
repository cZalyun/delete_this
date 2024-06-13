import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacadeSampleComponent } from './facade-sample.component';

describe('FacadeSampleComponent', () => {
  let component: FacadeSampleComponent;
  let fixture: ComponentFixture<FacadeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacadeSampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FacadeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
