export class Usuario {
    id?: number;
    tipoIdentificacion: string;
    identificacion: string;
    nombres: string;
    apellidos: string;
    roles: string;
    edad: number;

    constructor(
        tipoIdentificacion: string,
        identificacion: string,
        nombres: string,
        apellidos: string,
        roles: string,
        edad: number,
        id?: number
    ) {
        this.tipoIdentificacion = tipoIdentificacion;
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.roles = roles;
        this.edad = edad;
        if (id !== undefined) {
            this.id = id;
        }
    }
}
