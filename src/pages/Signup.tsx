import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup = () => {
  const { user, loading, signInWithGoogle, signInWithGithub, signUpWithEmail } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [signingUp, setSigningUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!loading && user) navigate("/", { replace: true });
  }, [user, loading, navigate]);

  const handleGoogle = async () => {
    setError(null);
    setSigningUp(true);
    try { await signInWithGoogle(); } catch (e: any) { setError(e?.message || "Google sign-in failed"); } finally { setSigningUp(false); }
  };

  const handleGithub = async () => {
    setError(null);
    setSigningUp(true);
    try { await signInWithGithub(); } catch (e: any) { setError(e?.message || "GitHub sign-in failed"); } finally { setSigningUp(false); }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (fullName.trim().length > 100) {
      setError("Name must be less than 100 characters.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSigningUp(true);
    try {
      await signUpWithEmail(email, password, fullName.trim());
    } catch (err: any) {
      if (err?.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please Sign In instead.");
      } else {
        setError(err?.message || "Sign up failed");
      }
    } finally {
      setSigningUp(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background circuit-bg relative flex items-center justify-center px-4 py-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl font-bold tracking-tight">
            <span className="text-primary">slider</span>
            <span className="text-muted-foreground"> - dev</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">Create your developer account</p>
        </div>

        <div className="glass rounded-xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-display font-semibold text-foreground">Create Account</h2>
            <p className="text-muted-foreground text-sm mt-1">Join the platform today</p>
          </div>

          {error && (
            <div
              className="rounded-lg px-4 py-3 text-sm font-medium"
              style={{
                backgroundColor: error.includes("already registered")
                  ? "hsl(25 95% 53% / 0.12)"
                  : "hsl(var(--destructive) / 0.1)",
                borderColor: error.includes("already registered")
                  ? "hsl(25 95% 53% / 0.25)"
                  : "hsl(var(--destructive) / 0.2)",
                color: error.includes("already registered")
                  ? "hsl(25 95% 53%)"
                  : "hsl(var(--destructive))",
                border: "1px solid",
              }}
            >
              {error}{" "}
              {error.includes("already registered") && (
                <Link to="/login" className="underline font-semibold">Go to Sign In →</Link>
              )}
            </div>
          )}

          {/* Email/Password Signup Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <button
              type="submit"
              disabled={signingUp}
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-accent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signingUp ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-3">
            <button
              onClick={handleGoogle}
              disabled={signingUp}
              className="w-full flex items-center justify-center gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
            <button
              onClick={handleGithub}
              disabled={signingUp}
              className="w-full flex items-center justify-center gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Continue with GitHub
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-1 w-6 rounded-full" style={{ backgroundColor: i === 2 ? "hsl(var(--primary))" : "hsl(var(--muted))" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;
