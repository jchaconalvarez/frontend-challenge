import React from 'react';
import GridItem from '../components/GridItem';

const ACTIVE_CLASS_NAME = 'active';

class Grid extends React.Component {
  /**
   * Runs on component mount.
   */
  componentDidMount() {
    /**
     * intersectionObserver toggles className active depending on if the element
     * is inside the viewport (entry.isIntersecting) or not (!entry.isIntersecting).
     */
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.className = `grid-item ${ACTIVE_CLASS_NAME}`;
        } else {
          entry.target.className = 'grid-item';
        }
      });
    });
    /**
     * Attaches intersectionObserver to each grid-item so as to track when each
     * one enters or leaves the viewport.
     */
    Array.from(document.getElementsByClassName('grid-item')).forEach((gridItem) => {
      intersectionObserver.observe(gridItem);
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
