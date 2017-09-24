import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  animations:[
    trigger('resultVisiable', [
      state('shown' , style({ opacity: 1, display: 'block' ,  transform:'translateX(0%)'})),
      state('hidden', style({ opacity: 0, display: 'none' , transform:'translateX(800%)' })),
      transition('* => *', animate('1s'))
    ]),
   
  ]
})
export class DetailPage {
  resultreadonly :boolean = true;
  result: string = "hidden";
  type: string = "add";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  showResult(){
    this.result = "shown";
  }
  showInAnimation(){
    this.navCtrl.push('AnimationPage');
  }

}
