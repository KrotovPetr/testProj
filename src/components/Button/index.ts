import Block from '../../utils/Block';
import template from './button.hbs';
import {button} from "./button";
import {templatorConnector} from "../../templatorConnector";

interface ButtonProps {
  label: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: any) {
    super('button', props);
  }

  render() {
    // console.log(this.props);
    let tmpl = button();
    return this.compile(template, this.props);
  }
}
