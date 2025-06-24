# Web Scraping Safari

This project scrapes the top 5 trending repositories from [GitHub Trending](https://github.com/trending) using Python.

## Files Included

- `trending.py` – Python script to scrape repo names and links  
- `repos.csv` – Output file with scraped data  
- `README.md` – Project description

## How to Run

1. Install required libraries:
   pip install requests beautifulsoup4

2. Run the script:
   python Web_Scraping.py
   
3. View the repos.csv file for results.




#  Weather Watch

Weather Watch is a simple weather dashboard that lets users check real-time weather for any city using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript.



##  Features
-  Search by city name
-  Shows temperature, humidity & condition
-  Handles errors for invalid input
-  Uses OpenWeatherMap API
-  Responsive and easy to use


##  How to Run

1. Clone the repo:
   ```
   git clone https://github.com/YOUR_USERNAME/weather-watch.git
   cd weather-watch

3. Get your API key from [openweathermap.org/api](https://openweathermap.org/api)
   ```Replace this line in `script.js`:
   const apiKey = "YOUR_API_KEY_HERE";```

4. Open `index.html` in your browser:
   ```start index.html```


# Simple_API_Data_viewer

This is a simple web application that uses the **Dog CEO API** to display random dog images and allows users to filter them by breed name.

---

##  API Used

**Dog CEO Dog API**  
 https://dog.ceo/dog-api/

Endpoints used:
- `https://dog.ceo/api/breeds/image/random/10`  
  → Fetches 10 random dog images across all breeds.

---

##  How the App Works

- When the page loads, the app fetches **10 random dog images**.
- Each image contains a **breed name**, extracted from its URL.
- A **text input** (`breedFilter`) allows users to **filter** the displayed images by breed.
- As the user types, the images are filtered **in real-time** by matching the breed part of the image URL.
- All logic is handled in **vanilla JavaScript**, and images are displayed dynamically using DOM manipulation.

---

##  Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- Dog CEO Public API

---

## Files

- `index.html` — Main HTML layout  
- `style.css` — Styling for the gallery and layout  
- `script.js` — JavaScript logic for fetching and filtering dog images

---

## Live Preview
[Click to View](https://spectacular-rolypoly-371820.netlify.app/)

---


#  Colab_Conquer – Iris EDA

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Sneha-Amballa/HackWeek/blob/main/Colab_Conquer/iris_eda.ipynb)



# Speech to Text with Deepgram API

A simple and elegant web tool that converts your speech into text using Deepgram’s real-time Speech-to-Text API.


##  Features

- 🎤 Start/Stop voice recording
- 💬 Live transcription
- 🌐 Uses Deepgram WebSocket API
- 🧼 Clean and responsive UI

---

##  How to Run This Project

### Clone the repository

```bash
git clone https://github.com/Sneha-Amballa/HackWeek.git
cd Speech-to-Text
