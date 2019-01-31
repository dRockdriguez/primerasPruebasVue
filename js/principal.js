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
        ],
        nombre: '',
        promedio: ''
    },
    methods: {
        agregarNota: function() {
            estadoA = false;
            if (typeof this.nombre !== 'undefined' && typeof this.promedio !== 'undefined'
                && this.nombre !== '' && this.promedio  !== '') {
                if (this.promedio >= 12) {
                    estadoA = true;
                }
                this.lista.push({
                    nombre: this.nombre,
                    promedio: this.promedio,
                    estado: estadoA
                });
                this.nombre = '';
                this.promedio = '';
            } else {
                alert ('Ingrese el nombre y promedio.')
            }
        }
    }
});
