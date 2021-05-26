import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { ConfigService } from './services/config.service';

//Esta función se puede poner aquí o en el config.service fuera de la clase
//como parámetro va el configService y retornamos a través de una función flecha
//la función que se encargará de cargar el archivo en el servicio
export function LoadConfiguration(configService:ConfigService){
  return () => configService.loadConfig();

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: LoadConfiguration,
      deps : [ConfigService], 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
