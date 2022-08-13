import { html } from 'lit';
import '../src/App.js';

export default {
  title: 'TicTacToe',
  component: 'tic-tac-toe',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <tic-tac-toe
      style="--tic-tac-toe-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </tic-tac-toe>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
