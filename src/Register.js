import React, {useState} from 'react'

const initialFromsState = {
  username: "",
  email: "",
  password: ""
}


export default function Register () {

 const [form, setForm] = useState(initialFromsState)

  const [user, setUser] = useState(null)

  const handleChange = event => {
   setForm({
     ...form,
     [event.target.name]: event.target.value
   })
  }
  const handleSubmit = event => {
   event.preventDefault();
   setUser(form);
   setForm(initialFromsState)
  }

  return (
    <div>
      <form
        style = {{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'

        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="UserName"
          name="username"
          onChange = {handleChange}
          value={form.username}

        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange = {handleChange}
          value={form.email}

        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange = {handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}
