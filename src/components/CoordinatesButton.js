// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  let x;
  let y;
  coordinates = (event) => {
    x = event.data
    y = event.date
    return [x,y]
  }
  render() {
    return (
      <button onClick={this.props.onReceiveCoordinates({this.coordinates})}
    )
  }


}

export default CoordinatesButton
