import requests
from bs4 import BeautifulSoup
import csv

url = "https://github.com/trending"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

repos = soup.find_all("article", class_="Box-row")[:5]

with open("repos.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Repository Name", "Link"])

    for repo in repos:
        name = repo.h2.a.text.strip().replace("\n", "").replace(" ", "")
        link = "https://github.com" + repo.h2.a["href"]
        writer.writerow([name, link])
