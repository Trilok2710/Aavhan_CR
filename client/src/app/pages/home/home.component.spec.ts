import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//   const button1 = panel.querySelector('.panel-button1');
//   const content = panel.querySelector('.panel-content');

//   button1.addEventListener('click', () => {
//     const expanded = button1.getAttribute('aria-expanded') === 'true' || false;

//     // Close all panels before opening the clicked one
//     panels.forEach(panelItem => {
//       const panelButton = panelItem.querySelector('.panel-button');
//       const panelContent = panelItem.querySelector('.panel-content');
//       panelButton.setAttribute('aria-expanded', 'false');
//       panelItem.classList.remove('active');
//       panelContent.style.display = 'none';
//     });

//     // Toggle the clicked panel
//     button.setAttribute('aria-expanded', !expanded);
//     panel.classList.toggle('active');
//     content.style.display = expanded ? 'none' : 'block';
//   });
// });