from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/names")
def names():
    return {"names": ["Harry Houdini", "G.O.B", "Robert Harbin"]}

if __name__ == "__main__":
    app.run(ssl_context='adhoc')
