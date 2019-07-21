export interface SistemasData {
    sisId: number;
    sisNombre: string;
    sisUrlSistema: string;
    sis_estado: boolean;
}

export interface EntidadData {
    id: number;
    nombre: string;
    naturaleza: string;
    representanteLegal: string;
    ruc: string;
    actividadEconomica: string;
    correo: string;
    direccion: string;
    telefono: string
}
//inicializamos los campos
// informe de aprendizaje tutor
export class InAprendizajeModel{
    id?:number;
    semana: number ;
    calificacion: number;
    fechaEntrega: string;
    reflexion: string;
    observaciones: string;
    prioridad: number;
    fptraining:fptrainingModel;
    constructor(){
        this.id=0;
        this.semana=0;
        this.calificacion=0;
        this.fechaEntrega= "";
        this.reflexion="";
        this.observaciones="";
        this.prioridad=0;
        this.fptraining = new fptrainingModel();

    }

}
// informe de aprendizaje estudiante
export class InAprendizajeEstuModel{
    id?:number;
    descripcion: string;
    tipo: string;
    fecha: string;
    horaIngreso:string;
    horaSalida:string;
    horaAlmuerzo:string;
    horasTotales:string;
    prioridad:number;
    inftutor:InAprendizajeModel;
    constructor(){
        this.id=0;
        this.descripcion="";
        this.tipo="";
        this.fecha="";
        this.horaIngreso="";
        this.horaSalida="";
        this.horasTotales="";
        this.prioridad=0;
        this.inftutor= new InAprendizajeModel();
    }

}
export class Ppempresarial {
    id?: number;
    titulo: string
    analisis: string;
    objetivo: string;
    descripcion: string;
    indicador: string;
    medicion: string;
    meta: string;
    fuenteDatos: string;
    presupuesto: number;
    beneficiosEsperados: string;
    prioridad: number;
    fptraining: fptrainingModel;

    constructor() {
        this.id = 0;
        this.titulo = "";
        this.analisis = "";
        this.objetivo = "";
        this.descripcion = "";
        this.indicador = "";
        this.medicion = "";
        this.meta = "";
        this.fuenteDatos = "";
        this.presupuesto = 0;
        this.beneficiosEsperados = "";;
        this.prioridad = 0;
        this.fptraining = new fptrainingModel();
    }
}

//protected $fillable = ['idPlanMarcoFormacion','titulo','analisis','objetivo','descripcion','indicador','medicion','meta','fuenteDatos','presupuesto','beneficiosEsperados','prioridad'];
export class PpempresarialModel {
    id?: number;
    titulo: string
    analisis: string;
    objetivo: string;
    descripcion: string;
    indicador: string;
    medicion: string;
    meta: string;
    fuenteDatos: string;
    presupuesto: number;
    beneficiosEsperados: string;
    prioridad: number;
    fptraining: fptrainingModel;

    constructor() {
        this.id = 0;
        this.titulo = "";
        this.analisis = "";
        this.objetivo = "";
        this.descripcion = "";
        this.indicador = "";
        this.medicion = "";
        this.meta = "";
        this.fuenteDatos = "";
        this.presupuesto = 0;
        this.beneficiosEsperados = "";;
        this.prioridad = 0;
        this.fptraining = new fptrainingModel();
    }
}

export class fptrainingModel {
    id?: number;
    prioridad: number;
    constuctor() {
        this.id = 0;
        this.prioridad = 0;
    }

}

export interface PerfilData {
    perId: number;
    perNombre: string;
    sisId: number;
    sisNombre: string;
    sisUrlSistema: string;
}

export interface PerfilData1 {
    perId: number;
    perNombre: string;
    sisId: number;
    sisNombre: string;

}

export interface OpcionData {
    opcId: number;
    opcNombre: string;
    opcNivel: number;
    opcOrden: number;
    opcUrl: string;
    sisNombre: string;
    sisId: number;
    //  opcImagen: string;
}

export interface OpcionData1 {
    opcId: number;
    opcNombre: string;
    opcNivel: number;
    opcOrden: number;
    opcUrl: string;
    sisNombre: string;
    sisId: number | string;
}

export interface SistemaListData {
    sisId: number | string;
    sisNombre: string;

}

export interface Animal {
    name: string;
    sound: string;
}

export interface Usuario {
    nombre: string;
    apellido: string;
    cedula: string;
    telefono: string;
    id: string;
    perfil: string;
    pidm: string;
    email: String;
    departamento: String;
}
export class PlanRotacionModel {
    id?: number;
    conocimientosTeoricos: string;
    conocimientosProcedimentales: string;
    conocimientosActitudinales: string;
    prioridad: number;
    fptraining: fptrainingModel;

    constructor(){
    this.id = 0;
    this.conocimientosTeoricos = "";
    this.conocimientosProcedimentales = "";
    this.conocimientosActitudinales = "";
    this.prioridad = 0;
    this.fptraining = new fptrainingModel();
 }

 
}

export class PlanMarcoFormacionModel {
    id?: number;
    descripcion: string;
    nivelLogroEsperado: number;
    nivelLogroAlcanzado: number;
    tareas: string;
    puestoAprendizaje: string;
    semanasTrabajo: number;
    semana: number;
    responsable: string
    prioridad: number;
    fptraining: fptrainingModel;

    constructor(){
    this.id = 0;
    this.descripcion = "";
    this.nivelLogroEsperado = 0;
    this.nivelLogroAlcanzado = 0;
    this.tareas= "";
    this.puestoAprendizaje= "";
    this.semanasTrabajo= 0;
    this.semana= 0;
    this.responsable= "";
    this.prioridad= 0;
    this.fptraining = new fptrainingModel();
 }
}


