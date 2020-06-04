from flask import Flask, jsonify
from flask_cors import CORS
from config import web_app_url, api_url

app = Flask(__name__)
CORS(app)

@app.route("/magicians")
def magicians():
    return jsonify([
      { "name": "Harry Houdini" },
      { "name": "G.O.B" },
      { "name": "Robert Harbin" }
      ])

@app.route("/config")
def config():
    return {"webAppUrl": web_app_url,
            "apiUrl": api_url}

if __name__ == "__main__":
    app.run(ssl_context='adhoc')
