import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../../services/rutas.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  rutas = <any>[];
  constructor(private rutasService: RutaService) {}

  ngOnInit(): void {
    this.rutasService.get().subscribe((rutas)=>{this.rutas  = rutas});
    console.log("paso por aca");
    console.log(this.rutas);
  }
}
