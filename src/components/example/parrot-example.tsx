import { Component, h, Host, State, JSX } from '@stencil/core';

@Component({
  tag: 'parrot-example',
  styleUrl: 'parrot-example.css',
  shadow: true,
})
export class ExampleParrot {
  @State() private nParrots: number = 10;

  render(): JSX.Element {
    return (
      <Host>
        {[...new Array(this.nParrots)].map((_, i) => (
          <party-parrot storageId={`example${i}`}></party-parrot>
        ))}
      </Host>
    )
  }
}
