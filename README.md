INQUISITOR

INQUISITOR is a music discovery platform that allows users to select playlists based on their mood and enjoy a variety of songs. The app fetches songs from the Spotify API and provides a seamless experience through a React frontend and a Flask backend.
Table of Contents

    Features
    Tech Stack
    Installation
    Usage
    API Endpoints
    Contributing
    License
    Contact

Features

    Select playlists based on various moods (e.g., Happy, Sad, Energetic).
    Fetch and display song information from the Spotify API.
    Dynamic playlist updates using React state management.
    Smooth interaction between the frontend and backend using Axios.

Tech Stack

    Frontend: React.js
    Backend: Flask (Python)
    API Integration: Spotify API
    HTTP Client: Axios (for sending POST requests)
    State Management: React hooks (useState, useEffect)

Installation
Prerequisites

Make sure you have the following installed:

    Node.js (for running the React app)
    Python 3.x (for the Flask backend)
    pip (Python package installer)

Steps to Set Up the Project

    Clone the repository:

    bash

git clone <repository-url>
cd INQUISITOR

Set up the backend:

    Navigate to the backend folder:

    bash

cd backend

Create and activate a virtual environment:

bash

python -m venv venv
source venv/bin/activate  # On Mac/Linux
venv\Scripts\activate     # On Windows

Install the necessary Python packages:

bash

    pip install -r requirements.txt

Set up the frontend:

    Navigate back to the root directory and then to the frontend:

    bash

cd ../clientside

Install the necessary Node packages:

bash

    npm install

Environment Variables:

    Create a .env file in the backend folder to store your Spotify API credentials:

    makefile

    SPOTIFY_CLIENT_ID=your_client_id
    SPOTIFY_CLIENT_SECRET=your_client_secret

Run the Backend:

bash

cd serverside
flask run

Run the Frontend:

bash

    cd frontend
    npm run dev

The application should now be running on http://localhost:5173 for the frontend and http://localhost:5000 for the backend.
Usage

    Open the application in your browser.
    Select a mood from the provided options.
    The application will fetch and display playlists from the Spotify API based on the selected mood.
    Click on a playlist to view the songs and enjoy your music.

API Endpoints
POST /get_recomandations

    Description: Fetch playlists based on the user's selected mood.
    Request Body:

    json

    {
      "mood": "Happy"
    }

    Response: Returns a JSON object containing the playlist data from Spotify.

Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create your feature branch:

    bash

git checkout -b feature/YourFeature

Commit your changes:

bash

git commit -m "Add some feature"

Push to the branch:

bash

    git push origin feature/YourFeature

    Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Contact

For questions, suggestions, or feedback, please reach out:

    Your Name: anshkarwasra15@gmail.com
    GitHub: anshkarwasra
