import test from 'ava';
import { generateKeyPair } from '../generateKeyPair';
import { UserInformations } from '../types';

test('generate a key pair', async t => {
    const passphrase = 'my secret phrase';
    // Limit key size for tests purposes
    const numBits = 512;
    const user: UserInformations = {
        name: 'John Doe',
        email: 'ghost@github.com'
    };

    const { publicKey, privateKey } = await generateKeyPair(
        user,
        passphrase,
        numBits
    );

    t.not(publicKey, undefined);
    t.not(privateKey, undefined);
    t.true(publicKey.startsWith('-----BEGIN PGP PUBLIC KEY BLOCK-----'));
    t.true(privateKey.startsWith('-----BEGIN PGP PRIVATE KEY BLOCK-----'));
});
