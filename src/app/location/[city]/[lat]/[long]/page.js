import React from 'react'

export default function WeatherPage({params: {city, lat, long}}) {
  return (
    <div>WeatherPage {city} {lat} {long}</div>
  )
}
