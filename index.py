from urllib.request import urlopen
import requests
import json


# exempole 1 requete http


# urls = "https://api.github.com/"

# response = urlopen(urls)

# data = json.load(response)

# print(data)



# exempole 2 requete http

# url = 'https://randomfox.ca/floof/'
# r = requests.get(url)

# print(r.status_code) 

# print(r.text) 
# print(r.json()['image']) 

# json_data=r.json()
# print(json_data)


url = 'https://jsonplaceholder.typicode.com/posts'

r = requests.get(url)

# print(r.text) 
json_data=r.json()
print(json_data)
print(json_data.title + " " + json_data.body)
# print(r.json()['image']) 


