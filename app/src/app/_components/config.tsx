"use client";

const Config = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const human = formData.get("human") as string;
    const persona = formData.get("persona") as string;

    console.log({ human, persona });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <span>Human</span>
      <textarea className="bg-transparent" name="human"></textarea>

      <span>Persona</span>
      <textarea className="bg-transparent" name="persona"></textarea>

      <button className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
        Save
      </button>

      <button className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
        Reset Everything
      </button>
    </form>
  );
};

export default Config;
