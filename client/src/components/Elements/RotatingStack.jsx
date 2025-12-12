import { useState } from 'react';

// Import all 52 playing cards
import _2c from '../../assets/deck/2_of_clubs.svg';
import _2d from '../../assets/deck/2_of_diamonds.svg';
import _2h from '../../assets/deck/2_of_hearts.svg';
import _2s from '../../assets/deck/2_of_spades.svg';
import _3c from '../../assets/deck/3_of_clubs.svg';
import _3d from '../../assets/deck/3_of_diamonds.svg';
import _3h from '../../assets/deck/3_of_hearts.svg';
import _3s from '../../assets/deck/3_of_spades.svg';
import _4c from '../../assets/deck/4_of_clubs.svg';
import _4d from '../../assets/deck/4_of_diamonds.svg';
import _4h from '../../assets/deck/4_of_hearts.svg';
import _4s from '../../assets/deck/4_of_spades.svg';
import _5c from '../../assets/deck/5_of_clubs.svg';
import _5d from '../../assets/deck/5_of_diamonds.svg';
import _5h from '../../assets/deck/5_of_hearts.svg';
import _5s from '../../assets/deck/5_of_spades.svg';
import _6c from '../../assets/deck/6_of_clubs.svg';
import _6d from '../../assets/deck/6_of_diamonds.svg';
import _6h from '../../assets/deck/6_of_hearts.svg';
import _6s from '../../assets/deck/6_of_spades.svg';
import _7c from '../../assets/deck/7_of_clubs.svg';
import _7d from '../../assets/deck/7_of_diamonds.svg';
import _7h from '../../assets/deck/7_of_hearts.svg';
import _7s from '../../assets/deck/7_of_spades.svg';
import _8c from '../../assets/deck/8_of_clubs.svg';
import _8d from '../../assets/deck/8_of_diamonds.svg';
import _8h from '../../assets/deck/8_of_hearts.svg';
import _8s from '../../assets/deck/8_of_spades.svg';
import _9c from '../../assets/deck/9_of_clubs.svg';
import _9d from '../../assets/deck/9_of_diamonds.svg';
import _9h from '../../assets/deck/9_of_hearts.svg';
import _9s from '../../assets/deck/9_of_spades.svg';
import _10c from '../../assets/deck/10_of_clubs.svg';
import _10d from '../../assets/deck/10_of_diamonds.svg';
import _10h from '../../assets/deck/10_of_hearts.svg';
import _10s from '../../assets/deck/10_of_spades.svg';
import acec from '../../assets/deck/ace_of_clubs.svg';
import aced from '../../assets/deck/ace_of_diamonds.svg';
import aceh from '../../assets/deck/ace_of_hearts.svg';
import aces from '../../assets/deck/ace_of_spades.svg';
import jc from '../../assets/deck/jack_of_clubs.svg';
import jd from '../../assets/deck/jack_of_diamonds.svg';
import jh from '../../assets/deck/jack_of_hearts.svg';
import js from '../../assets/deck/jack_of_spades.svg';
import kc from '../../assets/deck/king_of_clubs.svg';
import kd from '../../assets/deck/king_of_diamonds.svg';
import kh from '../../assets/deck/king_of_hearts.svg';
import ks from '../../assets/deck/king_of_spades.svg';
import qc from '../../assets/deck/queen_of_clubs.svg';
import qd from '../../assets/deck/queen_of_diamonds.svg';
import qh from '../../assets/deck/queen_of_hearts.svg';
import qs from '../../assets/deck/queen_of_spades.svg';
import back from '../../assets/deck/back/back.svg';

const svgArray = [
  { src: _2c, key: '2c' },
  { src: _2d, key: '2d' },
  { src: _2h, key: '2h' },
  { src: _2s, key: '2s' },
  { src: _3c, key: '3c' },
  { src: _3d, key: '3d' },
  { src: _3h, key: '3h' },
  { src: _3s, key: '3s' },
  { src: _4c, key: '4c' },
  { src: _4d, key: '4d' },
  { src: _4h, key: '4h' },
  { src: _4s, key: '4s' },
  { src: _5c, key: '5c' },
  { src: _5d, key: '5d' },
  { src: _5h, key: '5h' },
  { src: _5s, key: '5s' },
  { src: _6c, key: '6c' },
  { src: _6d, key: '6d' },
  { src: _6h, key: '6h' },
  { src: _6s, key: '6s' },
  { src: _7c, key: '7c' },
  { src: _7d, key: '7d' },
  { src: _7h, key: '7h' },
  { src: _7s, key: '7s' },
  { src: _8c, key: '8c' },
  { src: _8d, key: '8d' },
  { src: _8h, key: '8h' },
  { src: _8s, key: '8s' },
  { src: _9c, key: '9c' },
  { src: _9d, key: '9d' },
  { src: _9h, key: '9h' },
  { src: _9s, key: '9s' },
  { src: _10c, key: '10c' },
  { src: _10d, key: '10d' },
  { src: _10h, key: '10h' },
  { src: _10s, key: '10s' },
  { src: acec, key: 'acec' },
  { src: aced, key: 'aced' },
  { src: aceh, key: 'aceh' },
  { src: aces, key: 'aces' },
  { src: jc, key: 'jc' },
  { src: jd, key: 'jd' },
  { src: jh, key: 'jh' },
  { src: js, key: 'js' },
  { src: kc, key: 'kc' },
  { src: kd, key: 'kd' },
  { src: kh, key: 'kh' },
  { src: ks, key: 'ks' },
  { src: qc, key: 'qc' },
  { src: qd, key: 'qd' },
  { src: qh, key: 'qh' },
  { src: qs, key: 'qs' }
];

const cardBack = { src: back, key: 'back' };

function RotatingStack() {

  const [items, setItems] = useState(() => [
    cardBack,
    ...svgArray,
  ]);

  const rotate = () => {
    setItems(prev => {
      if (prev.length <= 1) return prev;  // Fixed threshold
      if (prev[0].key === 'back') return prev.slice(1); // Do not rotate if top is back

      return [
        ...prev.slice(1), // remove first item
        prev[0]           // add it to the end 
      ];
    });
  };

  return (
    <div className="stack stack-end w-48 cursor-pointer" onClick={rotate}>
      {items.map(item => (
        <img key={item.key} src={item.src} className="rounded-box" alt="" />
      ))}
    </div>
  );
}

export default RotatingStack;
