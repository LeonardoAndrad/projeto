import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticias.service';
import { Noticia } from '../../model/noticias';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias : Noticia[];
  noticia : Noticia;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public noticiaService : NoticiaService) {
  }

  ionViewDidLoad() {
    this.noticiaService.getNoticias().subscribe(response => {
      this.noticias = response;
    });
  }

  detalhes(n : Noticia){
    this.navCtrl.push('NoticiaDetalhePage',{'noticia': n});

  }

}





//  this.navCtrl.push('NoticiaDetalhePage', {'noticia' : n});