/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { HeroService } from './../hero.service';

describe('Component: Hero', () => {
  it('should create an instance', () => {
    let component = new HeroComponent(new HeroService);
    expect(component).toBeTruthy();
  });
});
