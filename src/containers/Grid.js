import React from 'react';
import GridItem from '../components/GridItem';

class Grid extends React.Component {

  componentDidMount() {
    const iO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.className = 'grid-item active';
        } else {
          entry.target.className = 'grid-item';
        }
      });
    });
    Array.from(document.getElementsByClassName('grid-item')).forEach((gridItem) => {
      iO.observe(gridItem);
    });
  }

  render() {
    return (
      <div className="grid">
        { Array(40 * 40)
          .fill(null)
          .map((g, i) => <GridItem key={i} />)
        }
      </div>
    );
  }
}

export default Grid;
