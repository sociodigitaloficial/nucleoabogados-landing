upCarousel()

function upCarousel(){

    let reasons = [
        {
            image: '../assets/images/motivo1.png',
            alt: 'nucleo-abogado-motivo1',
            subtitle: 'PRIMERA ASESORÍA GRATIS',
            paragraph:'Conversemos de manera online o presencial, sin compromisos, somos directos y eficientes en nuestra forma de trabajar, no te haremos perder el tiempo, obtendrás la solución que buscas.',
        },
        {
            image: '../assets/images/motivo2.png',
            alt: 'nucleo-abogado-motivo2',
            subtitle: 'CONTRATACIÓN',
            paragraph:'Somos el único estudio jurídico penal que fija una cuota mensual por sus servicios, cobrando lo justo y preciso, en cuanto nos contrates comenzaremos a trabajar en tu caso.',
        },
        {
            image: '../assets/images/motivo3.png',
            alt: 'nucleo-abogado-motivo3',
            subtitle: 'RECOPILACIÓN DE ANTECEDENTES',
            paragraph:'Nos encargaremos de solicitar la carpeta investigativa a fiscalía, reunirnos con el fiscal de la causa, negociar un acuerdo favorable y conseguir el cierre de la investigación con resultados positivos.',
        },
        {
            image: '../assets/images/motivo4.png',
            alt: 'nucleo-abogado-motivo4',
            subtitle: 'SENTENCIA FAVORABLE',
            paragraph:'Finalmente obtendrás una sentencia favorable en tu caso y habrás comprobado que no existe defensa penal más rápida, económica y eficiente, no esperes más, ¡pide tu asesoría gratis!.',
        }
    ]

    let list = [
        {
            title: null,
            text: [
                'Robos.',
                'Hurtos.',
                'Defensa de víctimas.',
                'Defensa de imputados.',
                'Formalización.',
                'Beneficios carcelarios.',
                'Traslados.',
                'Violencia.',
                'Lesiones.',
                'Secuestros.',
                'Querellas.',
            ],
            anchor: '#form-anchor',
            button: 'QUIERO ASESORÍA'
        },
        {
            title: null,
            text: [
                'Negligencias médicas.',
                'Control de armas.',
                'Derechos humanos.',
                'Tortura.',
                'Apremios ilegítimos.',
                'Homicidios.',
                'Abuso sexual.',
                'Delitos sexuales.',
                'Secuestros.',
                'Engaños.',
                'Manejo en estado de ebriedad.',
            ],
            anchor: '#form-anchor',
            button: 'QUIERO ASESORÍA'
        },
        {
            title: null,
            text: [
                'Acuerdo reparatorio.',
                'Suspensión de procedimiento.',
                'Procedimiento simplificado.',
                'Procedimiento abreviado.',
                'Juicio oral.',
                'Recurso de nulidad.',
                'Acción de revisión.',
                'Recurso de protección.',
                'Recurso de amparo.',
                'Medidas cautelares.',
                'Salidas alternativas.',
            ],
            anchor: '#form-anchor',
            button: 'QUIERO ASESORÍA'
        }
    ]

    createCarousel('eficiency', reasons, 'icon')
    createCarousel('product', list, 'list')
}