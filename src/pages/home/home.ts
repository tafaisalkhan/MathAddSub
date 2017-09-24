import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations:[
    trigger('visibilityGameTypeChanged', [
      state('shown' , style({ opacity: 1, display: 'block' ,  transform:'translateX(0%)'})),
      state('hidden', style({ opacity: 0, display: 'none' , transform:'translateX(-100%)' })),
      transition('* => *', animate('1s'))
    ]),
    trigger('visibilityGameOptionChanged', [
      state('shown' , style({ opacity: 1, display: 'block',  transform:'translateX(0)'  })),
      state('hidden', style({ opacity: 0, display: 'none', transform:'translateX(100%)' })),
      transition('* => *', animate('1s'))
    ]),
    trigger('visibilityPlayer', [
      state('shown' , style({ opacity: 1, display: 'block' ,  transform:'translateY(-50%)'})),
      state('hidden', style({ opacity: 1, display: 'none' , transform:'translateY(-800%)' })),
      transition('* => *', animate('1s'))
    ]),
  ]
})
export class HomePage {
  gameOption;// = 'hidden';
  gameTypeOption = 'shown';
  showPlayerCard = "hidden"
  selectedPlayer: number = 0;
  selectType: number = 0;
  isPlay: boolean = false;
  file: MediaObject;
  constructor( public navCtrl: NavController, public navParams: NavParams, public gameProvider:GameProvider, private media: Media) {
  }

  ionViewDidLoad() {
    
  }
  
  ionViewWillEnter(){
    this.gameOption = 'hidden';
    this.gameTypeOption = 'shown';
    this.showPlayerCard = 'hidden';
  }


  play(filename){
 /*
      this.file = this.media.create('/android_asset/www/assets/mp3/'+filename);
      this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
      this.file.onSuccess.subscribe(() => { console.log('Action is successful'); this.isPlay = false}
        );
      this.file.onError.subscribe(error => { console.log('Error!', error); this.isPlay = false} );
      this.file.play();
   */
    }
    

  detailPage(type){
    this.navCtrl.push('DetailPage');
   
  }

  playOptions(type){
    this.play("tap.mp3")
    this.selectType = type;
    

  }
  startGame(){
  }
}
