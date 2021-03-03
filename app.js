async function fetcher(){
   const res = await fetch('https://randomuser.me/api')
   const {results} = await res.json();
   document.querySelector('img').src = results[0].picture.large;
   document.querySelector('#title').innerHTML = results[0].name.title;
   document.querySelector('#names').innerHTML = results[0].name.first;
   document.querySelector('#phone').innerHTML = results[0].phone;
   document.querySelector('#age').innerHTML = results[0].dob.age;
   console.log(results)
}