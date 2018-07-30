import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomodifyComponent } from './todomodify.component';

describe('TodomodifyComponent', () => {
  let component: TodomodifyComponent;
  let fixture: ComponentFixture<TodomodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodomodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodomodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
