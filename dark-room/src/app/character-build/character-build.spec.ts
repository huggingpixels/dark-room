import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBuildComponent } from './character-build';

describe('CharacterBuild', () => {
  let component: CharacterBuildComponent;
  let fixture: ComponentFixture<CharacterBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBuildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
