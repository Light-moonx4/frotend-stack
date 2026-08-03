class Movie {
    titulo: string;
    anio: number;
    genero: string;
    duracion: number;
    director: string;
    calificacion: number;
    
    constructor (titulo:string, anio:number, genero:string, duracion:number, director:string, calificacion:number ){
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
        this.duracion = duracion;
        this.director = director;
        this.calificacion = calificacion;
    
}

mostrarInformacion(): void{
    console.log(`${this.titulo} (${this.anio})`);
}

Recomendada():boolean{
    return this.calificacion >=8;
}

MovieLarga():boolean{
    return this.duracion >120;
}

actualizarCalificacion(nuevaCalificacion:number):void{
    if(nuevaCalificacion >= 0 && nuevaCalificacion <=10){
        this.calificacion = nuevaCalificacion
    } else {
        console.log(`No se pudo Actualizar : la calificacion el numero de ser de 0 a 10);
    }

}


}