import requests
import json

client_id = 'client_9fa497af08d7870380398e14d88ef457'
client_secret = 'secret_3c7d132c832c570f1deed7a42163d233'
scopes = ['api_salesresults_read']
auth_url = 'https://auth.domain.com.au/v1/connect/token'
url_endpoint = 'https://api.domain.com.au/v1/salesResults/'
city = 'Sydney'


def get_property_info():
    response = requests.post(auth_url, data = {
                        'client_id':client_id,
                        'client_secret':client_secret,
                        'grant_type':'client_credentials',
                        'scope':scopes,
                        'Content-Type':'text/json'
                        })
    json_res = response.json()
    access_token=json_res['access_token']
    print(access_token)
    auth = {'Authorization':'Bearer ' + access_token}
    url = url_endpoint + city
    res1 = requests.get(url, headers=auth)    
    r = res1.json()
    print(r)


get_property_info()