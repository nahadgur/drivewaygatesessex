// data/locations.ts
export const LOCATIONS: Record<string, string[]> = {
  'South Essex': [
    'Southend-on-Sea', 'Rayleigh', 'Wickford', 'Billericay', 'Basildon',
    'Benfleet', 'Leigh-on-Sea', 'Hadleigh', 'Canvey Island', 'Hockley',
    'Rochford', 'Great Wakering', 'Shoeburyness', 'Thundersley', 'South Benfleet',
    'Rawreth', 'Runwell', 'Shotgate', 'Battlesbridge', 'Hullbridge',
  ],

  'West Essex': [
    'Epping', 'Loughton', 'Chigwell', 'Buckhurst Hill', 'Waltham Abbey',
    'Ongar', 'Brentwood', 'Shenfield', 'Ingatestone', 'Chipping Ongar',
    'Abridge', 'Theydon Bois', 'Stapleford Abbotts', 'Lambourne End', 'Kelvedon Hatch',
    'Pilgrims Hatch', 'Doddinghurst', 'Blackmore', 'Fyfield', 'High Ongar',
  ],

  'Mid Essex': [
    'Chelmsford', 'Braintree', 'Witham', 'Maldon', 'Burnham-on-Crouch',
    'South Woodham Ferrers', 'Great Baddow', 'Danbury', 'Galleywood', 'Springfield',
    'Writtle', 'Stock', 'Margaretting', 'Hatfield Peverel', 'Tiptree',
    'Kelvedon', 'Coggeshall', 'Silver End', 'Great Notley', 'Faulkbourne',
  ],

  'North Essex': [
    'Colchester', 'Halstead', 'Saffron Walden', 'Thaxted', 'Great Dunmow',
    'Stansted Mountfitchet', 'Haverhill Border', 'Dedham', 'Manningtree', 'Mersea Island',
    'Brightlingsea', 'Wivenhoe', 'Earls Colne', 'Castle Hedingham', 'Sible Hedingham',
    'Gosfield', 'Finchingfield', 'Great Bardfield', 'Ridgewell', 'Sturmer',
  ],

  'Coastal Essex': [
    'Frinton-on-Sea', 'Walton-on-the-Naze', 'Clacton-on-Sea', 'Holland-on-Sea', 'West Mersea',
    'Tollesbury', 'Goldhanger', 'Heybridge', 'Southminster', 'Bradwell-on-Sea',
    'Tillingham', 'Mayland', 'Althorne', 'Steeple', 'Cold Norton',
    'Purleigh', 'North Fambridge', 'South Fambridge', 'Paglesham', 'Great Stambridge',
  ],

  'Essex Borders': [
    'Harlow', 'Hoddesdon Border', 'Roydon', 'Nazeing', 'Sawbridgeworth',
    'Bishops Stortford', 'Takeley', 'Hatfield Heath', 'Matching Green', 'Sheering',
    'Old Harlow', 'Hastingwood', 'Thornwood', 'North Weald Bassett', 'Moreton',
    'Bobbingworth', 'Willingale', 'Roxwell', 'Margarettin', 'Pleshey',
  ],
};

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCityBySlug(slug: string): string | undefined {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.find(city => toSlug(city) === slug);
}

export function getRegionForCity(cityName: string): string | undefined {
  for (const [region, cities] of Object.entries(LOCATIONS)) {
    if (cities.includes(cityName)) return region;
  }
  return undefined;
}

export function getAllCitySlugs(): string[] {
  return Object.values(LOCATIONS).flat().map(city => toSlug(city));
}
