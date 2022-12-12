$(document).ready(function () {
  $('#seleccion-Materia').addClass('esconder');
  $('#horario-Datos').addClass('esconder');
  // Eventos

  $('#datos-Personales').on('click', function () {
    $('#formulario').removeClass('esconder');
    $('#formulario-Seleccion').addClass('esconder');
    $('#Horario').addClass('esconder');
  });
  $('#seleccion-Materia').on('click', function () {
    if (Validate()) {
      InsertarDatos();
      TipoDeCarrera();
      AgregarHorario();
      $('#formulario').addClass('esconder');
      $('#formulario-Seleccion').removeClass('esconder');
      $('#Horario').addClass('esconder');
    } else {
      alert('Debe completar los campos');
    }
  });
  $('#horario-Datos').on('click', function () {
    if (Validate()) {
      InsertarDatos();
      TipoDeCarrera();
      AgregarHorario();
      $('#formulario').addClass('esconder');
      $('#formulario-Seleccion').addClass('esconder');
      $('#Horario').removeClass('esconder');
    } else {
      alert('Debe completar los campos');
    }
  });
  // botones
  $('#btn-Siguiente').on('click', function () {
    if (Validate()) {
      InsertarDatos();
      TipoDeCarrera();
      AgregarHorario();
      $('#formulario').addClass('esconder');
      $('#seleccion-Materia').removeClass('esconder');
      $('#formulario-Seleccion').removeClass('esconder');
    } else {
      alert('Debe completar los campos');
    }
  });
  $('#btn-Limpiar').on('click', function () {
    Limpiar();
  });

  $('#btn-Siguiente-Seleccion').on('click', function () {
    if (Validate()) {
      InsertarDatos();
      TipoDeCarrera();
      AgregarHorario();
      $('#formulario-Seleccion').addClass('esconder');
      $('#horario-Datos').removeClass('esconder');
      $('#Horario').removeClass('esconder');
    } else {
      alert('Debe completar los campos');
    }
  });

  // funciones
  function Validate() {
    isValid = true;
    const valueName = $('#input-Nombre').val();
    const valueState = $('#input-Provincia').val();
    const valueCity = $('#input-Ciudad').val();
    const valueSector = $('#input-Sector').val();
    const valueStreet = $('#input-Calle').val();
    const valueCarrer = $('#select-Carrera').val();

    if (valueName == '' || valueName == null || valueName == undefined) {
      isValid = false;
      $('#input-Nombre').addClass('input-error').focus();
      $('#input-Nombre').removeClass('input-success');
    } else {
      $('#input-Nombre').addClass('input-success').focus();
      $('#input-Nombre').removeClass('input-error');
    }
    if (valueState == '' || valueState == null || valueState == undefined) {
      isValid = false;
      $('#input-Provincia').addClass('input-error');
      $('#input-Provincia').removeClass('input-success');
    } else {
      $('#input-Provincia').addClass('input-success');
      $('#input-Provincia').removeClass('input-error');
    }
    if (valueCity == '' || valueCity == null || valueCity == undefined) {
      isValid = false;
      $('#input-Ciudad').addClass('input-error');
      $('#input-Ciudad').removeClass('input-success');
    } else {
      $('#input-Ciudad').addClass('input-success');
      $('#input-Ciudad').removeClass('input-error');
    }

    if (valueSector == '' || valueSector == null || valueSector == undefined) {
      isValid = false;
      $('#input-Sector').addClass('input-error');
      $('#input-Sector').removeClass('input-success');
    } else {
      $('#input-Sector').addClass('input-success');
      $('#input-Sector').removeClass('input-error');
    }

    if (valueStreet == '' || valueStreet == null || valueStreet == undefined) {
      isValid = false;
      $('#input-Calle').addClass('input-error');
      $('#input-Calle').removeClass('input-success');
    } else {
      $('#input-Calle').addClass('input-success');
      $('#input-Calle').removeClass('input-error');
    }

    if (
      valueCarrer == '' ||
      valueCarrer == null ||
      valueCarrer == undefined ||
      valueCarrer == 'Seleccione una carrera...'
    ) {
      isValid = false;
      $('#select-Carrera').addClass('input-error');
      $('#select-Carrera').removeClass('input-success');
    } else {
      $('#select-Carrera').addClass('input-success');
      $('#select-Carrera').removeClass('input-error');
    }
    return isValid;
  }
  function Limpiar() {
    $('#input-Nombre').val('');
    $('#input-Provincia').val('');
    $('#input-Ciudad').val('');
    $('#input-Sector').val('');
    $('#input-Calle').val('');
    $('#select-Carrera').val('Seleccione una carrera...');
  }
  function InsertarDatos() {
    const valueName = $('#input-Nombre').val();
    const valueState = $('#input-Provincia').val();
    const valueCity = $('#input-Ciudad').val();
    const valueSector = $('#input-Sector').val();
    const valueStreet = $('#input-Calle').val();
    const valueCarrer = $('#select-Carrera').val();

    switch (valueCarrer) {
      case '1':
        $('#carrera-Horario').text('software');
        break;
      case '2':
        $('#carrera-Horario').text('Mecatronica');
        break;
      case '3':
        $('#carrera-Horario').text('Redes');
        break;
    }
    console.log(valueName);
    $('#nombre-Horario').text(valueName);
    $('#provincia-Horario').text(valueState);
    $('#ciudad-Horario').text(valueCity);
    $('#sector-Horario').text(valueSector);
    $('#calle-Horario').text(valueStreet);
  }

  function TipoDeCarrera() {
    const valueCarrer = $('#select-Carrera').val();
    switch (valueCarrer) {
      case '1':
        $('#primeraMateria ').text('Progrmacion II');
        $('#segundaMateria').text('Introduccion a base de datos');
        $('#terceraMateria').text('Analisis y diseño de sistemas');
        $('#cuartaMateria').text('Diseño Centrado en el usuario');
        $('#quintaMateria').text('Programación Paralela');

        $('#primeraMateriaTabla').text('Progrmacion II');
        $('#segundaMateriaTabla').text('Introduccion a base de datos');
        $('#terceraMateriaTabla').text('Analisis y diseño de sistemas');
        $('#cuartaMateriaTabla').text('Diseño Centrado en el usuario');
        $('#quintaMateriaTabla').text('Programación Paralela');
        break;
      case '2':
        $('#primeraMateria').text('Física Mecanica');
        $('#segundaMateria').text('Circuitos Electricos II');
        $('#terceraMateria').text('Integracion de Sistemas mecatronicos');
        $('#cuartaMateria').text('Programacion basica de CNC');
        $('#quintaMateria').text('Estatica dinamica aplicada');

        $('#primeraMateriaTabla').text('Física Mecanica');
        $('#segundaMateriaTabla').text('Circuitos Electricos II');
        $('#terceraMateriaTabla').text('Integracion de Sistemas mecatronicos');
        $('#cuartaMateriaTabla').text('Programacion basica de CNC');
        $('#quintaMateriaTabla').text('Estatica dinamica aplicada');
      case '3':
        $('#primeraMateria').text('Sistemas Operativos');
        $('#segundaMateria').text('Fundamentos de Enrutamiento');
        $('#terceraMateria').text('Conmutadion de Enrutamiento');
        $('#cuartaMateria').text('Administracion I');
        $('#quintaMateria').text('Redes inalambricas');

        $('#primeraMateriaTabla').text('Sistemas Operativos');
        $('#segundaMateriaTabla').text('Fundamentos de Enrutamiento');
        $('#terceraMateriaTabla').text('Conmutadion de Enrutamiento');
        $('#cuartaMateriaTabla').text('Administracion I');
        $('#quintaMateriaTabla').text('Redes inalambricas');
    }
  }
  function AgregarHorario() {
    // primera Materia
    if ($('#seleccion-Lunes-1').is(':checked')) {
      $('#seleccion-Lunes-1').prop('checked', true);
      $('#lunes-1').text('lunes 14:00 - 17:59');
      $('#martes-1').text('');
      $('#viernes-1').text('');
    }
    if ($('#seleccion-Martes-1').is(':checked')) {
      $('#seleccion-Martes-1').prop('checked', true);
      $('#martes-1').text('martes 8:00 - 12:59');
      $('#lunes-1').text('');
      $('#viernes-1').text('');
    }
    if ($('#seleccion-Viernes-1').is(':checked')) {
      $('#seleccion-Viernes-1').prop('checked', true);
      $('#viernes-1').text('viernes 16:00 - 18:59');
      $('#lunes-1').text('');
      $('#martes-1').text('');
    }
    // segunda Materia
    if ($('#seleccion-Miercoles-2').is(':checked')) {
      $('#seleccion-Miercoles-2').prop('checked', true);
      $('#miercoles-2').text('mier 18:00 - 21:59');
      $('#jueves-2').text('');
      $('#sabado-2').text('');
    }
    if ($('#seleccion-Jueves-2').is(':checked')) {
      $('#seleccion-Jueves-2').prop('checked', true);
      $('#jueves-2').text('jue 8:00 - 12:59');
      $('#miercoles-2').text('');
      $('#sabado-2').text('');
    }
    if ($('#seleccion-Sabados-2').is(':checked')) {
      $('#seleccion-Sabados-2').prop('checked', true);
      $('#sabado-2').text('sab 18:00 - 21:59');
      $('#miercoles-2').text('');
      $('#jueves-2').text('');
    }
    // tercera Materia
    if ($('#seleccion-Lunes-3').is(':checked')) {
      $('#seleccion-Lunes-3').prop('checked', true);
      $('#lunes-3').text('lunes 14:00 - 17:59');
      $('#martes-3').text('');
      $('#viernes-3').text('');
    }
    if ($('#seleccion-Martes-3').is(':checked')) {
      $('#seleccion-Martes-3').prop('checked', true);
      $('#martes-3').text('martes 8:00 - 12:59');
      $('#lunes-3').text('');
      $('#viernes-3').text('');
    }
    if ($('#seleccion-Viernes-3').is(':checked')) {
      $('#seleccion-Viernes-3').prop('checked', true);
      $('#viernes-3').text('viernes 16:00 - 18:59');
      $('#lunes-3').text('');
      $('#martes-3').text('');
    }
    // cuarta Materia
    if ($('#seleccion-Miercoles-4').is(':checked')) {
      $('#seleccion-Miercoles-4').prop('checked', true);
      $('#miercoles-4').text('mier 18:00 - 21:59');
      $('#jueves-4').text('');
      $('#sabado-4').text('');
    }
    if ($('#seleccion-Jueves-4').is(':checked')) {
      $('#seleccion-Jueves-4').prop('checked', true);
      $('#jueves-4').text('jue 8:00 - 12:59');
      $('#miercoles-4').text('');
      $('#sabado-4').text('');
    }
    if ($('#seleccion-Sabados-4').is(':checked')) {
      $('#seleccion-Sabados-4').prop('checked', true);
      $('#sabado-4').text('sab 18:00 - 21:59');
      $('#miercoles-4').text('');
      $('#jueves-4').text('');
    }
    // quinta Materia
    if ($('#seleccion-Lunes-5').is(':checked')) {
      $('#seleccion-Lunes-5').prop('checked', true);
      $('#lunes-5').text('lunes 14:00 - 17:59');
      $('#martes-5').text('');
      $('#viernes-5').text('');
    }
    if ($('#seleccion-Martes-5').is(':checked')) {
      $('#seleccion-Martes-5').prop('checked', true);
      $('#martes-5').text('martes 8:00 - 12:59');
      $('#lunes-5').text('');
      $('#viernes-5').text('');
    }
    if ($('#seleccion-Viernes-5').is(':checked')) {
      $('#seleccion-Viernes-5').prop('checked', true);
      $('#viernes-5').text('viernes 16:00 - 18:59');
      $('#lunes-5').text('');
      $('#martes-5').text('');
    }
    // sexta Materia
  }
});
