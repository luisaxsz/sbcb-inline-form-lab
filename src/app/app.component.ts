import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {TableModule} from 'carbon-components-angular';
import {NgForOf, NgIf} from '@angular/common';

export enum FormMode{
  EDIT,
  CREATE,
  DETAIL
}

@Component({
  selector: 'app-root',
  imports: [
    TableModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formGroup: FormGroup;

  unidadesDatasource: any[] = [
    {id: 1, nome: 'Unidade 1'},
    {id: 2, nome: 'Unidade 2'},
    {id: 3, nome: 'Unidade 3'},
    {id: 4, nome: 'Unidade 4'},
  ]

  cargoDatasource: any[] = [
    {id: 1, nome: 'Cargo 1'},
    {id: 2, nome: 'Cargo 2'},
    {id: 3, nome: 'Cargo 3'},
    {id: 4, nome: 'Cargo 4'},
  ]

  vagas: any[] = []

  constructor(
    private fb: FormBuilder
  ) {

    this.formGroup = this.fb.group({
      unidade: [''],
      cargo: [''],
      vaga: ['']
    })
  }

  addRow() {
    this.vagas.push(
      this.fb.group({
        unidade: [''],
        cargo: [''],
        vaga: ['']
      })
    );
  }

  editRow(item: any) {
    item.backup = { ...item }; // Salva backup antes da edição
    item.editing = true;
  }

  saveRow(item: any) {
    item.editing = false;
  }

  cancelEdit(item: any) {
    Object.assign(item, item.backup); // Restaura backup
    item.editing = false;
  }
}
