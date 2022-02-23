export default function InputField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      data-testid="input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
}
