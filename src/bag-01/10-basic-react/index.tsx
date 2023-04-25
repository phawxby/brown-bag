import React from "react";

export interface WelcomeProps {
  name: string;
  onClick?: () => {};
}

export class Welcome extends React.Component<WelcomeProps> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.props.onClick && (
          <button onClick={this.props.onClick}>Click me</button>
        )}
      </div>
    );
  }
}
