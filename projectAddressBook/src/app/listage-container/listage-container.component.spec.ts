import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListageContainerComponent } from './listage-container.component';

describe('ListageContainerComponent', () => {
  let component: ListageContainerComponent;
  let fixture: ComponentFixture<ListageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListageContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
