let button = document.getElementById('activity')

// 1st approach, create function under onclick method, call method
button.onclick = ()=> { // event handler
  const api_url = 'http://www.boredapi.com/api/activity/'
  async function getActivity() { // THIS IS A PROMISE
    const response = await fetch(api_url);  // fetching data
    const data = await response.json();  // converting to json datatype
    document.getElementById('result').innerHTML = data.activity;
  }
  getActivity() // call the function
}

// 2nd approach
const api_url = 'http://www.boredapi.com/api/activity/' 
fetch(api_url).then((res, err) => { //res for response, err for error; defines how will respond if get response or error
  if (err != null){
    document.getElementById('result').innerHTML = "ERROR!!!"
  } else {
    return res.json()
  }
}).then((res1, err1) => { // arrow functions in javascript, right side of arrow is what you are returning
  document.getElementById('result').innerHTML = res1.activity;
})

// 3rd approach, clean!
let test = new Promise(() => 1, () => "Error")

async function get() {
  await test
}

// event listener (etc.) --> attach multiple to an object compared to event handler (just one), so can have multiple
// "functions" for each click event
button.addEventListener("click", ()=> {

})