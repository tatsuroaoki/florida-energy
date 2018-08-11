# Charting Library
The following charting libraries were used to display data showing Florida's total energy consumption and renewable energy production:

google.charts.load('current', {packages: ['corechart']});

# Chart Type
I decided to choose Google Chart's curveType = 'function' and used LineChart to show the data. LineChart was used because I wanted to clearly show how energy consumption and renewable energy production have changed since 1960, respectively. The charts make it very apparent that energy consumption has been increasing rapidly and while renewable energy production has also increased, there is still a significant gap. Communicating what may otherwise be complex data this way helps FESC emphasize the need to invest more time and money into research to close the gap. 

# API Documentation
Link to API documentation for Florida's total energy consumption:
https://www.eia.gov/opendata/qb.php?category=40236&sdid=SEDS.TETCB.FL.A

Link to API documentation for Flordai's renewable energy production:
https://www.eia.gov/opendata/qb.php?category=40426&sdid=SEDS.REPRB.FL.A