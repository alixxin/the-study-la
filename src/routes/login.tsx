import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-6 text-ink">
      <div className="w-full max-w-sm">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-mute">The Study</p>
        <h1 className="mt-2 font-display text-[36px] tracking-[-0.03em]">Sign in</h1>
        <p className="mt-2 text-[14px] text-ink-soft">Private tools. Public pages do not require this.</p>
        <div className="mt-8 space-y-2">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="w-full border border-line bg-paper px-4 py-3 font-sans text-[13px] tracking-[0.06em] hover:border-ink"
              >
                Continue with {p.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-mute">Sign-in is disabled.</p>
          )}
        </div>
        <Link to="/" className="mt-8 inline-block font-sans text-[12px] uppercase tracking-[0.12em] text-mute">
          ← Studio
        </Link>
      </div>
    </main>
  );
}
