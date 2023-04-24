import React from "react";

export interface WelcomeProps {
  name: string;
}

export class Welcome extends React.Component<WelcomeProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
