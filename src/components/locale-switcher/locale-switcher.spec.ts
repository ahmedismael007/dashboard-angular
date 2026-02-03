import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSwitcher } from './locale-switcher';

describe('LocaleSwitcher', () => {
  let component: LocaleSwitcher;
  let fixture: ComponentFixture<LocaleSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleSwitcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaleSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
