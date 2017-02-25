import * as React from 'react';

export class LoadingComponent extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Loading...
      </div>
    );
  }
}
