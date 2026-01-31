import React from 'react';
import { Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isVisible: boolean;
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isVisible, 
  message = 'Loading your workspace...' 
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Animated background symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in">
        {/* Animated logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent blur-2xl opacity-50 animate-pulse-slow"></div>
          <div className="relative inline-flex items-center justify-center h-24 w-24 rounded-3xl bg-gradient-to-br from-primary to-accent shadow-glow">
            <Wrench className="h-12 w-12 text-primary-foreground animate-bounce-slow" />
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold gradient-text">YantraCare</h1>
          <p className="text-muted-foreground text-lg">{message}</p>
        </div>

        {/* Loading bar */}
        <div className="w-64 space-y-3">
          {/* Animated bar */}
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-loading-bar" style={{ width: '30%' }}></div>
          </div>

          {/* Dots animation */}
          <div className="flex items-center justify-center gap-1">
            <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Subtle text */}
        <p className="text-sm text-muted-foreground animate-pulse">Initializing system...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
