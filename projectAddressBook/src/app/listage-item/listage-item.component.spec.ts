import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListageItemComponent } from './listage-item.component';

describe('ListageItemComponent', () => {
  let component: ListageItemComponent;
  let fixture: ComponentFixture<ListageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListageItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
