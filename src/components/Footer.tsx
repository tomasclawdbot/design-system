// Footer Component
// Following raphaelsalaja's open knowledge principle: Document everything

export default function Footer() {
  return (
    <footer className="footer-animate border-t py-8 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
        <p>Design System v1.0</p>
        <p>Inspired by @ryolu_, @emilkowalski, @raunofreiberg, @nandafyi, @joshpuckett, @raphaelsalaja, @avstorm, @benjitaylor</p>
      </div>
      <div className="max-w-6xl mx-auto mt-4 pt-4 border-t">
        <p className="text-xs">
          Skills: <a href="/skills/README.md" className="hover:underline">see /skills/</a> for reference guides
        </p>
      </div>
    </footer>
  );
}
