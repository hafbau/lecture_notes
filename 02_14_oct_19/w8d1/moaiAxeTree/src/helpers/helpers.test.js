import { announceResult, computerSelects } from './helpers';

describe('announceResult function', () => {  
  it('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    const playerSelection = 'Axe';
    const compSelection = 'Tree';
    expect(announceResult(playerSelection, compSelection)).toBe('Won');
  });

  it('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    const playerSelection = 'Axe';
    const compSelection = 'Axe';
    expect(announceResult(playerSelection, compSelection)).toBe('Tied');
  });

  it('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    const playerSelection = 'Axe';
    const compSelection = 'Moai';
    expect(announceResult(playerSelection, compSelection)).toBe('Lost');
  });

  it('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});


describe('computerSelects function', () => {
  describe('given "cheating" is true', () => {
    it('returns "Moai" if player is "Axe" and cheating is true', () => {
      const playerSelection = 'Axe';
      const cheating = true;
      const compSelection = computerSelects(playerSelection, cheating);
      expect(compSelection).toBe('Moai');
    });

    it('returns "Axe" if player is "Tree" and cheating is true', () => {
      const playerSelection = 'Tree';
      const cheating = true;
      const compSelection = computerSelects(playerSelection, cheating);
      expect(compSelection).toBe('Axe');
    });

    it('returns "Tree" if player is "Moai" and cheating is true', () => {
      const playerSelection = 'Moai';
      const cheating = true;
      const compSelection = computerSelects(playerSelection, cheating);
      expect(compSelection).toBe('Tree');
    });
  });
  describe('given "cheating" is  not true', () => {
    it('returns a valid option if cheating is not true', () => {
      const playerSelection = 'Axe';
      const cheating = false;
      const compSelection = computerSelects(playerSelection, cheating);
      const options = ['Moai', 'Axe', 'Tree'];
      expect(options.includes(compSelection)).toBeTruthy();
    });
  });
});