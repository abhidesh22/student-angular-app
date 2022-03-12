import { selectIsAuthenticated } from './../selectors/auth.selectors';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AuthGuardService } from './auth-guard.service';

describe('#authGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            provideMockStore({
                selectors: [
                    {
                        selector: selectIsAuthenticated,
                        value: true
                    },
                ]
            })
        ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should be authenticated", ()=>{
    service.canActivate(null, null).subscribe(flag => {
        expect(flag).toEqual(true);
    })
  });
});