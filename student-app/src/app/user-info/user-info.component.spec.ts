import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentApiService } from '../shared/services/student-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info.component';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ],
      providers: [StudentApiService, HttpClient, AppComponent],
      imports: [HttpClientModule, AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
