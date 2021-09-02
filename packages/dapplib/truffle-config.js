require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strong rival noble attitude hover private equal giggle'; 
let testAccounts = [
"0x248558219b2599a89304d0714d3ca7efe710b269229fdb73646b8e50100167f5",
"0xd554c9bf1647313f23c5b45a22114a5d9d4bc1cd0fd6243f6c45e0dbc5ba325c",
"0xe847fda6f7955231733a407c50a86c50e3953a929e7b94d1ccee593275764ce9",
"0x648313aff82ee2efc71c6472b61936c8e2f7ed2db01cdc01dd5f771f72182210",
"0x11893335906030ca7aee2a176135f7c262e9da95560c9222aa47afafe18b8483",
"0xfbee51a7444d2e9a1d6f3a281f45c129c8d58cbf1f533ab9b25a1ff51cb03adf",
"0xac9db95e70482b51aa45915a989454478568fb272d86c21f7831dd9aaa279024",
"0x72bd6ef1b750634f36702ffa05bf33d7cf0aff64f480c891eff25d2f67793829",
"0x2246483172df611e79d79f152323902dd4840b8a8bf38fb351f066d70cf93a76",
"0x531ab3b3e5cf066a84efd90b55daa8bdc8def74b3ed1492f19750649df332d63"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

