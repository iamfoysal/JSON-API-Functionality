const autoLoad = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => fetchData(data));
}

const fetchData = datas => {
    const element = document.getElementById('Fetch-data');
    const p = document.createElement('p');
    p.innerHTML = datas.quote;
    element.appendChild(p);
    console.log(datas.quote);
    
}

// https://restcountries.com/v3.1/all
