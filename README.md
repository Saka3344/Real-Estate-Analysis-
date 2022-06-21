# Group Project 2

## Group Members:

(1) Joanna Sacharz   
(2) Navid Motlagh   
(3) Christian Adiputra   
(4) Sakariya Qasse   
(5) Chris Burley   


## Task Components:

The project that you are currently viewing comprises the following key components:

a) This ReadMe file, a document which:
    
    - Outlines the groups' key objectives. 
    - Explains each key step that the group undertook throughout the project.
    - Showcases the group's charts, maps and findings.


b) A folder called 'API':

    - Contains a file called DataRequest.py which can be run in GitBash. 
      Its purpose is to perform the necessary API request from the Domain.com website.
      The following diagram outlines the basic process:

![alt text](Screen_Captures/Screen_Capture_1-API_Request.png)<br>

c) A folder called 'CSVs for Mongo':

    - Contains all of the CSV files that were fed into Mongo DB to create databases.
    - These were created using the website shown in the screen capture below:

![alt text](Screen_Captures/Screen_Capture_2-JSON_to_CSV.png)<br>

d) A folder called 'Group 2 PowerPoint Presentation':

    - Contains the final presentation document as well as all of the draft versions.

e) A folder called 'Group Map Flask'.

    - Contains all of the group's HTML, Javascript, css and python files.
    - Everything that was required to create the maps, charts and the final app is housed here.
    - The process that was undertaken to create the aforementioned items will be outlined shortly.


## Key objectives:

In completing this project, our group sought to explore a variety of Real Estate related hypotheses. 

Some of our hypotheses include:

    - It is more feasible to find and purchase a property in the north and east of Melbourne.
    - Buyers have lower expectations of the market prices than what they eventually pay for a property. 
    - With the recent cooling in the housing marker we will observe a large discrepancy between auction numbers and sales in all major cities.
      The effect will be felt largest in cities where housing prices are highest.
    - Sub-divisions of land, unit block developments and the construction of townhouses and duplexes have become increasingly popular over the last decade. 
      These trends will mean that the majority of homes with 1 – 3 bedrooms will be close to the CBD whilst those with 4 – 6 bedrooms will be in the middle to outer suburbs. 
    - There will be a higher number of sales in locations that are closer to the city centre.

We also sought to improve our skills relating to the construction of web-based interactive visualisations of data.

Some of the visualisations include:

    -A Choropleth Map showing mean sale prices per Melburnian suburb in the past 7 days.
![alt text](Screen_Captures/Screen_Capture_3-Choropleth.png)<br>

    -A Map breaking the sale numbers down by Melburnian suburb and distance from the CBD (for the past 7 days).
![alt text](Screen_Captures/Screen_Capture_4-Sales_Suburb.png)<br>

    -A map, with a raft of overlays, showing the number of bedrooms each sold Melburnian property had (for the past 7 days).
![alt text](Screen_Captures/Screen_Capture_5-Bedrooms.png)<br>

    -A map, with a raft of overlays, comparing the number of auctions listed with the number of properties sold through auction in each major Australian city on the Eastern Seaboard.
![alt text](Screen_Captures/Screen_Capture_6-Clearance_Rates.png)<br>

    -A bar chart which shows the amount of earnings each Real Estate company made in a 7 day period.
![alt text](Screen_Captures/Screen_Capture_7-Earnings.png)<br>

    -A pie chart which shows the breakdown of auction results across a 7 day period.
![alt text](Screen_Captures/Screen_Capture_8-Auction_Results.png)<br>

    -A bar chart showing the suburbs which had the highest number of properties listed for auction in a 7 day period.
![alt text](Screen_Captures/Screen_Capture_9-Listings_Suburb.png)<br>


## Data Sources:

Our data was obtained by making API calls to Domain.com's developer portal. The process is outlined in the screen captures below:
![alt text](Screen_Captures/Screen_Capture_10-API1.png)<br>

We were able to access JSON data which could then be converted to CSV format using the website shown above in Task Components (b).

## Visualisation creation process:

Step 0: Creating Mongo Databases

![alt text](Screen_Captures/Screen_Capture_11-Mongo.png)

Step 1: Writing an HTML file:

![alt text](Screen_Captures/Screen_Capture_12-HTML.png)

Step 2: Writing a JavaScript file:

![alt text](Screen_Captures/Screen_Capture_13-JavaScript.png)

Step 3: Writing a app.py file:

![alt text](Screen_Captures/Screen_Capture_14-app.png)

Note: CSS files were also used to style the eventual project.


## Wrangling the GeoJSON data:

Step 1: Colours on a Heatmap

![alt text](Screen_Captures/Screen_Capture_15-GeoCOLOURS.png)

Step 2: Merging GeoJSON data with Quantitative data

![alt text](Screen_Captures/Screen_Capture_16-MergingData.png)

Step 3: Creating a choropleth-ready file

![alt text](Screen_Captures/Screen_Capture_17-ChoroplethReady.png)


## Findings:

Findings relating to listing numbers (by suburb) and specific auction outcomes:

![alt text](Screen_Captures/Screen_Capture_18-Navid_Conclusions.png)

Findings relating to the mean sales price (by suburb):

![alt text](Screen_Captures/Screen_Capture_19-Joanna_Conclusions.png)

Findings relating to the number of sales by suburb and by distance from the CBD:

![alt text](Screen_Captures/Screen_Capture_20-Christian_Conclusions.png)

Findings relating to Auction Clearance Rates in major cities across the Eastern Seaboard:

![alt text](Screen_Captures/Screen_Capture_21-Chris1_Conclusions.png)

Findings relating to Bedroom numbers in propeties sold in Greater Melbourne:

![alt text](Screen_Captures/Screen_Capture_22-Chris2_Conclusions.png)

Findings relating to Real Estate agent performance in Greater Melbourne:

![alt text](Screen_Captures/Screen_Capture_23-Qasse_Conclusions.png)


## Running the app.py file (launching the Flask App):

To launch the Flask App:

Step 1: Locate the app.py file that is in the 'Group Map Flask' folder.

Step 2: Open GitBash in the app.py files location.

Step 3 (optional): Open an environment.

Step 4: Run the app.py file using the command shown in the screen capture below:

![alt text](Screen_Captures/Screen_Capture_24-Launch_Flask.png)

Success looks like:

![alt text](Screen_Captures/Screen_Capture_25-Flask.png)





