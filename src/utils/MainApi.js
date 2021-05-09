import React from "react";

export class MainApi{
    constructor(url){
        this._url = url;
        this._token = localStorage.getItem('jwt');
        }

        getMovies(){
            this._token = localStorage.getItem('jwt');
            return fetch(this._url + "/movies", {
                method: "GET",
                headers: {
                    authorization: `Bearer ${this._token}`,
                    "Content-type": "application/json"
                }
            }).then((res) => {
            if(res.ok) {
                console.log(res)
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        }
        
        createMovie({
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            movieId,
            nameRU,
            nameEN,
            thumbnail,}){
            this._token = localStorage.getItem('jwt');
            return fetch(this._url + "/movies", {
                method: "POST",
                headers: {
                    authorization: `Bearer ${this._token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    country,
                    director,
                    duration,
                    year,
                    description,
                    image,
                    trailer,
                    movieId,
                    nameRU,
                    nameEN,
                    thumbnail,
                  })
            }).then((res) => {
            if(res.ok) {
                console.log(res)
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        }

        deleteMovies(id) {
            this._token = localStorage.getItem('jwt');
            console.log(id)
            return fetch(this._url + `/movies/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${this._token}`,
                    "Content-type": "application/json"
                }
            }).then((res) => {
            if(res.ok) {
                console.log(res)
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
          }

          register({name, password, email}){
              console.log(name, password, email)
            return fetch(`${this._url}/signup`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, password, email})
              })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                console.log(res)
                return res;
              })
          }

          authorize(email, password){
                return fetch(`${this._url}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email, password)
                })
                .then((response => response.json()))
                .then((data) => {
                if (data){
                    localStorage.setItem('jwt', data.token);
                    return data;
                } 
                })
            }

            getUserData(){
                this._token = localStorage.getItem('jwt');
                return fetch(this._url + "/users/me", {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${this._token}`,
                        "Content-type": "application/json"
                    }
                }).then((res) => {
                if(res.ok) {
                    console.log(res)
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
        
            }
            setUserData(data){
                this._token = localStorage.getItem('jwt');
                return fetch(this._url + "/users/me", {
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${this._token}`,
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email
                      })
                }).then((res) => {
                if(res.ok) {
                    console.log(res)
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
        
            }
        }


 const api = new MainApi("https://api.aaaengeldip.students.nomoredomains.icu")
 export default api;