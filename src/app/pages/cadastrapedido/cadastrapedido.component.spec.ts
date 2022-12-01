import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrapedidoComponent } from './cadastrapedido.component';

describe('CadastrapedidoComponent', () => {
  let component: CadastrapedidoComponent;
  let fixture: ComponentFixture<CadastrapedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrapedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrapedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
