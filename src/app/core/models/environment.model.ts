export interface Environment {
  ipifyUrl: string;
  ipifyApiKey: string;
  googleMapsUrl: string;
  // this is not a security fail because the api was restricted
  googleMapsApiKey: string;
}