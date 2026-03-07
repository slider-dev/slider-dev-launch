import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut, Save, Mail, Github, Chrome, KeyRound } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!user) return null;

  const initial = (user.displayName || user.email || "U")[0].toUpperCase();
  const providers = user.providerData.map((p) => p.providerId);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile(user, { displayName });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    navigate("/");
  };

  const providerBadge = (id: string) => {
    const map: Record<string, { icon: typeof Mail; label: string }> = {
      "google.com": { icon: Chrome, label: "Google" },
      "github.com": { icon: Github, label: "GitHub" },
      "password": { icon: KeyRound, label: "Email" },
    };
    const p = map[id];
    if (!p) return null;
    const Icon = p.icon;
    return (
      <span
        key={id}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground font-mono"
      >
        <Icon className="h-3 w-3 text-primary" />
        {p.label}
      </span>
    );
  };

  return (
    <div className="relative">
      {/* Grid background */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-24 pb-12">
        <div className="w-full max-w-lg animate-fade-in">
          {/* Glass card */}
          <div className="rounded-2xl border border-border/50 p-8 backdrop-blur-xl" style={{ background: "hsl(var(--glass-bg))" }}>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-primary/60"
                  style={{ boxShadow: "0 0 24px hsl(var(--glow-orange))" }}
                />
              ) : (
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-muted text-3xl font-bold text-primary ring-4 ring-primary/60 font-mono"
                  style={{ boxShadow: "0 0 24px hsl(var(--glow-orange))" }}
                >
                  {initial}
                </div>
              )}
            </div>

            {/* Provider badges */}
            <div className="flex justify-center gap-2 mb-8">
              {providers.map((id) => providerBadge(id))}
            </div>

            {/* Display Name */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-mono">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground font-mono placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your display name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 mb-8">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-mono">
                Email
              </label>
              <input
                type="email"
                value={user.email || ""}
                disabled
                className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground font-mono cursor-not-allowed opacity-70"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                style={{ boxShadow: "0 0 20px hsl(var(--glow-orange))" }}
              >
                <Save className="h-4 w-4" />
                {saved ? "Saved!" : saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-destructive hover:border-destructive/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>

            {/* UID footer */}
            <div className="mt-8 pt-4 border-t border-border/30 text-center">
              <span className="text-[10px] text-muted-foreground/50 font-mono tracking-wider">
                UID: {user.uid}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
