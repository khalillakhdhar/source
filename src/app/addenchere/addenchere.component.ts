import { Component, OnInit } from '@angular/core';
import { Enchere } from '../classes/enchere';
import { EnchereService } from '../services/enchere.service';

@Component({
  selector: 'app-addenchere',
  templateUrl: './addenchere.component.html',
  styleUrls: ['./addenchere.component.css']
})
export class AddenchereComponent implements OnInit {
enchere:Enchere;
  constructor(private enchereService:EnchereService) { }

  ngOnInit(): void {
    this.enchere=new Enchere();
  }
  add()
  {
    this.enchere.etat="en cours";
  let en=Object.assign({},this.enchere);
  this.enchereService.create_NewEnchere(en).then(resp => {
    console.log(resp);
    alert('ajouté avec succés!');
    window.location.reload();

       })
         .catch(error => {
           console.log(error);
         });
       }
  }


