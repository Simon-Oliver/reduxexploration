import React from 'react';
import { Field, reduxForm } from 'redux-form';

class VideoCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return <input type="text" value={formProps.value} onChange={formProps.input.onChange} />;
  }

  render() {
    return (
      <div>
        <form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(VideoCreate);
