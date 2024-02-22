Groupe les intraitables:

Projet framework front-end: Vue Js & bootstrap

Routes pour l'api:

  GET|HEAD  api/ateliers ............................................................................................ AtelierController@index
  POST      api/ateliers ............................................................................................ AtelierController@store
  GET|HEAD  api/ateliers/{id} ........................................................................................ AtelierController@show
  PUT       api/ateliers/{id} ...................................................................................... AtelierController@update
  DELETE    api/ateliers/{id} ..................................................................................... AtelierController@destroy
  POST      api/ateliers/{id}/participate ..................................................................... AtelierController@participate
  POST      api/login .................................................................................................. UserController@login
  GET|HEAD  api/profile .............................................................................................. UserController@profile
  POST      api/register ............................................................................................ UserController@register
  GET|HEAD  api/themes ................................................................................................ ThemeController@index
  POST      api/themes ................................................................................................ ThemeController@store
  GET|HEAD  api/themes/{id} ............................................................................................ ThemeController@show
  PUT       api/themes/{id} .......................................................................................... ThemeController@update
  DELETE    api/themes/{id} ......................................................................................... ThemeController@destroy
  

  structure de l'app:

  ├───assets
│   └───home
├───components
├───js
│   └───modules
├───plugins
├───router
├───stores
└───views

