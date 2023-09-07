import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgslideComponent } from './imgslide.component';

describe('ImgslideComponent', () => {
  let component: ImgslideComponent;
  let fixture: ComponentFixture<ImgslideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgslideComponent]
    });
    fixture = TestBed.createComponent(ImgslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
