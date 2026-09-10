export function ErrorBox({ inputError }: { inputError: string }) {
  return (
    <div className="bg-input-bg absolute top-20 right-0 border border-input-border p-2 rounded-md speech-bubble">
      <p className="bg-input-bg">{inputError}</p>
    </div>
  );
}
