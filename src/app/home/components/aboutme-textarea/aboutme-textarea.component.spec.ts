import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeTextareaComponent } from './aboutme-textarea.component';

describe('AboutmeTextareaComponent', () => {
  let component: AboutmeTextareaComponent;
  let fixture: ComponentFixture<AboutmeTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutmeTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutmeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
