

import mensajes from './flash-message.js'
mensajes("Hola Mundo");

import {mensajeConsole,mensajeAlert} from './flash-message2.js';
mensajeConsole("Mensaje Consola");
mensajeAlert("Mensaje Alerta");
import * as objeto from './flash-message2.js';
objeto.mensajeAlert("Mensaje Consola");
objeto.mensajeConsole("Mensaje Consola");
