import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientdemoComponent } from './httpclientdemo.component';

describe('HttpclientdemoComponent', () => {
  let component: HttpclientdemoComponent;
  let fixture: ComponentFixture<HttpclientdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpclientdemoComponent]
    });
    fixture = TestBed.createComponent(HttpclientdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
