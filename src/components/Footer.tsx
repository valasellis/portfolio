export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-center items-center bg-white border-t border-neutral-200 text-neutral-500 text-sm">
      <span>
        © {new Date().getFullYear()} Dimitris Valasellis &mdash; Front-end
        Developer
      </span>
    </footer>
  );
}
