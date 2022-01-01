
export interface Persona
{
    apellido:string;
    nombres:string;
    fechaNacimiento:string;
    dni:string;
}

export interface Sector
{
    sector:string;
    integrantes:number[];
}

export const PERSONAS: Persona[] = [
    {apellido:"de Almeida",
    nombres: "Daniel",
    fechaNacimiento:"01/01/1990",
    dni:"30000000"},

    {apellido:"Riva",
    nombres: "Dario",
    fechaNacimiento:"01/01/1990",
    dni:"30000001"},

    {apellido:"Pellegrini",
    nombres: "Diego",
    fechaNacimiento:"01/01/1990",
    dni:"30000002"},

    {apellido:"Musso",
    nombres: "Federico",
    fechaNacimiento:"01/01/1990",
    dni:"30000003"},

    {apellido:"Rodriguez",
    nombres: "Laura",
    fechaNacimiento:"01/01/1990",
    dni:"30000004"},

    {apellido:"Basanta",
    nombres: "Lautaro Ariel",
    fechaNacimiento:"01/01/1990",
    dni:"30000005"},

    {apellido:"Castello",
    nombres: "Manuel",
    fechaNacimiento:"01/01/1990",
    dni:"30000006"},

    {apellido:"Barrios",
    nombres: "Paula",
    fechaNacimiento:"01/01/1990",
    dni:"30000007"},

    {apellido:"Diaz",
    nombres: "Rocio",
    fechaNacimiento:"01/01/1990",
    dni:"30000008"},

    {apellido:"Parasis",
    nombres: "Sebastian",
    fechaNacimiento:"01/01/1990",
    dni:"30000009"},

    {apellido:"Marcote",
    nombres: "Walter",
    fechaNacimiento:"01/01/1990",
    dni:"30000010"},

    {apellido:"Balcarcel",
    nombres: "Guillermo",
    fechaNacimiento:"01/01/1990",
    dni:"30000011"},

    {apellido:"Gawron",
    nombres: "Esteban",
    fechaNacimiento:"01/01/1990",
    dni:"30000012"},

    {apellido:"Peddini",
    nombres: "Enzo",
    fechaNacimiento:"01/01/1990",
    dni:"30000013"},

    {apellido:"Russo",
    nombres: "Andrea",
    fechaNacimiento:"01/01/1990",
    dni:"30000014"},

    {apellido:"Zarate",
    nombres: "Adrian",
    fechaNacimiento:"01/01/1990",
    dni:"30000015"},

    {apellido:"Yune",
    nombres: "Melisa",
    fechaNacimiento:"01/01/1990",
    dni:"30000016"},

    {apellido:"Russman",
    nombres: "Nicolas",
    fechaNacimiento:"01/01/1990",
    dni:"30000017"},

    {apellido:"Trillo",
    nombres: "Galo",
    fechaNacimiento:"01/01/1990",
    dni:"30000018"},

    {apellido:"Pellegrini",
    nombres: "Diego",
    fechaNacimiento:"01/01/1990",
    dni:"30000019"},
]

export const SECTORES: Sector[] = [
    {   
        sector:"RRHH",
        integrantes:
        [ 
            30000000,
            30000003,
            30000006,
            30000009,
            30000012,
            30000015,
            30000018,
        ]
    }
    ,
    {
        sector:"QA",
        integrantes:
        [
            30000001,
            30000004,
            30000007,
            30000010,
            30000013,
            30000016,
            30000019
        ]
    }
    ,
    {
        sector:"COMERCIAL",
        integrantes:
        [
            30000002,
            30000005,
            30000008,
            30000011,
            30000014,
            30000017
        ]
    }
]