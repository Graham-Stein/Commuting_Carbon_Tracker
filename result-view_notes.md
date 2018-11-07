Calculator: output-all
``` javascript
  {carDiesel: 5,
    carPetrol: 6,
    carHyrid: 2,
    bus: 1,
    bike: 0}
```

Calcultator:output-user-commute
``` javascript

  {carDiesel: 2,
  carPetrol: 0,
  carHyrid: 0,
  bus: .6,
  bike: 0}

```

to go into highcharts we'll want 1 item:
{name: x, data: y}

{name: "Diesel Car", data: 5},
{name: "Petrol Car", data: 6},
{name: "Hybrid Car", data: 2},
{name: "Bus", data: 1},
{name: "Bike", data: 0},
{name: "Your Commute", data: 2.6}


current state:
{
  carDiesel: 1, carPetrol: 2, etc,
}

an extension.
If you did your commute purely by [cardiesel] your footprint is [carDiesel:value], as you're going via [list of travel modes that are >0 by user] - the emissions are [num] reduced, you could reduce by [calculate a % of carHybrid by bike] if you commuted by bike [num] trips a week.

Your total is
