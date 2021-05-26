import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators'
@Injectable()
export class ConfigService {
  datos;

  constructor(private  _http:HttpClient ) { }
  //Tenemos que decirle a initializer que esta sera la función de entrada,
  //podemos tener más de una, para ello insertamos un nuevo proveedor en httpmodule
  //con los parámetros provide: APP_INITIALIZER, useFactory:LoadConfiguration
  //es un nombre de función que se crea en appmodule, deps:[ConfigService] aquí le pasamos 
  //los servicios de los que depende, multi:true
  loadConfig():Promise<any>{
    return this._http.get('assets/config.json').pipe(
      tap(data => this.datos = data)
    ).toPromise();
  }
}
