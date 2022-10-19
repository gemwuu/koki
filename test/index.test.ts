import execa from 'execa';
import path from 'path';
import assert from 'assert';

describe('core test', () => {
  const fixtures = path.join(__dirname, 'fixtures');
  it('should work', async () => {
    const miniCli = path.join(fixtures, 'mini-cli');
    const { stdout } = await execa('esno', [ path.resolve(miniCli, 'bin/index.ts') ]);
    assert.strictEqual(stdout, JSON.stringify({ a: 1 }));
  });
});
