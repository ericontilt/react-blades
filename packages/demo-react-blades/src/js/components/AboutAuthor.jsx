import React, { PropTypes } from 'react';
import { Blade } from 'react-blades';

const propTypes = {
  id: PropTypes.string.isRequired,
  blades: PropTypes.object.isRequired,
};

export default function AboutAuthor({ blades, id }) {
  const bladeActions = [{
    id: 'back',
    title: 'Back',
    iconClass: 'fa fa-arrow-left',
    onClick: () => {
      blades.remove(id);
    },
  }];

  return (
    <Blade
      title="New Course"
      actions={bladeActions}
    >
      <div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis asperiores officia assumenda, incidunt blanditiis, enim, voluptas, quibusdam quidem esse doloribus amet eaque veritatis itaque quam alias soluta pariatur laboriosam.</div>
        <div>Vitae totam consequatur ipsum praesentium est quasi sed recusandae porro et delectus placeat aperiam quos quas, dolores inventore quo ut fugiat obcaecati quaerat id atque nisi eveniet. Aut, aperiam, quaerat!</div>
        <div>Accusamus molestias vitae, saepe, modi assumenda sunt rerum eum ex atque reiciendis et omnis ipsam corrupti similique, sapiente est nulla, consequuntur voluptas recusandae temporibus obcaecati. Molestias minima ex, cupiditate ab.</div>
        <div>Consequatur laborum sint nulla repellendus, non eaque debitis pariatur mollitia quod commodi esse est, accusamus quidem alias veniam magni quas ea totam eligendi atque temporibus illum exercitationem? Adipisci veniam, voluptates.</div>
        <div>Eaque consequatur laboriosam facere obcaecati, eligendi dicta tenetur deleniti minus. Quos, nemo, quas. Similique pariatur inventore minima deserunt, architecto labore repudiandae consequatur sunt facere eveniet enim laudantium in adipisci odio!</div>
      </div>
    </Blade>
  );
}

AboutAuthor.propTypes = propTypes;
