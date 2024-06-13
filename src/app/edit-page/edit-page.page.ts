import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPAgePage implements OnInit {

  post ={} as Post;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, 
    private firestore: AngularFirestore,
    private router: Router,
    private toastCtrl: ToastController
    
    
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }


  // control de error
  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id:string){
    let loader = await this.loadingCtrl.create({
      message: "Espere un momento..."
    });
    await loader.present();

    this.firestore
    .doc("post/"+id)
    .valueChanges()
    .subscribe((data:any)=>{
      const {producto, sitio } = data as {producto: string, sitio: string};
      this.post.producto = data.producto;
      this.post.sitio = data.sitio;

      loader.dismiss();
    });

    await loader.dismiss();

  }

  async updatePost(post:Post){
    let loader = await this.loadingCtrl.create({
      message:"Actualizando..."
    });
    await loader.present();

    this.firestore
    .doc("post/"+ this.id)
    .update(post)
    .then(()=>{
      console.log("Actualizacion de forma correcta");
      this.router.navigate(['/home']);
      loader.dismiss();
    })

    .catch((error)=>{
      console.error("error al actualizar el documento: ", error);
      loader.dismiss();
    });

  }

  formValidation(){
    if (!this.post.producto){
      this.showToast("ingrese un producto");
      return false;
    }

    if (!this.post.producto){
      this.showToast("ingrese un sitio");
      return false;
    }

    return true;
  }

  showToast(message:string){
    this.toastCtrl.create({
      message:message,
      duration: 5000
    }).then(toastData => toastData.present());
  }

}
