import React from 'react';
import PropTypes from 'prop-types';

import { Blade, BladeHeader, BladeToolbar, BladeToolbarButton, BladeContent } from '../../../index';

const propTypes = {
  bladeId: PropTypes.string.isRequired,
  bladeManager: PropTypes.object.isRequired,
};
const defaultProps = {
};

const AboutAuthor = ({ bladeId, bladeManager }) => {
  const handleBackClick = () => {
    bladeManager.remove(bladeId);
  }

  return (
    <Blade>
      <BladeHeader>
        <span><i className="fa fa-user" style={{ color: 'green' }} /></span>
        <h3 className={'blink'} style={{ marginLeft: '8px', display: 'inline' }}>About Author</h3>
      </BladeHeader>

      <BladeToolbar>
        <BladeToolbarButton
          id="back"
          title="Back"
          iconClass="fa fa-arrow-left"
          onClick={handleBackClick}
          layoutDirection="horizontal"
        />
      </BladeToolbar>

      <BladeContent>
        <h1>Some Guy</h1>
        <h3>Did some amazing things</h3>
        <h4>Biography</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et, maiores officiis ullam iusto velit atque soluta voluptate minus blanditiis sequi! Vel animi dolor quam quidem adipisci deserunt ratione repellendus!</p>
      </BladeContent>
    </Blade>
  );
}

export default AboutAuthor;

AboutAuthor.propTypes = propTypes;
AboutAuthor.defaultProps = defaultProps;
