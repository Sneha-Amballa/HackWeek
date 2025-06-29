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

git clone https://github.com/Sneha-Amballa/HackWeek.git
cd Speech-to-Text


# Squad_Goals
A visually stunning, stat-packed, and fan-friendly one-page website showcasing my custom cricket team — **Royal Smashers**!

## Project Features

-  Team name, logo, and catchy slogan
-  Stylish player cards in a responsive grid
-  Modal popup with bonus player stats like:
  - Strike Rate
  - Matches Played
  - Jersey Number
  - Best Performance

##  Tech Stack

- **HTML** – structure
- **CSS** – styling and layout
- **JavaScript** – interactivity (modal popup)


# Budget_Tracker

A beginner-friendly budget tracker app that lets you input expenses and view a pie chart visualization using Chart.js.

## Features
- Add category and amount
- View pie chart for expenses
- Responsive and interactive

## How to Run
1. Clone this repo
2. Open `index.html` in your browser


# Express_Admission

This is a simple college admission form built with Express.js. Users can apply for courses, and their data is stored temporarily in memory.

## How to Run

1. Clone the repo
2. Run `npm install`
3. Start server with `node app.js`
4. Visit `http://localhost:3000/admission` in your browser

## Technologies
- Node.js
- Express.js
- HTML & CSS



# Resume Analyzer CLI Tool

This is a Python command-line tool that analyzes a resume (PDF format) to identify which predefined skills are present or missing. It's useful for job seekers to evaluate how well their resume aligns with key skills in the industry.

---

## Requirements

- Python 3.6 or above
- `PyMuPDF` library (also known as `fitz`)

Install dependencies using pip:

pip install pymupdf

## How to Run
### Prepare Your Resume:
Save your resume as a .pdf file.

Place it in the project directory or provide its full path when running the script.

### Update the skills.txt:
List the skills you want to check, one skill per line.

### Run the Tool:
Open your terminal or command prompt and run:

python main.py <path_to_resume.pdf>


# The Database Forge

## Description
A simple Python ORM project using SQLAlchemy and SQLite3. Creates `categories` and `products` tables, populates them with sample data, and prints product details including category.

## Setup

```bash
pip install sqlalchemy
python main.py


# Scan My QR

A simple QR code scanner app using `html5-qrcode`. You can scan QR codes using your webcam or upload an image.

##  Features
- Scan from camera
- Scan from uploaded images
- Displays QR content


# 📝 Markdown to HTML Converter

A simple Python command-line tool that converts a `.md` (Markdown) file into a `.html` file using standard Markdown syntax.

---

## 📌 Features

- Converts headers (`#`, `##`, etc.)
- Supports **bold**, *italics*, lists, links, code blocks, and more
- Clean HTML output
- Easy to run – beginner-friendly

---

## 🛠️ Requirements

- Python 3.x
- [`markdown`](https://pypi.org/project/Markdown/) library

Install using pip:

```bash
pip install markdown



# VoiceNotes_to_TaskList

A voice-controlled to-do list using the Web Speech API and vanilla JavaScript.

##  Features
- Add tasks by speaking
- Click to mark tasks as completed

##  Setup
1. Clone the repo
2. Open `index.html` in your browser
