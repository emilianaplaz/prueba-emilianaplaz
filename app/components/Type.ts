export interface TravelerInfo {
  id?: string; // Si no usas id, hazla opcional o quítala si no hace falta
  name: string;
  birthdate: string;
  idType: 'passport' | 'cedula' | '';
  idNumber: string;
}

export interface FormData {
  destination: string;
  departureDate: string;
  returnDate: string;
  flightType: string;
  travelers: number;
  pets: boolean;
  petsCount: number;
  extraLuggage: boolean;
  extraLuggageCount: number;
  insurance: boolean;
  disabledSeats: boolean;
  specialAssistance: boolean;
  specialAssistanceDescription: string;
  travelersInfo: TravelerInfo[];
}
