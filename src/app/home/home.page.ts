import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts:any;



  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore
  ) { }

  ionViewWillEnter(){
    this.getPost();    
  }
  //Aqui existe un error

  async getPost(){
    let loader = await this.loadingCtrl.create({
      message:"Espere un momento por favor..."
    });

    await loader.present();

    try {
      this.firestore.collection('post')
      .snapshotChanges()
      .subscribe((data:any[])=>{

        this.posts = data.map((e:any)=>{
          return{
            id: e.oayload.doc.id,
            producto: e.payload.doc.data()["producto"],
            descripcion: e.payload.doc.data()["descripcion"]
          }
        });
      });

      await loader.dismiss();
      
    } catch (e:any) {
      e.message = "mensaje de error del home";
      let errorMessage = e.message ||e.getlocalizedMessage();

      this.showToast(errorMessage);
      
    }
  }

  async deletePost(id: string){
    let loader = await this.loadingCtrl.create({
      message: "Espere un momento"
    });
    await loader.present();
    await this.firestore.doc("post/"+id).delete();
    await loader.dismiss();
  }

  showToast(message:string){
    this.toastCtrl.create({
      message: message,
      duration: 5000
    }).then(toastData => toastData.present());
  }

  
 

}

