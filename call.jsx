const contractId = "dev-1687611777897-11824052439422";
const method = "plus";
const args = { number: 1 };

State.init({
  contractName: "",
  methodName: "",
  number: 0,
});

const callMethod = () => {
  //   Near.call(contractId, method, args);
  Near.call([
    {
      contractName: state.contractName,
      methodName: state.methodName,
      args: {
        number: parseInt(state.number),
      },
      gas: Big(10).pow(12).mul(30),
    },
  ]);
};

const handleChange = (event) => {
  const { id, value } = event.target;
  State.update({
    ...state,
    [id]: value,
  });
};

return (
  <div>
    <div>
      <label>Contract Name</label>
      <input
        type="text"
        value={state.contractName}
        id="contractName"
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
    <div>
      <label>Method</label>
      <input
        type="text"
        id="methodName"
        value={state.methodName}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
    <div>
      <label>Number</label>
      <input
        type="number"
        id="number"
        value={state.number}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
    <button onClick={callMethod}>Call</button>
  </div>
);
