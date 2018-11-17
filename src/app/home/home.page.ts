import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('myNav') nav: NavController;

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {}

  gotoConverter() {}
}
