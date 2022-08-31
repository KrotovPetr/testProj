import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import {home} from "./home";
import {templatorConnector} from "../../templatorConnector";


interface HomePageProps {
  title: string;
}

export class HomePage extends Block {
  constructor(props: HomePageProps) {
    super('div', props);
  }

  init() {
    this.children.button = new Button({
      label: 'Click me',
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    let tmpl = home();
    return this.compile(templateConnector(tmpl, this.props), this.props);
  }
}


