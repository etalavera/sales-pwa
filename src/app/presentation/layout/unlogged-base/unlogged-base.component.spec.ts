import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloggedBaseComponent } from './unlogged-base.component';

describe('UnloggedBaseComponent', () => {
  let component: UnloggedBaseComponent;
  let fixture: ComponentFixture<UnloggedBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnloggedBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnloggedBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
