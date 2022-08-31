import { HomePage } from './pages/Home';
import { Button } from './components/Button';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const homePage = new HomePage({ title: 'Home page' });
  console.log(homePage.getContent())
  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});

