import inspect
import time, datetime
import json
import urllib2


fname = inspect.getfile(inspect.currentframe())
print fname + ' -- BEGIN -- ' +  datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')

cats = [21]#, 26, 49, 105, 249, 770]
vals = [100, 200, 300, 400, 500, 600, 800, 1000, 1200, 1500, 1600, 2000, 2500]
max_date = '2006-01-01T12:00:00.000Z'

url = "http://rsak.proxzerk.com/api_scoreboard/index.php/loadquestion"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

for c in cats[:]:
    for v in vals[:]:
        j = json.load(urllib2.urlopen('http://jservice.io/api/clues?category=' + str(c) + '&value=' + str(v)))
        # for clue in j.get('clues', []):
        for cl in j[:]:
            data = {'category_id': c, 'answer': cl['answer'], 'question': cl['question'], 'airdate': cl['airdate'], 'amount': cl['value']}
            req = urllib2.Request(url)
            req.add_header('Content-type', 'application/json')
            response = urllib2.urlopen(req, json.dumps(data))
            print response

print fname + ' --  END  -- ' +  datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')

