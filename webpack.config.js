module.exports={
entry:'./public/app/app.jsx',
output:{
path:__dirname,
filename:'./public/bundle.js'

},

module:{
loaders:[
{
loader:'babel-loader',
query:{
presets:['react','es2015','stage-0']
},
test:/\.jsx?$/,
exclude:/(node_modules|bower_components)/

}
]
},
resolve:{
    root:__dirname,
    alias:{
   Weather:'public/app/WeatherComponents/Weather.jsx',
   WeatherData:'public/app/WeatherComponents/WeatherData.jsx',
   WeatherForm:'public/app/WeatherComponents/WeatherForm.jsx',
   openWeatherMap:'public/app/apicall/openweathermap.jsx',
   Locator:'public/app/WeatherComponents/Locator.jsx',
   About:'public/app/WeatherComponents/About.jsx',
  Services: 'public/app/WeatherComponents/Services.jsx',
  Main:'public/app/WeatherComponents/Main.jsx',
  NavBar: 'public/app/WeatherComponents/NavBar.jsx',

    },
extensions:['','.js','.jsx']
}

}