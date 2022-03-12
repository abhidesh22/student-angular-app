import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponent } from './notfound.component';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundComponent, AppComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
