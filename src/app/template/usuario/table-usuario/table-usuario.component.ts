import { ResponseI } from 'src/app/model/ResponseI';
import { ServiceuserService } from 'src/app/service/serviceuser.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-table-usuario',
  templateUrl: './table-usuario.component.html',
  styleUrls: ['./table-usuario.component.css']
})
export class TableUsuarioComponent implements OnInit{

  listUser:User[]=[];

  constructor(private userService:ServiceuserService){

  }
  ngOnInit(): void {
    this.allUser();
  }
  allUser():void{
    this.userService.getAllUser().subscribe(res=>{
      console.log('>>>>>>>>>>',  res);
      this.listUser=res.data;
      console.log(this.listUser)

    });
  }

  eliminarUsuario(data:number):void {
    this.userService.eliminarUsuario(data).subscribe(resp => {
      console.log("####", resp)
    });
  }
}
