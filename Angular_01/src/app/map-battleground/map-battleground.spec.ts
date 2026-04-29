import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBattleground } from './map-battleground';

describe('MapBattleground', () => {
  let component: MapBattleground;
  let fixture: ComponentFixture<MapBattleground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBattleground],
    }).compileComponents();

    fixture = TestBed.createComponent(MapBattleground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
