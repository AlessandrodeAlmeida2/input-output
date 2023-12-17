import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {
@Output() informacao = "Nome: Alessandro"
}
