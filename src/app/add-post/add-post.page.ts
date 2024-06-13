import { Component, OnInit } from '@angular/core';


import { Post } from '../models/post.model';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  post = {} as Post;

  constructor(
    
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,    
    private navCtrl: NavController,
    private firestore: AngularFirestore

  ) { }

  //Control de error
  ngOnInit() {console.log();}

  async createPost(post: Post){

    if(this.formValidation()){
      let loader = await this.loadingCtrl.create({
        message: "Espere un mommento..."
      });

      await loader.present();

    try {
      this.firestore.collection('posts').add(post);      
      
    } catch (e:any) {
      e.message = "mensaje de error del post";
      let errorMessage = e.message ||e.getlocalizedMessage();

      this.showToast(errorMessage);
      
    }
    await loader.dismiss();
    this.navCtrl.navigateRoot("home");
    
    }

    
  }

  formValidation(){
    if (!this.post.producto) {
      this.showToast("Ingrese producto");
      return false;
      
    }
    if (!this.post.sitio) {
      this.showToast("Ingrese un sitio");
      
    }

    return true;
  }

  showToast(message: string){
    this.toastCtrl.create({
      message:message,
      duration:5000
    }).then(toatData => toatData.present());
  }
}
