from flask import Flask, render_template, request
from graphviz import Source
from parse import parse

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/render', methods=['POST'])
def render():
    dot = parse(request.form['source'])
    dot.attr('graph', rankdir=request.form['rankdir'])
    dot.format = 'svg'
    path = dot.render(cleanup=True)
    try:
        with open(path, 'r') as svgfile:
            return svgfile.read()
    except IOError as e:
        return None

@app.route('/dot', methods=['POST'])
def dot():
    dot = parse(request.form['source'])
    dot.attr('graph', rankdir=request.form['rankdir'])
    return dot.source
