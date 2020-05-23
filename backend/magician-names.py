from flask import Flask
app = Flask(__name__)


@app.route("/names")
def names():
    return {"names": ["Harry Houdini", "G.O.B", "Robert Harbin"]}

if __name__ == "__main__":
    app.run(ssl_context='adhoc')
