import flask
import pyodbc
import asyncio

app = flask.Flask(__name__)
server = 'tcp:34.122.100.221' 
database = 'astromathmain' 
db_username = 'sqlserver' 
db_password = 'astromathtest1' 
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+db_username+';PWD='+ db_password)
cursor = cnxn.cursor()

@app.route('/create/<username>/<password>')
def create_account(username, password):
    #check to make sure username is under 13 characters and that the password is valid
    #if valid, create account
    #if not valid, return error message
    print(username)
    print(password)
    c = cursor.execute('''
                EXEC pr_createAccount ? , ? ''', username, password)
    print(c)
    return bool(c.fetchall()[0][0])

@app.route('/login/<username>/<password>')
def login(username, password):
    #check that username exists
    #check that password matches
    #else return 0
    c = cursor.execute('''
                    EXEC pr_login ? , ?
                    ''', username, password)
    print(c)
    return bool(c.fetchall()[0][0])

@app.route('/highScore/<username>/<score>')
def highScore(username, score):
    #verify new score is higher than last
    c = cursor.execute('''
                    pr_insertScore ?, ?
                    ''', username, score)
    print(c)
    return bool(c.fetchall()[0][0])

@app.route('/leaderboard/')
def leaderboard():
    #checks that users highscore is in top ten
    c = cursor.execute('''
               SELECT TOP 10 * FROM dbo.leaderboard ORDER BY score DESC 
                ''')
    print(c.fetchall())
    print(type(c.fetchall()))
    return str(c.fetchall())