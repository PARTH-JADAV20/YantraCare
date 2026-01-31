import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Wrench, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeToggle from '@/components/common/ThemeToggle';
import LoadingScreen from '@/components/common/LoadingScreen';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await login({ email, password });
    
    if (success) {
      setShowLoading(true);
      // Show loading screen for 2 seconds before navigating
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    }
    
    setIsSubmitting(false);
  };

  const testCredentials = [
    { role: 'admin', email: 'admin@example.com', password: 'password123' },
    { role: 'manager', email: 'manager@example.com', password: 'password123' },
    { role: 'technician', email: 'technician@example.com', password: 'password123' },
    { role: 'employee', email: 'employee@example.com', password: 'password123' },
  ];

  const fillTestCredentials = (role: string) => {
    const creds = testCredentials.find(c => c.role === role);
    if (creds) {
      setEmail(creds.email);
      setPassword(creds.password);
    }
  };

  return (
    <>
      <LoadingScreen isVisible={showLoading} message="Welcome back! Loading your workspace..." />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4 relative overflow-hidden">
        {/* Animated background symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gear symbols */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-spin-slow">⚙️</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15 animate-spin-slow" style={{ animationDirection: 'reverse' }}>🔧</div>
        <div className="absolute bottom-32 left-20 text-7xl opacity-12 animate-bounce-slow">⚡</div>
        <div className="absolute bottom-20 right-40 text-6xl opacity-10 animate-pulse">🔩</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-8">🛠️</div>
        <div className="absolute bottom-1/4 left-1/3 text-6xl opacity-12 animate-spin-slow">⚒️</div>
        <div className="absolute top-1/4 left-1/4 text-5xl opacity-10">🔨</div>
        <div className="absolute bottom-40 right-10 text-6xl opacity-15 animate-pulse">💡</div>
        <div className="absolute top-1/2 left-10 text-5xl opacity-8">🏗️</div>
        <div className="absolute bottom-1/3 right-1/3 text-6xl opacity-10 animate-bounce-slow">⚙️</div>
        <div className="absolute top-32 right-1/3 text-5xl opacity-12">🔧</div>
        <div className="absolute bottom-24 left-1/4 text-6xl opacity-9 animate-spin-slow" style={{ animationDirection: 'reverse' }}>🔩</div>

        {/* Gradient blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md animate-fade-in relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent mb-4 shadow-glow animate-pulse-slow">
            <Wrench className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-2">YantraCare</h1>
          <p className="text-muted-foreground">The Ultimate Maintenance Tracker</p>
        </div>

        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
          <CardHeader className="text-center pb-4 space-y-1">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>

            {/* Testing Role Buttons */}
            <div className="mt-8 pt-6 border-t">
              <p className="text-xs text-muted-foreground text-center mb-3 font-medium">Quick Test Login</p>
              <div className="grid grid-cols-2 gap-2">
                {testCredentials.map((cred) => (
                  <Button
                    key={cred.role}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fillTestCredentials(cred.role)}
                    className="text-xs capitalize"
                  >
                    {cred.role}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
};

export default Login;
