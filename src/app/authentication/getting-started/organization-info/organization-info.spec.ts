import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationInfo } from './organization-info';

describe('OrganizationInfo', () => {
  let component: OrganizationInfo;
  let fixture: ComponentFixture<OrganizationInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
