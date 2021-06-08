require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind huge grace dry fortune turtle'; 
let testAccounts = [
"0x94a2412500ed7bc2bf4ebe81c15211d09d9debf780c7b9393b0e58fa0efe7548",
"0xaa7c0d67bf04ee99c77c6e1b4e50312a13bdbe48a6d5cce4057e835fac0b3854",
"0x735fade952381dda6004640a55e7c384739814d3f8a8d46713709b0833f65697",
"0x38fbb4197d7a117bcb345efa5fe09769e4f921d4c86204a146819281f296356c",
"0xc19b0f2e197a3b08e37e1a890c35369cd50b6e6422fe1fd5f83b8bdedf0ef10a",
"0xd8825f0e3c52926b2148fa78ff681c21d35589e2dcbf4ad2119f0a30fdfd602c",
"0x6e7b7880e71cbe3743ae43c6013c628f8597ccc13cc841fdeb6c7a83fbea9627",
"0x99fe3b2d752b3a474500467e3bc574c0ea0f43e7095ca5fac5ffaad2c92b2199",
"0xef73709ca7d03d1ae05f2c6228b0e508ca46d9696d0e7dc1db4d24f417798bc8",
"0x896ffbee955f3cec30ce44aeca7e0924d182a47df71dcc8e3ae3307e6b031ba1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

