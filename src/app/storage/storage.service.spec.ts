import { TestBed, async } from "@angular/core/testing";

import { StorageService } from './storage.service';
import { LocalStorageService } from './localstorage/localstorage';

describe('StorageService', () => {
  let storageService: StorageService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        StorageService
      ]
    });
    storageService = TestBed.get(StorageService);
  }));

  it(`should get the value`, () => {
    storageService.setItem("userName", "Mike", true);
    let userName = storageService.getItem('userName', true)
    expect(userName).toBe('Mike');
  })

  it(`should return true`, () => {
    expect(storageService.setItem("userName", "Mike")).toBeTruthy();
  });
});
