
const autoLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    // .then(data => fatchata(data))
    .then(data => console.log(data[0].name.official ));
}
 autoLoad(); 

const fatchata = datas => {
    console.log(datas);

}






