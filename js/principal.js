// Instancia vue
var app = new Vue({
    el: '#app',
    data: {
        lista: [
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
