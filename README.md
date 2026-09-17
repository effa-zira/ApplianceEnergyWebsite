# Appliance Energy Consumption Website

## 📌 Live Demo
https://appliance-energy-website-theta.vercel.app

## 📝 Project Description
A 3-page interactive website that displays television energy consumption data for the Australian market. Built as part of the COS30045 unit (T01 (a) assignment).

## 📂 Pages
- **Home** — Introduction to appliance energy consumption
- **Televisions** — Interactive table showing TV models, screen sizes, star ratings, and energy consumption
- **About Us** — Information about the project, data source, and technologies used

## ⚙️ Data Processing
The raw data was cleaned, filtered, and transformed using **KNIME** (completed in task T01 (b)). The cleaned dataset was exported as `tv_data.csv` and loaded into the website using **PapaParse**.

## 🛠️ Technologies Used
- **HTML5** — Page structure
- **CSS3** — Styling with a yellow/black power theme
- **JavaScript** — Dynamic table rendering and interactive navigation
- **PapaParse** — CSV parsing library
- **KNIME** — Data processing
- **Vercel** — Hosting and deployment

## 🤖 GenAI Acknowledgement

I used **GitHub Copilot** in VS Code to assist with the following parts of this project:

- **HTML structure**: Copilot generated the initial boilerplate for the three pages (header, nav, main, footer).
- **CSS styling**: Copilot suggested hover effects and the yellow/black colour scheme.
- **JavaScript logic**: Copilot helped me write the PapaParse function to read `tv_data.csv` and dynamically generate the HTML table.
- **Debugging**: When my `fetch()` call returned a 404 error, Copilot explained that the file path needed to match exactly and helped me fix it.

### My Reflection
Copilot was very helpful for generating repetitive boilerplate code quickly, but I found that I still needed to understand what the code was doing — especially the PapaParse parsing logic and how the CSV headers map to the JavaScript object keys. I modified the generated code to match my actual dataset columns (from KNIME) and adjusted the colour scheme to match my chosen power logo.

The most useful thing was asking Copilot "why" my code was failing — it taught me about the difference between running the site via Live Server (which works) versus opening the HTML file directly (which causes CORS errors).

## 🚀 Deployment
This project is deployed on **Vercel**. Every commit pushed to the `main` branch on GitHub automatically triggers a new deployment.

## 👤 Author
Effa Azzira
COS30045 — Swinburne University of Technology Sarawak