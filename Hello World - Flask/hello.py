
# Import the Flask module from the flask package
from flask import Flask, redirect, request, render_template
from flask_bootstrap import Bootstrap

# Instantiate the Flask class to the variable: app
app = Flask(__name__)
# Create a "route" using a "decoration"
@app.route('/')
# Create a Python function that will be executed at the decoration
def index():
	return "<h1>This is index</h1>"

# Another route, for good measure
@app.route('/user/<name>')
def user(name):
	return "<h1>Hello, %s</h1>" % name
# @app.route('/more')
# def more():
# 	return "<h1>More Hello World!</h1>"


if __name__ == '__main__':
	app.run(debug=True)

@app.route('/testingDebug')
def testingDebug():
	return "<h1>Testing Debug!</h1>"

@app.route('/user/<id>')
def get_user(id):
	user = load_user(id)
	if not user:
		abort(404)
	return '<h1>Hello, %s</h1>' % user.name

@app.route('/redirect_google')
def redirect_google():
	return redirect('https://www.google.com')

@app.route('/usag')
def usag():
	user_agent = request.headers.get('User-Agent')
	return "<p>Your browser is %s</p>" % user_agent

@app.route('/blog')
def blog():
	posts = [{'title': 'Book1', 'author': 'Author1'},
			{'title': 'Book2', 'author': 'Author2'}]
	return render_template('blog.html', author="Nikola", sunny=False, posts=posts)


