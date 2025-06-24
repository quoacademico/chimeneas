import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamDetailComponent } from './page-team-detail.component';

describe('PageTeamDetailComponent', () => {
  let component: PageTeamDetailComponent;
  let fixture: ComponentFixture<PageTeamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
