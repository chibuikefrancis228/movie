import { ComponentFixture, TestBed, waitForAsync, } from '@angular/core/testing';
import { IonicModule, LoadingController } from '@ionic/angular';
import {Store, StoreModule } from '@ngrx/store';
import {AppState} from 'src/store/AppState';
import { loadingReducer } from 'src/store/loading/loading.reducers';
import { hide,show } from 'src/store/loading/loadingactions';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [IonicModule.forRoot(), StoreModule.forRoot({}), StoreModule.forFeature('loading', loadingReducer)]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide component when it not loading', () => {
    const compiled = fixture.nativeElement;

    store.dispatch(hide());
    fixture.detectChanges();

    expect(compiled.querySelected('.back')).toBeNull();
  });

  it('should show component when it not loading', () => {
    const compiled = fixture.nativeElement;

    store.dispatch(show());
    fixture.detectChanges();

    expect(compiled.querySelected('.back')).not.toBeNull();
  });
});
