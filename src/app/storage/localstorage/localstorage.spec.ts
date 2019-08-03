import { async, TestBed } from "@angular/core/testing";

import { LocalStorageService } from './localstorage';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService
      ]
    });
    localStorageService = TestBed.get(LocalStorageService);
  }));

  it(`should return the value when key is present`, () => {
    localStorageService.setItem("userName", "Arjun");
    let userName = localStorageService.getItem("userName");
    expect(userName).toBe("Arjun");
  })

  it(`should return null when key is not present`, () => {
    let userName = localStorageService.getItem("userNames");
    expect(userName).toBe(null);
  })
});
