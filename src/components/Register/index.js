import React, {useState} from "react";
import {useLocation} from "wouter"
import { useForm } from 'react-hook-form';

export default function Register() {
  const {handleSubmit, register, formState: { errors }} = useForm()

  const [registered, setRegistered] = useState(false)
  const [, navigate] = useLocation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = user => {
    setIsSubmitting(true)

    let exist = JSON.parse(localStorage.getItem('UsersData'));
    if(exist === null) {
      localStorage.setItem('UsersData',  JSON.stringify([user]))
    } else {
      let check = exist.find((asd) => {
        return asd.username === user.username
      })
      if(check){
        let updatedExist = exist.filter((item) => item.username !== check.username);
        localStorage.setItem('UsersData',  JSON.stringify(updatedExist))
      } else {
        exist.push(user)
        localStorage.setItem('UsersData',  JSON.stringify(exist))
      }
    }

    setTimeout(() => {
      setRegistered(true)
      setIsSubmitting(false)
      navigate('/login')
    }, 2000);
  }

  if (isSubmitting) {
    return <h4>
      Congratulations ✅! You've been successfully registered!
    </h4>
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <label>Username
      <input
        placeholder="Username"
        {...register("username", {
          required: true,
          validate: value => value.length > '4',
          maxLength: 15
        })}
      />
      </label>
      {errors.username && <p>Your Username is less than 4 characters</p>}

      <label>Name
      <input
        placeholder="Name"
        {...register("name", {
          required: true,
          pattern: {
            value: /^[A-Za-z]{3,15}$/i,
          }
        })}
      />
      </label>
      {errors.name && <p>Your Name is less than 3 characters and without numbers</p>}

      <label>Surname
      <input
        placeholder="Surname"
        {...register("surname", {
          required: true,
          pattern: {
            value: /^[A-Za-z]{3,15}$/i,
          }
        })}
      />
      </label>
      {errors.surname && <p>Your Surname is less than 3 characters and without numbers</p>}


      <input type="submit" value='Registrarse'/>
    </form>
  );
}