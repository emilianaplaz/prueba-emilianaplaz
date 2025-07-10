import React from 'react';

interface FormPartProps {
  title: string;
  fields: Array<{ label: string; name: string; type: string; options?: string[] }>;
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormPart = ({ title, fields, formData, handleChange }: FormPartProps) => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

      {/* Fields */}
      {fields.map(field => (
        <div key={field.name} className="space-y-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-600">
            {field.label}
          </label>

          {field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select --</option>
              {field.options?.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === 'checkbox' ? (
            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              checked={formData[field.name]}
              onChange={handleChange}
              className="mt-2 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormPart;



