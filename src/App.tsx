import Attribute from './components/Attribute';
import Button from './components/Button';
import Hero from './components/Hero';
import Input from './components/Input';

export default function App() {
  return (
    <>
      <main className="app">
        <div className="app-container">
          <Input />
          <Button />
          <Hero />
        </div>
        <Attribute />
      </main>
    </>
  );
}
