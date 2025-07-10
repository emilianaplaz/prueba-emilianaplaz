import React from 'react'

const MainForm = () => {
  return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700">Create Account</h2>
      <form className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-600">
              National Identity Number/D-number
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              // value={formData.idNumber}
              // onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="01010102302"
              required
            />
            <small className="text-xs text-gray-500">This should be 11 digits long</small>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                // value={formData.firstName}
                // onChange={handleChange}
                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-600">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              // value={formData.streetAddress}
              // onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="streetAddressOptional" className="block text-sm font-medium text-gray-600">
              Street Address (optional)
            </label>
            <input
              type="text"
              id="streetAddressOptional"
              name="streetAddressOptional"
              // value={formData.streetAddressOptional}
              // onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="postCode" className="block text-sm font-medium text-gray-600">
                Post Code
              </label>
              <input
                type="text"
                id="postCode"
                name="postCode"
                // value={formData.postCode}
                // onChange={handleChange}
                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                // value={formData.city}
                // onChange={handleChange}
                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-600">
              Country
            </label>
            <select
              id="country"
              name="country"
              // value={formData.country}
              // onChange={handleChange}
              className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Country</option>
              <option value="Norway">Norway</option>
              <option value="Sweden">Sweden</option>
              <option value="Finland">Finland</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Your Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                // value={formData.phoneNumber}
                // onChange={handleChange}
                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default MainForm
