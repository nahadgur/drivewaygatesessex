// data/nearby-areas.ts
// Sub-locations and nearby areas for each Essex town
// These are real neighbourhoods, villages, and nearby hamlets
// Pages won't exist for these — they appear as a grid to capture long-tail search

export const nearbyAreas: Record<string, string[]> = {
  'Southend-on-Sea': [
    'Westcliff-on-Sea', 'Thorpe Bay', 'Shoeburyness', 'Leigh-on-Sea', 'Chalkwell',
    'Prittlewell', 'Southchurch', 'Bournes Green', 'Eastwood', 'North Shoebury',
    'Wakering', 'Barling', 'Little Wakering', 'Sutton', 'Shopland',
  ],
  'Rayleigh': [
    'Hockley', 'Hawkwell', 'Ashingdon', 'Rochford', 'Stambridge',
    'Canewdon', 'Rawreth', 'Downhall', 'Battlesbridge', 'Rettendon',
    'Runwell', 'Wickford', 'South Hanningfield', 'Woodham Ferrers', 'Bicknacre',
  ],
  'Billericay': [
    'Stock', 'Wickford', 'Ramsden Heath', 'Ramsden Bellhouse', 'South Green',
    'Little Burstead', 'Great Burstead', 'Noak Bridge', 'Laindon', 'Basildon',
    'Brentwood', 'Hutton', 'Shenfield', 'Mountnessing', 'Ingatestone',
  ],
  'Basildon': [
    'Laindon', 'Pitsea', 'Vange', 'Fobbing', 'Corringham',
    'Stanford-le-Hope', 'Wickford', 'Billericay', 'Langdon Hills', 'Dunton',
    'Nevendon', 'Noak Bridge', 'Crays Hill', 'Bowers Gifford', 'North Benfleet',
  ],
  'Brentwood': [
    'Shenfield', 'Hutton', 'Ingatestone', 'Pilgrims Hatch', 'Kelvedon Hatch',
    'Doddinghurst', 'Blackmore', 'Stondon Massey', 'Mountnessing', 'Stock',
    'Herongate', 'Ingrave', 'West Horndon', 'Warley', 'South Weald',
  ],
  'Chelmsford': [
    'Great Baddow', 'Galleywood', 'Springfield', 'Writtle', 'Broomfield',
    'Boreham', 'Little Baddow', 'Danbury', 'Sandon', 'Howe Green',
    'Margaretting', 'Ingatestone', 'Stock', 'East Hanningfield', 'West Hanningfield',
  ],
  'Epping': [
    'Theydon Bois', 'Coopersale', 'Thornwood', 'North Weald Bassett', 'Hastingwood',
    'Matching Green', 'High Laver', 'Moreton', 'Bobbingworth', 'Fyfield',
    'Willingale', 'Ongar', 'Chipping Ongar', 'Greensted', 'Stanford Rivers',
  ],
  'Loughton': [
    'Buckhurst Hill', 'Chigwell', 'Abridge', 'Theydon Bois', 'Debden',
    'High Beach', 'Waltham Abbey', 'Epping', 'Chigwell Row', 'Lambourne End',
    'Stapleford Abbotts', 'Passingford Bridge', 'Navestock', 'Kelvedon Hatch', 'Pilgrims Hatch',
  ],
  'Chigwell': [
    'Abridge', 'Lambourne', 'Theydon Bois', 'Loughton', 'Buckhurst Hill',
    'Chigwell Row', 'Hainault', 'Grange Hill', 'Manford Way', 'Stapleford Abbotts',
    'Havering-atte-Bower', 'Navestock', 'Stapleford Tawney', 'Tysea Hill', 'Passingford Bridge',
  ],
  'Harlow': [
    'Old Harlow', 'Sheering', 'Hatfield Heath', 'Matching', 'Matching Green',
    'Sawbridgeworth', 'Bishops Stortford', 'Roydon', 'Nazeing', 'Broxbourne',
    'Waltham Abbey', 'Epping', 'Thornwood', 'Hastingwood', 'North Weald',
  ],
  'Colchester': [
    'Wivenhoe', 'Dedham', 'Mersea Island', 'Fordham', 'West Bergholt',
    'Marks Tey', 'Eight Ash Green', 'Aldham', 'Stanway', 'Lexden',
    'Braiswick', 'Mile End', 'Prettygate', 'Shrub End', 'Highwoods',
  ],
  'Saffron Walden': [
    'Thaxted', 'Great Dunmow', 'Newport', 'Stansted Mountfitchet', 'Uttlesford',
    'Audley End', 'Little Chesterford', 'Great Chesterford', 'Radwinter', 'Ashdon',
    'Hadstock', 'Littlebury', 'Wenden Lofts', 'Clavering', 'Arkesden',
  ],
  'Maldon': [
    'Heybridge', 'Goldhanger', 'Tollesbury', 'Tiptree', 'Witham',
    'Burnham-on-Crouch', 'Cold Norton', 'Purleigh', 'Latchingdon', 'Mundon',
    'Woodham Walter', 'Woodham Mortimer', 'Hazeleigh', 'Langford', 'Beeleigh',
  ],
  'Witham': [
    'Hatfield Peverel', 'Kelvedon', 'Coggeshall', 'Silver End', 'Rivenhall',
    'Faulkbourne', 'White Notley', 'Black Notley', 'Cressing', 'Notley Green',
    'Braintree', 'Great Leighs', 'Little Leighs', 'Terling', 'Fairstead',
  ],
  'Braintree': [
    'Halstead', 'Earls Colne', 'White Colne', 'Great Maplestead', 'Gosfield',
    'Sible Hedingham', 'Castle Hedingham', 'Bocking', 'Rayne', 'Panfield',
    'Great Notley', 'Black Notley', 'Silver End', 'Cressing', 'Coggeshall',
  ],
  'Clacton-on-Sea': [
    'Holland-on-Sea', 'Frinton-on-Sea', 'Walton-on-the-Naze', 'Jaywick', 'Great Holland',
    'Little Clacton', 'Weeley', 'Weeley Heath', 'Thorpe-le-Soken', 'Kirby Cross',
    'Kirby-le-Soken', 'Beaumont', 'Tendring', 'Alresford', 'Great Bentley',
  ],
  'Frinton-on-Sea': [
    'Walton-on-the-Naze', 'Clacton-on-Sea', 'Kirby Cross', 'Kirby-le-Soken', 'Thorpe-le-Soken',
    'Great Holland', 'Holland-on-Sea', 'Weeley', 'Little Clacton', 'Tendring',
    'Beaumont', 'Alresford', 'Wix', 'Bradfield', 'Mistley',
  ],
  'South Woodham Ferrers': [
    'Woodham Ferrers', 'Bicknacre', 'East Hanningfield', 'Rettendon', 'Runwell',
    'Wickford', 'Battlesbridge', 'Hullbridge', 'Rawreth', 'Cold Norton',
    'Purleigh', 'Woodham Walter', 'North Fambridge', 'South Fambridge', 'Stow Maries',
  ],
  'Great Dunmow': [
    'Takeley', 'Hatfield Heath', 'Stortford Road', 'Barnston', 'Felsted',
    'Great Easton', 'Little Easton', 'Broxted', 'Thaxted', 'Saffron Walden',
    'Bishops Stortford', 'Stansted Mountfitchet', 'Leaden Roding', 'Aythorpe Roding', 'High Roding',
  ],
  'Waltham Abbey': [
    'Nazeing', 'Roydon', 'Epping', 'Cheshunt', 'Broxbourne',
    'Hoddesdon', 'Goffs Oak', 'Crews Hill', 'Enfield', 'Loughton',
    'Theydon Bois', 'North Weald', 'Thornwood', 'Coopersale', 'Bumbles Green',
  ],
  'Burnham-on-Crouch': [
    'Southminster', 'Bradwell-on-Sea', 'Tillingham', 'Mayland', 'Althorne',
    'Cold Norton', 'Steeple', 'Mundon', 'Heybridge', 'Maldon',
    'Latchingdon', 'North Fambridge', 'Purleigh', 'Woodham Ferrers', 'Canewdon',
  ],
  'Buckhurst Hill': [
    'Woodford Green', 'South Woodford', 'Chigwell', 'Loughton', 'Highams Park',
    'Walthamstow', 'Snaresbrook', 'Wanstead', 'Hainault', 'Grange Hill',
    'Ilford', 'Barkingside', 'Clayhall', 'Newbury Park', 'Fairlop',
  ],
  'Canvey Island': [
    'Benfleet', 'Hadleigh', 'Thundersley', 'South Benfleet', 'Rayleigh',
    'Pitsea', 'Basildon', 'Stanford-le-Hope', 'Corringham', 'Fobbing',
    'Vange', 'Laindon', 'Bowers Gifford', 'Langdon Hills', 'North Benfleet',
  ],
  'Leigh-on-Sea': [
    'Chalkwell', 'Westcliff-on-Sea', 'Hadleigh', 'Daws Heath', 'Thundersley',
    'Benfleet', 'Hockley', 'Rayleigh', 'Southend-on-Sea', 'Prittlewell',
    'Eastwood', 'Rochford', 'Hawkwell', 'Ashingdon', 'Canewdon',
  ],
  'Ingatestone': [
    'Mountnessing', 'Margaretting', 'Stock', 'Billericay', 'Brentwood',
    'Shenfield', 'Hutton', 'Fryerning', 'Mill Green', 'Blackmore',
    'Stondon Massey', 'Doddinghurst', 'Kelvedon Hatch', 'Pilgrims Hatch', 'Herongate',
  ],
};

export function getNearbyAreas(cityName: string): string[] {
  if (nearbyAreas[cityName]) return nearbyAreas[cityName];
  return [];
}
