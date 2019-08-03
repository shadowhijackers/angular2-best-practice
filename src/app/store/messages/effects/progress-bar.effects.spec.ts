import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProgressBarEffects } from './progress-bar.effects';

describe('ProgressBarEffects', () => {
  let actions$: Observable<any>;
  let effects: ProgressBarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgressBarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ProgressBarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
