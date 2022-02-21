export default function InputField({ placeholder }) {
  return (
    <input
      type="text"
      data-testid="input-field"
      placeholder={placeholder}
    ></input>
  );
}
