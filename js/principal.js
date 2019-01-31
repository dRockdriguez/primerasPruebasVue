// Instancia vue
var app = new Vue({
    el: '#app',
    data: {
        lista: [
            {
                nombre: 'Prueba1',
                promedio: '10',
                estado: false
            },
            {
                nombre: 'Prueba2',
                promedio: '17',
                estado: true
            },
            {
                nombre: 'Prueba3',
                promedio: '4',
                estado: false
            }
        ]
    }
});