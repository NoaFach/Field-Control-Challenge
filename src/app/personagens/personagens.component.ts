
import { AppServiceService } from './../app.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit{

  personagens : any;

  buscarPersonagem = "";


  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.appService.listaPersonagens().subscribe((personagens) =>{
      console.log(personagens); this.personagens=personagens
    });

  }

}
