import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModulesComponent } from './material-modules.component';

describe('MaterialModulesComponent', () => {
  let component: MaterialModulesComponent;
  let fixture: ComponentFixture<MaterialModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialModulesComponent]
    });
    fixture = TestBed.createComponent(MaterialModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
