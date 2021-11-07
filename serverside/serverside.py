from flask import Flask
import asyncio
import pyodbc
import json as JSON



server = 'tcp:34.122.100.221' 
database = 'astromathmain' 
db_username = 'sqlserver' 
db_password = 'astromathtest1'

rdsn = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+db_username+';PWD='+ db_password
conn =  pyodbc.connect(rdsn)
cursor =  conn.cursor()
app = Flask(__name__)

@app.route('/')
async def hello():
    #verify new score is higher than last
    return "ASTROMATH API"


@app.route('/highscore/<username>/<score>')
async def highScore(username, score):
    #verify new score is higher than last
    newscore = int(float(score))
    cursor.execute('''
                    INSERT INTO leaderboard 
                    VALUES(?,?)
                    ''', username, newscore)
    return "true"

@app.route('/leaderboard/')
async def leaderboard():
    #checks that users highscore is in top ten
    c = cursor.execute('''
               SELECT TOP 10 * FROM dbo.leaderboard ORDER BY score DESC 
                ''')

    #conver python list to json
    rows = c.fetchall()
    data = []
    for row in rows:
        data.append([x for x in row]) # or simply data.append(list(row))
    return JSON.dumps(data)