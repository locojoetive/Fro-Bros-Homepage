import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeExampleComponent } from './anime-example.component';

describe('AnimeExampleComponent', () => {
  let component: AnimeExampleComponent;
  let fixture: ComponentFixture<AnimeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
