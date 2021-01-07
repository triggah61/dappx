const dAppStoreToken = artifacts.require("dAppStoreToken");

// if beneficiaryAddress is empty deployer will be beneficiary
const beneficiaryAddress = '0xFbED8E6F531AB67dCe35043E11B74e1fe6e168B2';

// if owershipAddress is empty deployer will be owner
const owershipAddress = '0x399863ea369D6108c2f32B6ac866a60A4E51F9CC';

module.exports = function(deployer) {
  let contract;
  deployer.deploy(dAppStoreToken)
    .then((instance) => {
      contract = instance;
      return contract.totalSupply();
    })
    .then(totalSupply => {
      console.log("Current supply", totalSupply.toString());
      if(!isEmpty(beneficiaryAddress)) {
        console.log("Transfer all token to beneficiary");
        return contract.transfer(beneficiaryAddress, totalSupply);
      }
    })
    .then(result => {
      console.log("Transfer Token txHash:", result.tx);
      if(!isEmpty(owershipAddress)) {
        console.log("Starting transferOwnership");
        return contract.transferOwnership(owershipAddress);
      }
    })
    .then(result => {
      console.log("TransferOwnership txHash:", result.tx);
      console.log(`Finished deployment to network '${deployer.network}'`);
    })
    ;
};

function isEmpty(value) {
  return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
}
