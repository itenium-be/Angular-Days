import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SockTileComponent } from './sock-tile.component';

describe('SockTileComponent', () => {
  let component: SockTileComponent;
  let fixture: ComponentFixture<SockTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SockTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SockTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
