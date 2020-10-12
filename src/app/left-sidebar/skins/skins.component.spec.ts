/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkinsComponent } from './skins.component';

describe('SkinsComponent', () => {
  let component: SkinsComponent;
  let fixture: ComponentFixture<SkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
