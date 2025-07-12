'use client';

import React from 'react';

// Definición de la estructura de cada campo en el formulario
interface Field {
  label: string;            // Etiqueta visible para el usuario en el campo
  name: string;             // Nombre identificador del campo (clave en formData)
  type: string;             // Tipo de campo ('text', 'select', 'checkbox', 'number', etc)
  options?: string[];       // Opciones para selects, si aplica
  min?: number;             // Valor mínimo para inputs numéricos
  max?: number;             // Valor máximo para inputs numéricos
  dependsOn?: string;       // Nombre de campo del que depende para mostrarse (condicional)
}

// Props que recibe el componente FormPart
interface FormPartProps {
  title: string;                         // Título de la sección del formulario
  fields: Field[];                       // Lista de campos a mostrar en esta sección
  formData: { [key: string]: any };     // Estado actual de los datos del formulario
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; // Función para actualizar datos al cambiar un input
  incrementTravelers?: () => void;       // Función para aumentar número de viajeros (si aplica)
  decrementTravelers?: () => void;       // Función para disminuir número de viajeros (si aplica)
  isStep1FieldValid?: (fieldName: string) => boolean; // Función que valida campos del paso 1 
}

// Componente funcional que renderiza cada sección del formulario con sus campos
const FormPart = ({
  title,
  fields,
  formData,
  handleChange,
  incrementTravelers,
  decrementTravelers,
  isStep1FieldValid,
}: FormPartProps) => {
  return (
    <div>
      {/* Título del paso */}
      <h2 className="text-xl font-semibold mb-6">{title}</h2>

      {/* Contenedor formulario */}
      <form>
        {/* Recorre todos los campos recibidos para renderizarlos */}
        {fields.map(({ label, name, type, options, min, max, dependsOn }) => {
          // Si el campo depende de otro y éste no está activo, no se muestra
          if (dependsOn && !formData[dependsOn]) return null;

          // Validar si el campo es válido solo para el paso 1, si la función existe
          const isValid = isStep1FieldValid ? isStep1FieldValid(name) : true;

          // Renderizar checkbox
          if (type === 'checkbox') {
            return (
              <label
                key={name}
                className="flex items-center mb-6 space-x-3 select-none"
                style={{ minHeight: '2.5rem' }} // altura mínima para centrar el contenido
              >
                {/* Input tipo checkbox */}
                <input
                  type="checkbox"
                  name={name}
                  checked={!!formData[name]} // convertimos a booleano
                  onChange={handleChange}
                  className="relative w-10 h-5 appearance-none bg-gray-300 rounded-full
                             checked:bg-[#6698CC] transition-colors duration-300
                             cursor-pointer before:content-[''] before:absolute before:left-0.5 before:top-0.5
                             before:bg-white before:border before:rounded-full before:h-4 before:w-4 before:transition-transform
                             checked:before:translate-x-5" // estilos para toggle personalizado
                />
                {/* Texto de etiqueta */}
                <span className="text-base font-medium">{label}</span>
              </label>
            );
          }

          // Renderizar select (dropdown)
          if (type === 'select' && options) {
            return (
              <label key={name} className="block mb-6">
                {/* Etiqueta */}
                <span className="block mb-1 font-medium">{label}</span>

                {/* Select con opciones */}
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC] ${
                    isValid ? 'border-gray-300' : 'border-red-500' // borde rojo si no válido o vacío
                  }`}
                >
                  {/* Opción por defecto */}
                  <option value="">Seleccione</option>

                  {/* Opciones mapeadas */}
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            );
          }

          // Renderizar input tipo fecha
          if (type === 'date') {
            // Obtener la fecha actual en formato yyyy-mm-dd para limitar mínimo
            const today = new Date().toISOString().split('T')[0];

            // Definir valor mínimo dependiendo del campo:
            // para departureDate es hoy,
            const minValue =
              name === 'departureDate'
                ? today
                : name === 'returnDate' && formData['departureDate']
                ? formData['departureDate']
                : today;

            return (
              <label key={name} className="block mb-6">
                <span className="block mb-1 font-medium">{label}</span>

                {/* Input fecha con mínimo definido */}
                <input
                  type="date"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  min={minValue}
                  className={`block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC] ${
                    isValid ? 'border-gray-300' : 'border-red-500'
                  }`}
                />
              </label>
            );
          }

          // Renderizar input tipo número
          if (type === 'number') {
            return (
              <label key={name} className="block mb-6">
                <span className="block mb-1 font-medium">{label}</span>

                {/* Input número con min y max */}
                <input
                  type="number"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="block w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC]"
                  min={min}
                  max={max}
                />
              </label>
            );
          }

          // Renderizar steppers 
          if (type === 'stepper') {
            return (
              <div key={name} className="mb-6">
                <span className="block mb-1 font-medium">{label}</span>

                {/* Contenedor para botones y contador */}
                <div className="flex items-center gap-4">
                  {/* Botón para disminuir valor */}
                  <button
                    type="button"
                    onClick={decrementTravelers}
                    className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    disabled={formData[name] <= 1} // deshabilitado si valor <= 1
                  >
                    -
                  </button>

                  {/* Mostrar valor actual */}
                  <span className="text-lg select-none">{formData[name]}</span>

                  {/* Botón para aumentar valor */}
                  <button
                    type="button"
                    onClick={incrementTravelers}
                    className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    disabled={formData[name] >= 10} // deshabilitado si valor >= 10
                  >
                    +
                  </button>
                </div>
              </div>
            );
          }

          // Renderizar input tipo texto por defecto 
          return (
            <label key={name} className="block mb-6">
              <span className="block mb-1 font-medium">{label}</span>

              {/* Input texto, con maxLength si es descripción */}
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                maxLength={name === 'specialAssistanceDescription' ? 200 : undefined}
                className={`block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6698CC] ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                }`}
              />
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default FormPart;

















