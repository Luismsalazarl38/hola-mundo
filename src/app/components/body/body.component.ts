import{Component} from '@angular/core'


@Component({
    selector: 'app-body',
    templateUrl:'./body.component.html'
})

export class BodyComponent{

    mostrar = true;

    frase: any ={
        mensaje: 'Un gran poder uy no que pereza',
        autor: 'cualquiera rey'
    };

    personajes: string[] = ['Luis','Miguel', 'Salazar'];

}