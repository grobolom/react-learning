import { dedupeString } from './utils';

describe('#dedupeString', () => {
  it('removes duplicate characters', () => {
    const string = 'aaabbbcccbbbaaag';

    const result = dedupeString(string);

    expect(result).toEqual('abcg');
  });
});
