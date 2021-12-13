import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users-det',
  templateUrl: './users-det.component.html',
  styleUrls: ['./users-det.component.css']
})
export class UsersDetComponent implements OnInit {

  constructor() { }

  userForm: any;
  passwordForm: any;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required]),
    });

    this.passwordForm = new FormGroup({
      'password': new FormControl('', [Validators.required]),
      'rep_password': new FormControl('', [Validators.required])
    });
  }

  onSubmitUser(){
    /*
    let nome = this.myForm.get('nome').value;
    let comentario = this.myForm.get('comment').value;
    if (nome.trim() != "" && comentario.trim()!=""){
      let comentarioObj = new comentarios();
      var d = new Date();
      comentarioObj.nome = nome;
      comentarioObj.comentario = comentario;
      comentarioObj.data = d.toLocaleDateString();
      comentarioObj.classificacao = this.classi;
      comentarioObj.idArt = this.idArtigo;
      lista.addComs(comentarioObj);
      this.comentariosArt.push(comentarioObj);
    }  else {
        console.log("Erro a inserir dados");
    }
    */
  }

  onSubmitPassword(){
    /*
    let nome = this.myForm.get('nome').value;
    let comentario = this.myForm.get('comment').value;
    if (nome.trim() != "" && comentario.trim()!=""){
      let comentarioObj = new comentarios();
      var d = new Date();
      comentarioObj.nome = nome;
      comentarioObj.comentario = comentario;
      comentarioObj.data = d.toLocaleDateString();
      comentarioObj.classificacao = this.classi;
      comentarioObj.idArt = this.idArtigo;
      lista.addComs(comentarioObj);
      this.comentariosArt.push(comentarioObj);
    }  else {
        console.log("Erro a inserir dados");
    }
    */
  }

}
