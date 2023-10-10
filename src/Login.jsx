import axios from 'axios'
export function Login() {

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new FormData(e.target)
    axios.post("http://localhost:3000/sessions.json", params).then((response) => {
      console.log(response.data);
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
      localStorage.setItem("jwt", response.data.jwt);
      e.target.reset();
      window.location.href = "./"
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" type="email"></input>
        <br></br>
        <label>Password:</label>
        <input name="password" type='password'></input>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}