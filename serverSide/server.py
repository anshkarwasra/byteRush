import requests
from flask import Flask, request, jsonify
from flask_cors import CORS


CLIENT_ID = 'bda33c82897f44318970d748d1c91f47'
CLIENT_SECRET = '00c3ac926e1b481a9924dfb17c375675'
app = Flask(__name__)
CORS(app)
def get_access_token():
    auth_response = requests.post(
        'https://accounts.spotify.com/api/token',
        headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data={
            'grant_type': 'client_credentials',
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET
        }
    )
    return auth_response.json().get('access_token')

access_token = get_access_token()

def get_recommendations(token, seed_genres):
    headers = {
        'Authorization': f'Bearer {token}'
    }
    
    # Spotify has predefined genres that can be used as seeds
    # Here you can use mood-related genres
    response = requests.get(
        f'https://api.spotify.com/v1/recommendations?seed_genres={seed_genres}',
        headers=headers
    )
    
    return response.json()


@app.route('/get_recommendations',methods = ["GET","POST"])
def getRecommendations():
    if request.method == "POST":
        mood = str(request.form.get('mood')).lower() 
        songData = get_recommendations(access_token,mood)
        print(songData)
        return jsonify(songData)








if __name__ == "__main__":
    app.run(debug=True,port=5000)
