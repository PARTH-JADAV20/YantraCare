import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Wrench, Mail, Lock, User, Loader2, ArrowLeft, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ThemeToggle from '@/components/common/ThemeToggle';
import LoadingScreen from '@/components/common/LoadingScreen';
import { toast } from '@/hooks/use-toast';
import { authApi } from '@/services/api';
import { UserRole } from '@/types';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'employee' as UserRole,
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Password mismatch',
        description: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: 'Password too short',
        description: 'Password must be at least 6 characters',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Call real API to register
      await authApi.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      toast({
        title: 'Account created!',
        description: 'You can now sign in with your credentials',
      });
      setShowLoading(true);
      // Show loading screen for 2 seconds before navigating to login
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/login');
      }, 2000);
    } catch (error: any) {
      setIsSubmitting(false);
      toast({
        title: 'Sign up failed',
        description: error.response?.data?.message || 'An error occurred during sign up',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <LoadingScreen isVisible={showLoading} message="Account created! Setting up your workspace..." />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4 relative overflow-hidden">
        {/* Animated background symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Maintenance and equipment themed emojis */}
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md animate-fade-in relative z-10">
        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-4"
          onClick={() => navigate('/login')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to login
        </Button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent mb-4 shadow-glow animate-pulse-slow">
            <Wrench className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-2">YantraCare</h1>
          <p className="text-muted-foreground">Create your account to get started</p>
        </div>

        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
          <CardHeader className="text-center pb-4 space-y-1">
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>Join YantraCare and streamline your maintenance workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleChange('role', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
      </div>
    </>
  );
};

export default SignUp;

