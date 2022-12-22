import React, { useState } from 'react';
import './App.css';
import dice from './plane.png';
import paradise from './paradise.png';

const airports = [
  {
     "country":"Antigua and Barbuda",
     "city":"St. John's",
     "airport":"V. C. Bird International Airport"
  },
  {
     "country":"Argentina",
     "city":"Buenos Aires",
     "airport":"Ministro Pistarini International Airport"
  },
  {
     "country":"Aruba",
     "city":"Oranjestad",
     "airport":"Queen Beatrix International Airport"
  },
  {
     "country":"Australia",
     "city":"Sydney",
     "airport":"Sydney Airport"
  },
  {
     "country":"Bahamas",
     "city":"Nassau",
     "airport":"Lynden Pindling International Airport"
  },
  {
     "country":"Bahamas",
     "city":"Freeport",
     "airport":"Freeport International Airport"
  },
  {
     "country":"Barbados",
     "city":"Bridgetown",
     "airport":"Grantley Adams International Airport"
  },
  {
     "country":"Belize",
     "city":"Belize City",
     "airport":"Philip S. W. Goldson International Airport"
  },
  {
     "country":"Bermuda",
     "city":"Hamilton",
     "airport":"L.F. Wade International Airport"
  },
  {
     "country":"Bonaire",
     "city":"Kralendijk",
     "airport":"Flamingo International Airport"
  },
  {
     "country":"Brazil",
     "city":"Rio de Janeiro",
     "airport":"Rio de Janeiro-Galeão International Airport"
  },
  {
     "country":"Bonaire",
     "city":"São Paulo",
     "airport":"São Paulo-Guarulhos International Airport"
  },
  {
     "country":"Canada",
     "city":"Calgary",
     "airport":"Calgary International Airport"
  },
  {
     "country":"Canada",
     "city":"Montreal",
     "airport":"Montréal-Trudeau International Airport"
  },
  {
     "country":"Canada",
     "city":"Toronto",
     "airport":"Toronto Pearson International Airport"
  },
  {
     "country":"Canada",
     "city":"Vancouver",
     "airport":"Vancouver International Airport"
  },
  {
     "country":"Cayman Islands",
     "city":"George Town",
     "airport":"Owen Roberts International Airport"
  },
  {
     "country":"Chile",
     "city":"Santiago",
     "airport":"Arturo Merino Benítez International Airport"
  },
  {
     "country":"China",
     "city":"Beijing",
     "airport":"Beijing Daxing International Airport"
  },
  {
     "country":"China",
     "city":"Shanghai",
     "airport":"Shanghai Pudong International Airport"
  },
  {
     "country":"Colombia",
     "city":"Barranquilla",
     "airport":"Ernesto Cortissoz International Airport"
  },
  {
     "country":"Colombia",
     "city":"Bogotá",
     "airport":"El Dorado International Airport"
  },
  {
     "country":"Colombia",
     "city":"Cali",
     "airport":"Alfonso Bonilla Aragón International Airport"
  },
  {
     "country":"Colombia",
     "city":"Cartagena",
     "airport":"Rafael Núñez International Airport"
  },
  {
     "country":"Colombia",
     "city":"Medellín",
     "airport":"José María Córdova International Airport"
  },
  {
     "country":"Colombia",
     "city":"Pereira",
     "airport":"Matecaña International Airport"
  },
  {
     "country":"Costa Rica",
     "city":"Liberia",
     "airport":"Daniel Oduber Quirós International Airport"
  },
  {
     "country":"Costa Rica",
     "city":"San José",
     "airport":"Juan Santamaría International Airport"
  },
  {
     "country":"Cuba",
     "city":"Camagüey",
     "airport":"Ignacio Agramonte International Airport"
  },
  {
     "country":"Cuba",
     "city":"Havana",
     "airport":"José Martí International Airport"
  },
  {
     "country":"Cuba",
     "city":"Holguín",
     "airport":"Frank País Airport"
  },
  {
     "country":"Cuba",
     "city":"Santa Clara",
     "airport":"Abel Santamaría Airport"
  },
  {
     "country":"Cuba",
     "city":"Santiago de Cuba",
     "airport":"Antonio Maceo Airport"
  },
  {
     "country":"Cuba",
     "city":"Varadero",
     "airport":"Juan Gualberto Gómez Airport"
  },
  {
     "country":"Curaçao",
     "city":"Willemstad",
     "airport":"Curaçao International Airport"
  },
  {
     "country":"Dominican Republic",
     "city":"Puerto Plata",
     "airport":"Gregorio Luperón International Airport"
  },
  {
     "country":"Dominican Republic",
     "city":"Punta Cana",
     "airport":"Punta Cana International Airport"
  },
  {
     "country":"Dominican Republic",
     "city":"Santiago de los Caballeros",
     "airport":"Cibao International Airport"
  },
  {
     "country":"Dominican Republic",
     "city":"Santo Domingo",
     "airport":"Las Américas International Airport"
  },
  {
     "country":"Ecuador",
     "city":"Guayaquil",
     "airport":"José Joaquín de Olmedo International Airport"
  },
  {
     "country":"Ecuador",
     "city":"Quito",
     "airport":"Mariscal Sucre International Airport"
  },
  {
     "country":"El Salvador",
     "city":"San Salvador",
     "airport":"El Salvador International Airport"
  },
  {
     "country":"France",
     "city":"Paris",
     "airport":"Charles de Gaulle Airport"
  },
  {
     "country":"Germany",
     "city":"Berlin",
     "airport":"Berlin Tegel Airport"
  },
  {
     "country":"Germany",
     "city":"Frankfurt",
     "airport":"Frankfurt Airport"
  },
  {
     "country":"Germany",
     "city":"Munich",
     "airport":"Munich Airport"
  },
  {
     "country":"Greece",
     "city":"Athens",
     "airport":"Athens International Airport"
  },
  {
     "country":"Grenada",
     "city":"St. George's",
     "airport":"Maurice Bishop International Airport"
  },
  {
     "country":"Guatemala",
     "city":"Guatemala City",
     "airport":"La Aurora International Airport"
  },
  {
     "country":"Guyana",
     "city":"Georgetown",
     "airport":"Cheddi Jagan International Airport"
  },
  {
     "country":"Haiti",
     "city":"Cap-Haïftien",
     "airport":"Hugo Chávez International Airport"
  },
  {
     "country":"Haiti",
     "city":"Port-au-Prince",
     "airport":"Toussaint Louverture International Airport"
  },
  {
     "country":"Honduras",
     "city":"Roatán",
     "airport":"Juan Manuel Gálvez International Airport"
  },
  {
     "country":"Honduras",
     "city":"San Pedro Sula",
     "airport":"La Mesa International Airport"
  },
  {
     "country":"Honduras",
     "city":"Tegucigalpa",
     "airport":"Comayagua International Airport"
  },
  {
     "country":"India",
     "city":"Delhi",
     "airport":"Indira Gandhi International Airport"
  },
  {
     "country":"Ireland",
     "city":"Dublin",
     "airport":"Dublin Airport"
  },
  {
     "country":"Israel",
     "city":"Tel Aviv",
     "airport":"Ben Gurion Airport"
  },
  {
     "country":"Italy",
     "city":"Milan",
     "airport":"Milan Malpensa Airport"
  },
  {
     "country":"Italy",
     "city":"Rome",
     "airport":"Leonardo da Vinci-Fiumicino Airport"
  },
  {
     "country":"Italy",
     "city":"Venice",
     "airport":"Venice Marco Polo Airport"
  },
  {
     "country":"Jamaica",
     "city":"Kingston",
     "airport":"Norman Manley International Airport"
  },
  {
     "country":"Jamaica",
     "city":"Montego Bay",
     "airport":"Sangster International Airport"
  },
  {
     "country":"Jamaica",
     "city":"Tokyo",
     "airport":"Haneda Airport"
  },
  {
     "country":"Japan",
     "city":"Tokyo",
     "airport":"Narita International Airport"
  },
  {
     "country":"Mexico",
     "city":"Cancún",
     "airport":"Cancún International Airport"
  },
  {
     "country":"Mexico",
     "city":"Cozumel",
     "airport":"Cozumel International Airport"
  },
  {
     "country":"Mexico",
     "city":"Guadalajara",
     "airport":"Miguel Hidalgo y Costilla Guadalajara International Airport"
  },
  {
     "country":"Mexico",
     "city":"Mexico City",
     "airport":"Mexico City International Airport"
  },
  {
     "country":"Mexico",
     "city":"Morelia",
     "airport":"General Francisco Mujica International Airport"
  },
  {
     "country":"Mexico",
     "city":"León",
     "airport":"Bajïdo International Airport"
  },
  {
     "country":"Mexico",
     "city":"Oaxaca",
     "airport":"Oaxaca International Airport"
  },
  {
     "country":"Mexico",
     "city":"Puerto Vallarta",
     "airport":"Licenciado Gustavo Díaz Ordaz International Airport"
  },
  {
     "country":"Mexico",
     "city":"San José del Cabo",
     "airport":"Los Cabos International Airport"
  },
  {
     "country":"Mexico",
     "city":"Zihuatanejo",
     "airport":"Ixtapa-Zihuatanejo International Airport"
  },
  {
     "country":"Netherlands",
     "city":"Amsterdam",
     "airport":"Amsterdam Airport Schiphol"
  },
  {
     "country":"New Zealand",
     "city":"Auckland",
     "airport":"Auckland Airport"
  },
  {
     "country":"Nicaragua",
     "city":"Managua",
     "airport":"Augusto C. Sandino International Airport"
  },
  {
     "country":"Panama",
     "city":"Panama City",
     "airport":"Tocumen International Airport"
  },
  {
     "country":"Peru",
     "city":"Lima",
     "airport":"Jorge Chávez International Airport"
  },
  {
     "country":"Portugal",
     "city":"Lisbon",
     "airport":"Lisbon Airport"
  },
  {
     "country":"Qatar",
     "city":"Doha",
     "airport":"Hamad International Airport"
  },
  {
     "country":"Saint Kitts and Nevis",
     "city":"Basseterre",
     "airport":"Robert L. Bradshaw International Airport"
  },
  {
     "country":"Saint Lucia",
     "city":"Vieux Fort",
     "airport":"Hewanorra International Airport"
  },
  {
     "country":"Saint Vincent and the Grenadines",
     "city":"Kingstown",
     "airport":"Argyle International Airport"
  },
  {
     "country":"Sint Maarten",
     "city":"Philipsburg",
     "airport":"Princess Juliana International Airport"
  },
  {
     "country":"South Korea",
     "city":"Seoul",
     "airport":"Incheon International Airport"
  },
  {
     "country":"Spain",
     "city":"Barcelona",
     "airport":"Josep Tarradellas Barcelona-El Prat Airport"
  },
  {
     "country":"Spain",
     "city":"Madrid",
     "airport":"Adolfo Suárez Madrid-Barajas Airport"
  },
  {
     "country":"Switzerland",
     "city":"Zürich",
     "airport":"Zurich Airport"
  },
  {
     "country":"Trinidad and Tobago",
     "city":"Port of Spain",
     "airport":"Piarco International Airport"
  },
  {
     "country":"Turks and Caicos Islands",
     "city":"Providenciales",
     "airport":"Providenciales International Airport"
  },
  {
     "country":"United Kingdom",
     "city":"London",
     "airport":"Heathrow Airport"
  },
  {
     "country":"United States (Alabama)",
     "city":"Birmingham, AL",
     "airport":"Birmingham-Shuttlesworth International Airport"
  },
  {
     "country":"United States (Alabama)",
     "city":"Huntsville",
     "airport":"Huntsville International Airport"
  },
  {
     "country":"United States (Alabama)",
     "city":"Mobile",
     "airport":"Mobile Regional Airport"
  },
  {
     "country":"United States (Alabama)",
     "city":"Montgomery",
     "airport":"Montgomery Regional Airport"
  },
  {
     "country":"United States (Alaska)",
     "city":"Anchorage",
     "airport":"Ted Stevens Anchorage International Airport"
  },
  {
     "country":"United States (Alaska)",
     "city":"Fairbanks",
     "airport":"Fairbanks International Airport"
  },
  {
     "country":"United States (Arizona)",
     "city":"Phoenix",
     "airport":"Phoenix Sky Harbor International Airport"
  },
  {
     "country":"United States (Arizona)",
     "city":"Tucson",
     "airport":"Tucson International Airport"
  },
  {
     "country":"United States (Arizona)",
     "city":"Yuma",
     "airport":"Yuma International Airport"
  },
  {
     "country":"United States (Arkansas)",
     "city":"Bentonville",
     "airport":"Northwest Arkansas Regional Airport"
  },
  {
     "country":"United States (California)",
     "city":"Burbank",
     "airport":"Hollywood Burbank Airport"
  },
  {
     "country":"United States (California)",
     "city":"Fresno",
     "airport":"Fresno Yosemite International Airport"
  },
  {
     "country":"United States (California)",
     "city":"Los Angeles",
     "airport":"Los Angeles International Airport"
  },
  {
     "country":"United States (California)",
     "city":"Ontario",
     "airport":"Ontario International Airport"
  },
  {
     "country":"United States (California)",
     "city":"Palm Springs",
     "airport":"Palm Springs International Airport"
  },
  {
     "country":"United States (California)",
     "city":"Sacramento",
     "airport":"Sacramento International Airport"
  },
  {
     "country":"United States (California)",
     "city":"San Diego",
     "airport":"San Diego International Airport"
  },
  {
     "country":"United States (California)",
     "city":"San Francisco",
     "airport":"San Francisco International Airport"
  },
  {
     "country":"United States (California)",
     "city":"San Jose, CA",
     "airport":"San Jose International Airport"
  },
  {
     "country":"United States (California)",
     "city":"Santa Ana",
     "airport":"John Wayne Airport"
  },
  {
     "country":"United States (California)",
     "city":"Santa Barbara",
     "airport":"Santa Barbara Municipal Airport"
  },
  {
     "country":"United States (Colorado)",
     "city":"Colorado Springs",
     "airport":"Colorado Springs Airport"
  },
  {
     "country":"United States (Colorado)",
     "city":"Denver",
     "airport":"Denver International Airport"
  },
  {
     "country":"United States (Colorado)",
     "city":"Denver",
     "airport":"Stapleton International Airport"
  },
  {
     "country":"United States (Colorado)",
     "city":"Hayden",
     "airport":"Yampa Valley Airport"
  },
  {
     "country":"United States (Colorado)",
     "city":"Montrose",
     "airport":"Montrose Regional Airport"
  },
  {
     "country":"United States (Colorado)",
     "city":"Vail",
     "airport":"Eagle County Regional Airport"
  },
  {
     "country":"United States (Connecticut)",
     "city":"Hartford",
     "airport":"Bradley International Airport"
  },
  {
     "country":"United States (District of Columbia)",
     "city":"Washington, D.C.",
     "airport":"Washington Dulles International Airport"
  },
  {
     "country":"United States (District of Columbia)",
     "city":"Washington, D.C.",
     "airport":"Ronald Reagan Washington National Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Fort Lauderdale",
     "airport":"Fort Lauderdale-Hollywood International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Fort Myers",
     "airport":"Southwest Florida International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Jacksonville",
     "airport":"Jacksonville International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Miami",
     "airport":"Miami International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Orlando",
     "airport":"Orlando International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Sarasota",
     "airport":"Sarasota Bradenton International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Pensacola",
     "airport":"Pensacola International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"Tampa",
     "airport":"Tampa International Airport"
  },
  {
     "country":"United States (Florida)",
     "city":"West Palm Beach",
     "airport":"Palm Beach International Airport"
  },
  {
     "country":"United States (Georgia)",
     "city":"Atlanta",
     "airport":"Hartsfield-Jackson Atlanta International Airport"
  },
  {
     "country":"United States (Hawaii)",
     "city":"Honolulu",
     "airport":"Daniel K. Inouye International Airport"
  },
  {
     "country":"United States (Hawaii)",
     "city":"Kahului",
     "airport":"Kahului Airport"
  },
  {
     "country":"United States (Hawaii)",
     "city":"Kailua-Kona",
     "airport":"Kona International Airport"
  },
  {
     "country":"United States (Hawaii)",
     "city":"Lihue",
     "airport":"Lihue Airport"
  },
  {
     "country":"United States (Idaho)",
     "city":"Boise",
     "airport":"Boise Airport"
  },
  {
     "country":"United States (Illinois)",
     "city":"Chicago",
     "airport":"O'Hare International Airport"
  },
  {
     "country":"United States (Indiana)",
     "city":"Indianapolis",
     "airport":"Indianapolis International Airport"
  },
  {
     "country":"United States (Iowa)",
     "city":"Des Moines",
     "airport":"Des Moines International Airport"
  },
  {
     "country":"United States (Kansas)",
     "city":"Wichita",
     "airport":"Wichita Dwight D. Eisenhower National Airport"
  },
  {
     "country":"United States (Kentucky)",
     "city":"Louisville",
     "airport":"Louisville Muhammad Ali International Airport"
  },
  {
     "country":"United States (Louisiana)",
     "city":"Baton Rouge",
     "airport":"Baton Rouge Metropolitan Airport"
  },
  {
     "country":"United States (Louisiana)",
     "city":"New Orleans",
     "airport":"Louis Armstrong New Orleans International Airport"
  },
  {
     "country":"United States (Maine)",
     "city":"Portland, ME",
     "airport":"Portland International Jetport"
  },
  {
     "country":"United States (Maryland)",
     "city":"Baltimore",
     "airport":"Baltimore-Washington International Airport"
  },
  {
     "country":"United States (Massachusetts)",
     "city":"Boston",
     "airport":"Logan International Airport"
  },
  {
     "country":"United States (Massachusetts)",
     "city":"Worcester",
     "airport":"Worcester Regional Airport"
  },
  {
     "country":"United States (Michigan)",
     "city":"Detroit",
     "airport":"Detroit Metropolitan Airport"
  },
  {
     "country":"United States (Minnesota)",
     "city":"Minneapolis",
     "airport":"Minneapolis-Saint Paul International Airport"
  },
  {
     "country":"United States (Mississippi)",
     "city":"Jackson, Mississippi",
     "airport":"Jackson-Medgar Wiley Evers International Airport"
  },
  {
     "country":"United States (Mississippi)",
     "city":"Gulfport, Mississippi",
     "airport":"Gulfport-Biloxi International Airport"
  },
  {
     "country":"United States (Missouri)",
     "city":"Kansas City",
     "airport":"Kansas City International Airport"
  },
  {
     "country":"United States (Missouri)",
     "city":"St. Louis",
     "airport":"St. Louis Lambert International Airport"
  },
  {
     "country":"United States (Montana)",
     "city":"Bozeman",
     "airport":"Bozeman Yellowstone International Airport"
  },
  {
     "country":"United States (Montana)",
     "city":"Missoula",
     "airport":"Missoula International Airport"
  },
  {
     "country":"United States (Nebraska)",
     "city":"Omaha",
     "airport":"Eppley Airfield"
  },
  {
     "country":"United States (Nevada)",
     "city":"Las Vegas",
     "airport":"Harry Reid International Airport"
  },
  {
     "country":"United States (Nevada)",
     "city":"Reno",
     "airport":"Reno-Tahoe International Airport"
  },
  {
     "country":"United States (New Hampshire)",
     "city":"Manchester, NH",
     "airport":"Manchester-Boston Regional Airport"
  },
  {
     "country":"United States (New Jersey)",
     "city":"Newark",
     "airport":"Newark Liberty International Airport"
  },
  {
     "country":"United States (New Mexico)",
     "city":"Albuquerque",
     "airport":"Albuquerque International Sunport"
  },
  {
     "country":"United States (New Mexico)",
     "city":"Santa Fe",
     "airport":"Santa Fe Municipal Airport"
  },
  {
     "country":"United States (New York)",
     "city":"Albany, NY",
     "airport":"Albany International Airport"
  },
  {
     "country":"United States (New York)",
     "city":"Buffalo",
     "airport":"Buffalo Niagara International Airport"
  },
  {
     "country":"United States (New York)",
     "city":"New York City",
     "airport":"John F. Kennedy International Airport"
  },
  {
     "country":"United States (New York)",
     "city":"New York City",
     "airport":"LaGuardia Airport"
  },
  {
     "country":"United States (New York)",
     "city":"Rochester, NY",
     "airport":"Greater Rochester International Airport"
  },
  {
     "country":"United States (New York)",
     "city":"Syracuse",
     "airport":"Syracuse Hancock International Airport"
  },
  {
     "country":"United States (New York)",
     "city":"Watertown",
     "airport":"Watertown International Airport"
  },
  {
     "country":"United States (North Carolina)",
     "city":"Charlotte",
     "airport":"Charlotte Douglas International Airport"
  },
  {
     "country":"United States (North Carolina)",
     "city":"Greensboro",
     "airport":"Piedmont Triad International Airport"
  },
  {
     "country":"United States (North Carolina)",
     "city":"Raleigh",
     "airport":"Raleigh-Durham International Airport"
  },
  {
     "country":"United States (North Carolina)",
     "city":"Wilmington",
     "airport":"Wilmington International Airport"
  },
  {
     "country":"United States (North Dakota)",
     "city":"Bismarck",
     "airport":"Bismarck Municipal Airport"
  },
  {
     "country":"United States (North Dakota)",
     "city":"Fargo",
     "airport":"Hector International Airport"
  },
  {
     "country":"United States (Ohio)",
     "city":"Akron",
     "airport":"Akron-Canton Regional Airport"
  },
  {
     "country":"United States (Ohio)",
     "city":"Cincinnati/Covington",
     "airport":"Cincinnati/Northern Kentucky International Airport"
  },
  {
     "country":"United States (Ohio)",
     "city":"Cleveland",
     "airport":"Cleveland Hopkins International Airport"
  },
  {
     "country":"United States (Ohio)",
     "city":"Columbus",
     "airport":"John Glenn Columbus International Airport"
  },
  {
     "country":"United States (Ohio)",
     "city":"Dayton",
     "airport":"Dayton International Airport"
  },
  {
     "country":"United States (Ohio)",
     "city":"Toledo",
     "airport":"Toledo Express Airport"
  },
  {
     "country":"United States (Oklahoma)",
     "city":"Oklahoma City",
     "airport":"Will Rogers World Airport"
  },
  {
     "country":"United States (Oklahoma)",
     "city":"Tulsa",
     "airport":"Tulsa International Airport"
  },
  {
     "country":"United States (Oregon)",
     "city":"Portland, OR",
     "airport":"Portland International Airport"
  },
  {
     "country":"United States (Oregon)",
     "city":"Redmond",
     "airport":"Redmond Municipal Airport"
  },
  {
     "country":"United States (Pennsylvania)",
     "city":"Harrisburg",
     "airport":"Harrisburg International Airport"
  },
  {
     "country":"United States (Pennsylvania)",
     "city":"Philadelphia",
     "airport":"Philadelphia International Airport"
  },
  {
     "country":"United States (Pennsylvania)",
     "city":"Pittsburgh",
     "airport":"Pittsburgh International Airport"
  },
  {
     "country":"United States (Puerto Rico)",
     "city":"San Juan",
     "airport":"Luis Muñoz Marín International Airport"
  },
  {
     "country":"United States (Rhode Island)",
     "city":"Providence",
     "airport":"T. F. Green Airport"
  },
  {
     "country":"United States (Rhode Island)",
     "city":"United States (South Carolina)",
     "airport":"Charleston"
  },
  {
     "country":"United States (Tennessee)",
     "city":"Knoxville",
     "airport":"McGhee Tyson Airport"
  },
  {
     "country":"United States (Tennessee)",
     "city":"Memphis",
     "airport":"Memphis International Airport"
  },
  {
     "country":"United States (Tennessee)",
     "city":"Nashville",
     "airport":"Nashville International Airport"
  },
  {
     "country":"United States (Texas)",
     "city":"Austin",
     "airport":"Austin-Bergstrom International Airport"
  },
  {
     "country":"United States (Texas)",
     "city":"Dallas",
     "airport":"Dallas/Fort Worth International Airport"
  },
  {
     "country":"United States (Texas)",
     "city":"El Paso",
     "airport":"El Paso International Airport"
  },
  {
     "country":"United States (Texas)",
     "city":"Houston",
     "airport":"George Bush Intercontinental Airport"
  },
  {
     "country":"United States (Texas)",
     "city":"San Antonio",
     "airport":"San Antonio International Airport"
  },
  {
     "country":"United States (U.S. Virgin Islands)",
     "city":"Saint Croix",
     "airport":"Henry E. Rohlsen Airport"
  },
  {
     "country":"United States (U.S. Virgin Islands)",
     "city":"Saint Thomas",
     "airport":"Cyril E. King Airport"
  },
  {
     "country":"United States (Utah)",
     "city":"Salt Lake City",
     "airport":"Salt Lake City International Airport"
  },
  {
     "country":"United States (Virginia)",
     "city":"Norfolk",
     "airport":"Norfolk International Airport"
  },
  {
     "country":"United States (Virginia)",
     "city":"Richmond",
     "airport":"Richmond International Airport"
  },
  {
     "country":"United States (Washington)",
     "city":"Seattle",
     "airport":"Seattle-Tacoma International Airport"
  },
  {
     "country":"United States (Washington)",
     "city":"Spokane",
     "airport":"Spokane International Airport"
  },
  {
     "country":"United States (Wisconsin)",
     "city":"Milwaukee",
     "airport":"Milwaukee Mitchell International Airport"
  },
  {
     "country":"United States (Wyoming)",
     "city":"Jackson",
     "airport":"Jackson Hole Airport"
  },
  {
     "country":"Uruguay",
     "city":"Montevideo",
     "airport":"Carrasco International Airport"
  }
]

function App() {
  const [airport, setAirport] = useState(null);

  // function to choose a random object from the data
  const chooseRandomAirport = () => {
    const randomIndex = Math.floor(Math.random() * airports.length);
    setAirport(airports[randomIndex]);
  };

  return (
    <div className="App">
      <header className='App-header'>
      <div>
      <img src={paradise} alt="paradise" style={{ width: '25rem', display: 'block', margin: '0 auto' }} />
      <img src={dice} className="App-logo" onClick={chooseRandomAirport} />
      {airport ? (
        <table>
          <tbody>
          <tr>
            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>Country:</td>
            <td style={{ textAlign: 'left'}}> &nbsp; {airport.country}</td>
            </tr>
            <tr>
            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>City:</td>
            <td style={{ textAlign: 'left'}}> &nbsp; {airport.city}</td>
            </tr>
            <tr>
            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>Airport:</td>
            <td style={{ textAlign: 'left'}}> &nbsp; {airport.airport}</td>
            </tr>
          </tbody>
        </table>
      ) : (
      //   <img src={paradise} alt="Animated GIF" style={{ width: '25rem', display: 'block', margin: '0 auto' }} />
        <p>click the plane to begin</p>
      )}
    </div>
      </header>
    </div>
  );
}

export default App;
