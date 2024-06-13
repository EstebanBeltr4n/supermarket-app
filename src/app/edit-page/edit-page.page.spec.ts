import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPAgePage } from './edit-page.page';

describe('EditPAgePage', () => {
  let component: EditPAgePage;
  let fixture: ComponentFixture<EditPAgePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPAgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
