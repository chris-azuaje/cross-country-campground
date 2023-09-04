import Modal from './Modal';
import useModal from '../hooks/useModal';
import { Rates } from './Rates';
import { Rules } from './Rules';

export function About() {
  const { isRulesOpen, isRatesOpen, toggleRules, toggleRates } = useModal();

  return (
    <div>
      <div className='about nav-section'>
        <div>
          <h2 className='section-title'>About Us</h2>
          <p>Visit or Stay with us...</p>
          <ul>
            <li>
              Overnight, Weekends, Family Vacations, Special Events, even
              Year-round... We have so much to offer!
            </li>
            <li>
              Nearby renown amusement parks, professional sports, Nascar,
              museums, artistic entertainment, booating, fishing, adventure
              activities and much, much more!
            </li>
            <li>
              Activities for the entire family... All ages, Treasure hunts,
              Family tournaments, too many to list...
            </li>
            <li>
              Conveniently located near Post Offices, Banks, Repairs, Grocery
              stores, Shopping, Dining... Personal services...
            </li>
          </ul>
          <div className='btns'>
            <button onClick={toggleRules}>Camground Rules</button>
            <button onClick={toggleRates}>Camground Rates</button>
          </div>
        </div>
        <img src='/images/night-rv.jpg' alt='' className='night-rv-img'></img>
      </div>
      <Modal isOpen={isRulesOpen} toggle={toggleRules} modalId='rules'>
        <Rules />
      </Modal>
      <Modal isOpen={isRatesOpen} toggle={toggleRates} modalId='rates'>
        <Rates />
      </Modal>
    </div>
  );
}
