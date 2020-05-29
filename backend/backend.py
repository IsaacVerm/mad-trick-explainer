from flask import Flask
from flask_cors import CORS
from config import web_app_url, api_url

app = Flask(__name__)
CORS(app)

@app.route("/names")
def names():
    return {"names": ["Harry Houdini", "G.O.B", "Robert Harbin"]}

@app.route("/config")
def config():
    return {"webAppUrl": web_app_url,
            "apiUrl": api_url}

if __name__ == "__main__":
    app.run()
