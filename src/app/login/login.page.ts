import { Component, OnInit } from '@angular/core';

import { User } from "../models/user.model";
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
login(arg0: User) {
throw new Error('Method not implemented.');
}

  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) { }
  //control de error
  ngOnInit() {console.log();}

  async register(user : User){

    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Procesando..."
      })
      await loader.present();

      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data=>{
          console.log(data);

          this.navCtrl.navigateRoot("home")

        })
        
      } catch (e:any) {
        e.message = "usuario no registrado";
        let errorMessage = e.message || e.getlocalizedMessage();

        this.showToast(errorMessage)
        
      }

      await loader.dismiss();
      
    }
  }

  formValidation(){
    if (!this.user.email) {
      this.showToast("Ingresa un email");
      return false;
      
    }

    if (!this.user.password) {
      this.showToast("Ingresa una contraseña");
      return false;
      
    }
    return false;

  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 5000 
    }).then(toastData => toastData.present());
  }

}
