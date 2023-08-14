const contractId = "dev-1687611777897-11824052439422";
const method = "get_number";
const args = {};

State.init({
  contractName: "dev-1687611777897-11824052439422",
  methodName: "get_number",
  result: 0,
  isGetResult: false,
});

const handleChange = (event) => {
  const { id, value } = event.target;
  State.update({
    [id]: value,
  });
};

const getResult = () => {
  State.update({
    isGetResult: true,
    result: Near.view(state.contractName, state.methodName, {}),
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
    <button onClick={getResult}>Call</button>
    <div>{state.isGetResult && state.result}</div>
  </div>
);
