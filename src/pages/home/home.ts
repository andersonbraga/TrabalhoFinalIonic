import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mangas: any;
  constructor(public navCtrl: NavController) {
    this.mangas = [
        
     
        {name: 'One Pice', code:1, capitulo: '656', sinopse: "é um mangá escrito e ilustrado por Eiichiro Oda. A série conta a história do jovem pirata Monkey D"},
        {name: 'Bleach', code:2, capitulo: '543', sinopse: "é uma série de mangá escrita e ilustrada por Tite Kubo. Bleach segue as aventuras de Ichigo Kurosaki que após ganhar os poderes de um shinigami, através de outro Shinigami, Rukia Kuchiki."},
        {name: 'Dr.Frost', code:3, capitulo: '234', sinopse:"Animation · High school student Kurosaki Ichigo is unlike any ordinary kid because he can see ghosts. After an accident with a hollow, he got a power.So begins ..."},
        {name: 'Fairy Tail', code:4, capitulo: '756', sinopse:"é uma série de mangá escrita e ilustrada Hiro Mashima. A história de Fairy Tail gira em torno das aventuras da guilda, ..."},
        {name: 'Vagabond', code:5, capitulo: '643', sinopse:"é uma série de mangá escrita e ilustrada por Takehiko Inoue, baseada no romance Musashi, de Eiji Yoshikawa, que conta a ..."},
     
    ];
}
  detailsPage(mangas){
    this.navCtrl.push(SecondPage);
  }


    About(){
    this.navCtrl.push(AboutPage);
  }
}




