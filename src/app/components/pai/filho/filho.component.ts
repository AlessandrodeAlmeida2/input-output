import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {
@Input() informacaoFilho!: string;
}
