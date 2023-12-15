---
sidebar: auto
---

# Excepciones
Explicación rápida de errores excepcionales que normalmente ocurren mientras se modea el juego.  
Explicaciones numeradas significan que podría ser uno de los problemas listados.

## ArgumentException
La ruta es una cadena de longitud cero, contiene solo espacio en blanco, o contiene uno o más caracteres inválidos como definidos por `InvalidPathChars`.

## ArgumentNullException
La ruta es nula.

## DirectoryNotFoundException
La ruta especificada no es válida.
> Ejemplo: Está en una unidad sin mapear.

## IOException

1. El archivo especificado está en uso.
2. Hay un manejador abierto en el archivo, y el sistema operativo es Windows XP o anterior. Este manejador abierto puede resultar de la enumeración de directorios y archivos.

## NotSupportedException
La ruta tiene un formato inválido.

## PathTooLongException
La ruta especificada, nombre de archivo, o ambos exceden la longitud máxima definida por el sistema.

## UnauthorizedAccessException

1. La persona que llama no tiene el permiso requerido.  
   Esto podría significar que un programa también está impidiendo al usuario acceder al archivo, como `Anti Viruses, y programas que bloquearían programas sospechosos/procesos/actividades` Otras causas serían no tener derechos como **los derechos de administrador y similares.** es decir, tu usuario o ordenador no tiene derechos suficientes para acceder/escribir archivos y datos de todos modos.
2. El archivo es un archivo ejecutable que está en uso.
3. La ruta es un directorio.
4. La ruta especificó un archivo de sólo lectura.
