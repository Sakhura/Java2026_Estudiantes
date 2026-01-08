 $(document).ready(function() {
            console.log('jQuery cargado correctamente');
            
            // Detectar el clic en el botón
            $('#btnCalcular').click(function() {
                console.log('Botón clickeado');
                
                // Limpiar alertas previas
                $('#alertContainer').empty();
                
                // Obtener los valores ingresados
                var monto = parseFloat($('#montoPrestamo').val());
                var tasaAnual = parseFloat($('#tasaInteres').val());
                var meses = parseInt($('#plazoMeses').val());
                
                console.log('Monto:', monto);
                console.log('Tasa:', tasaAnual);
                console.log('Meses:', meses);
                
                // Validar que los valores sean válidos
                if (isNaN(monto) || monto <= 0) {
                    mostrarAlerta('Por favor, ingresa un monto válido');
                    return;
                }
                
                if (isNaN(tasaAnual) || tasaAnual < 0) {
                    mostrarAlerta('Por favor, ingresa una tasa de interés válida');
                    return;
                }
                
                if (isNaN(meses) || meses <= 0) {
                    mostrarAlerta('Por favor, ingresa un plazo válido');
                    return;
                }
                
                // Calcular la tasa de interés mensual
                var tasaMensual = (tasaAnual / 100) / 12;
                
                console.log('Tasa mensual:', tasaMensual);
                
                // Calcular la cuota mensual
                var cuotaMensual;
                if (tasaMensual === 0) {
                    cuotaMensual = monto / meses;
                } else {
                    cuotaMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, meses)) / 
                                   (Math.pow(1 + tasaMensual, meses) - 1);
                }
                
                // Calcular totales
                var totalPagar = cuotaMensual * meses;
                var totalIntereses = totalPagar - monto;
                
                console.log('Cuota mensual:', cuotaMensual);
                console.log('Total a pagar:', totalPagar);
                console.log('Total intereses:', totalIntereses);
                
                // Mostrar los resultados
                $('#cuotaMensual').text('$' + cuotaMensual.toFixed(2));
                $('#totalPagar').text('$' + totalPagar.toFixed(2));
                $('#totalIntereses').text('$' + totalIntereses.toFixed(2));
                
                // Mostrar el contenedor de resultados
                $('#resultados').fadeIn(500);
                
                console.log('Resultados mostrados');
            });
            
            // Función para mostrar alertas
            function mostrarAlerta(mensaje) {
                var alerta = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                            mensaje +
                            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
                            '</div>';
                $('#alertContainer').html(alerta);
            }
        });