//abbiamo creato la classe email
export class Email{
    a: string;
    oggetto: string;
    corpo: string;

    constructor(a: string, oggetto: string, corpo: string){
        this.a = a;
        this.oggetto = oggetto;     // come python def__init e self. 
        this.corpo = corpo;

        
    }

}
