## Main screen

- Displays list of all available recipes
- Has buttons to Add/Edit/Delete recipes

## Entry screen

- user may Add new or Edit existing recipe
- recipe consist of multiline description and list of ingredients
- each ingredient has name, quantity and unit where:
- name is a multiword string (like bread flour)
- quantity is a float number (like 1.0)
- unit is a multiword string (any string is treated as a unit - so "red balbinka" is also a unit)

## Menu screen

- user may create a list of recipes to be cooked and program will compute sorted list of required ingredients to buy
- only compatible (=equal strings) units are summed up (see eggs with pcs) - if units are not compatible ingredients are presented separately (see salt)

## Other

- recipes are stored in recipes.json
- Application should use the same server (so only one port occupied) for serving static (react) and dynamic (data in rest) content (Production build)

## Instruction to run

- npm install
- create and fill in .env file by using template from .env-example file

### Production

- create ./dist directory in server folder (i.e. mkdir dist) if it doesn't exist
- cd server
- npm run buildServer
- npm run buildClient
- npm start

### Development (server)

- cd server && npm run dev (in one terminal)
- cd client && npm start (in second terminal)
