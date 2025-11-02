# Sparroh Fetch

**sparroh-fetch** is a Chrome extension that allows users to scan their cart and find cheaper or similar alternatives on third-party marketplaces, it was built to help combat dropshipping and price hikes. It utilises AI to help summarise product keywords for improved search results and a Redis cache system on the backend to help lower API costs.

## Features
 - AI optimised product keywords for better search results.
 - Simple user friendly UI.
 - Sortable results.
 - Cached results server and client side. 
 - 100% privacy, no information is used other than product details. 

## Planned Features
 - More searchable marketplaces (Ebay, Temu, Alibaba, and more).
 - Better country / 'ship to' selection.
 - Custom item lookup.
 - Support other browsers (Firefox, Safari, Edge).
 - Confidence value (How confident Sparroh is that the item matches the orignal).

## Installation
Coming to the Chrome Web Store soon.

#### Requirements:
 - Node v24+ & npm (frontend)
 - Docker (backend)

### Frontend:
#### Step 1: Clone repository. 
```git clone https://github.com/rhysboer/Sparroh-Fetch.git```
#### Step 2: Build & start extension
```bash
# Go into the client folder
cd client

# Install dependencies
npm install

# Build the extension
npm run build

# Start 
npm run dev
```
#### Step 3: Add to Google Chrome
1. Open Google Chrome and navigate to ```chrome://extensions```.
2. Enable "Developer mode" by toggling the switch at the top right corner.
3. Click on "Load unpacked" and select the ```client/dist``` folder.

You can now use Sparroh inside Google Chrome.
Simply visit Amazon, add items to your cart, then open Sparroh at checkout and select a product you wish to compare.

### Backend:
Instructions coming soon.

## Tech Stack
![My Skills](https://skillicons.dev/icons?i=vue,nodejs,express,redis,vite,js,html,css&theme=dark)