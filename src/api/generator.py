import random
import requests
from bs4 import BeautifulSoup
import json


def main():
      
  # URL for the Wikipedia page with a list of American Airlines destinations
  url = 'https://en.wikipedia.org/wiki/List_of_American_Airlines_destinations'

  # make a request to the Wikipedia page and parse the HTML
  response = requests.get(url)
  soup = BeautifulSoup(response.text, 'html.parser')

  # find the table with the list of airports
  table = soup.find('table', {'class': 'wikitable sortable'})

  # create a list of all US airports
  airports = []
  country = ''
  airport = ''

  # iterate over the rows in the table
  for row in table.find_all('tr'):
    # get the cells in the row
    cells = row.find_all('td')
    # if the row has cells, it is an airport row
    if cells:
      if (len(cells) > 4 and 
          cells[3].text.strip() == ('Terminated' or 'Airport closed' or 'Seasonal') or 
          cells[2].text.strip() == ('Terminated' or 'Airport closed' or 'Seasonal') or
          cells[1].text.strip() == ('Terminated' or 'Airport closed' or 'Seasonal')):
        continue
      if (len(cells) == 5):
        country = cells[0].text.strip()
        city = cells[1].text.strip()
        airport = cells[2].text.strip()
      if (len(cells) == 4):
        city = cells[0].text.strip()
        airport = cells[1].text.strip()
      if (len(cells) == 3):
        airport = cells[0].text.strip()
        
      # add the airport to the list
      newAirport = {
        'country': country, 
        'city': city, 
        'airport': airport
        }
      airports.append(newAirport)
      # print(country + '\t' + '\t' + '\t' + city + '\t' + '\t' + airport) 
      
  # # open a file for writing
  # with open('airports.json', 'w') as f:
  # # write the list to the file as a JSON object
  #   json.dump(airports, f)
  json_data = json.dumps(airports)
  print(airports)
  # generate a random airport city
  def generate_airport_name():
    # randomly select an airport from the list
    airport = random.choice(airports)

    # return the selected airport
    return airport

  # generate and print a random airport city
  # return generate_airport_name()
  # print(generate_airport_name())

if __name__ == "__main__":
  main()